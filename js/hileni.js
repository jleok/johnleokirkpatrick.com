(() => {
  const canvas = document.getElementById('fx');
  const ctx = canvas.getContext('2d');
  const audio = document.getElementById('track');
  const btn = document.getElementById('play-btn');
  const label = btn.querySelector('.play-label');
  const frame = document.querySelector('.frame');

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;
  function resize(){
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // --- floating hearts particle system ---
  const hearts = [];
  const MAX_HEARTS = 40;
  let spawning = false;

  function heartPath(size){
    const p = new Path2D();
    p.moveTo(0, size * 0.3);
    p.bezierCurveTo(0, -size * 0.2, -size, -size * 0.2, -size, size * 0.3);
    p.bezierCurveTo(-size, size * 0.75, -size * 0.4, size, 0, size * 1.3);
    p.bezierCurveTo(size * 0.4, size, size, size * 0.75, size, size * 0.3);
    p.bezierCurveTo(size, -size * 0.2, 0, -size * 0.2, 0, size * 0.3);
    return p;
  }

  function spawnHeart(){
    if (hearts.length >= MAX_HEARTS) return;
    const palette = ['#e8a5a0', '#f2c9c4', '#d9b26a'];
    hearts.push({
      x: Math.random() * w,
      y: h + 30,
      size: 6 + Math.random() * 10,
      speed: 18 + Math.random() * 22,
      drift: (Math.random() - 0.5) * 18,
      wobble: Math.random() * Math.PI * 2,
      color: palette[(Math.random() * palette.length) | 0],
      life: 1,
    });
  }

  let spawnAcc = 0;
  function updateHearts(dt){
    if (spawning){
      spawnAcc += dt;
      const interval = 0.35;
      while (spawnAcc > interval){
        spawnAcc -= interval;
        spawnHeart();
      }
    }
    for (let i = hearts.length - 1; i >= 0; i--){
      const p = hearts[i];
      p.y -= p.speed * dt;
      p.wobble += dt * 1.4;
      p.x += Math.sin(p.wobble) * p.drift * dt;
      if (p.y < h * 0.08) p.life -= dt * 0.9;
      if (p.life <= 0 || p.y < -40){
        hearts.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life)) * 0.85;
      ctx.translate(p.x, p.y);
      ctx.scale(0.12, 0.12);
      ctx.fillStyle = p.color;
      ctx.fill(heartPath(p.size * 10));
      ctx.restore();
    }
  }

  // --- audio-reactive pulse ---
  let audioCtx = null, analyser = null, source = null, freqData = null;
  function setupAudioGraph(){
    if (audioCtx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    freqData = new Uint8Array(analyser.frequencyBinCount);
    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
  }

  function readPulse(){
    if (!analyser) return 0;
    analyser.getByteFrequencyData(freqData);
    const bassBins = Math.max(1, Math.floor(freqData.length * 0.25));
    let sum = 0;
    for (let i = 0; i < bassBins; i++) sum += freqData[i];
    return Math.min(1, (sum / bassBins) / 200);
  }

  // --- main loop ---
  let lastT = performance.now();
  function loop(t){
    const dt = Math.min(0.05, (t - lastT) / 1000);
    lastT = t;
    ctx.clearRect(0, 0, w, h);
    updateHearts(dt);
    if (frame){
      const pulse = spawning ? readPulse() : 0;
      frame.style.setProperty('--pulse', pulse.toFixed(3));
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // --- controls ---
  function setPlayingState(isPlaying){
    spawning = isPlaying;
    btn.setAttribute('aria-pressed', String(isPlaying));
    label.textContent = isPlaying ? 'Playing our song' : 'Play our song';
  }

  btn.addEventListener('click', async () => {
    setupAudioGraph();
    if (audioCtx && audioCtx.state === 'suspended') await audioCtx.resume();
    if (audio.paused){
      try { await audio.play(); } catch (e) { /* ignore */ }
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', () => setPlayingState(true));
  audio.addEventListener('pause', () => setPlayingState(false));
  audio.addEventListener('ended', () => setPlayingState(false));
})();
