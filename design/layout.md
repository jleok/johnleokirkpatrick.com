# Layout

Section-by-section layout for the homepage, plus the project detail template.
Pairs with `sitemap.md` (what's in each block) and `theme.md` (the tokens
referenced below).

## Homepage

### 1. Header

- Full-width bar, `--bg` background, sits directly on the page (no surface
  fill, no shadow) — a single `--border` hairline at the bottom is optional and
  can be omitted in favor of whitespace alone.
- Height: auto, ~96px desktop / ~72px mobile, generous vertical padding
  (`--space-6`/32px+).
- Layout: flex row, space-between. Left: name/short identifier set in Fraunces
  500 at `--text-h3`-ish size (smaller than the hero display size — this is a
  persistent header, not the hero). Right: single email link (`mailto:`) styled
  as plain text with the accent color on hover, in `--text-small` Plex Sans.
  A "Work" anchor link (`#work`) may sit to the left of the email link — only
  needed if the intro strip is tall enough that a return-to-top-of-grid jump is
  useful; can be dropped for true minimalism since there's only one page.
- No hamburger menu, no multi-item nav — there's nothing else to link to.
- Sticky on scroll is optional; if used, keep it a plain `--bg` bar with no
  added shadow/border-heavy treatment (stays quiet).

### 2. Intro strip

- Full-width, generous top padding (`--space-10`/128px on desktop, `--space-8`
  on mobile) below the header, `--space-8` bottom padding before the work
  index begins.
- Content constrained to a narrower measure than the full grid — max ~640px
  wide, left-aligned within the standard content gutter (not centered — keeps
  the page reading top-to-bottom-left like a document, not centered/marketing-
  page-style).
- Content: 1 line at `--text-display` (Fraunces) — the name or a short framing
  line — then 2–3 sentences at `--text-body` (Plex Sans) underneath in
  `--text-secondary`. Current copy (see `homepage-mockup.html`): headline
  "Systems and service, same set of habits."; body "I'm an Information
  Systems graduate from New Mexico State University, currently serving as a
  Peace Corps Community Economic Development Volunteer in Namibia — the sole
  on-site IT resource for a nonprofit office, and the lead on the training
  programmes below. I return to New Mexico in November 2026." Grounded in the
  user's actual resume summary rather than placeholder copy — update this
  line as new projects get added, so it keeps naming what's actually in the
  grid below it rather than going stale.
- No CTA button, no social proof row. This is the one place the work gets
  named in prose, once, briefly — everything else lets the project grid do
  the talking.
- **Portrait photo** (added — supersedes the original "no photo" call): sits
  beside the intro text, not inside it, so the text block stays the thing
  being read first. Layout: `.intro-inner` is a flex row — text on the left
  (`flex: 1 1 420px`, keeps its 640px measure cap), photo on the right,
  fixed width `220px`, `align-items: flex-start` so the photo's top edge
  lines up with the headline rather than floating centered. Gap:
  `--space-8` (64px) between them.
  - **Frame**: same visual language as a project card — `1px solid
    var(--border)`, `border-radius: 6px`, `--surface` fill behind it, no
    drop shadow. This is deliberate: the photo should read as one more
    quiet block in the same system, not a hero image breaking the type-led
    tone.
  - **Treatment**: kept in color, no grayscale filter. A grayscale/desaturated
    treatment was considered (to insulate an arbitrary photo's color from the
    warm-neutral palette) but rejected once a real photo was in hand — the
    warm wood tones in the actual shot already sit close to the palette, so
    desaturating it would have thrown away information for no benefit. If a
    future replacement photo clashes with the palette, revisit
    `filter: grayscale(100%) contrast(1.05)` on `.intro-photo img` as a
    fallback.
  - **Aspect**: 4:5 portrait crop, head-and-shoulders-plus-context framing.
  - **Source photo**: the source image was shot at a dutch angle (phone held
    at roughly 45° off level) with EXIF orientation only correcting 90°
    increments, not arbitrary rotation — so it needed a manual
    `rotate(45°, expand=True)` (via Pillow) before cropping. Final asset:
    `design/assets/portrait.jpg`, 680×850px. `homepage-mockup.html` embeds
    it directly as a base64 data URI so the mockup stays a single
    self-contained file — at build time, switch to a normal
    `<img src="/img/portrait.jpg" alt="John Kirkpatrick">` referencing the
    asset file instead of inlining it.
  - **Responsive**: below 1024px, `.intro-inner` switches to
    `flex-direction: column` (photo drops below the text, not above —
    keeps the "read the framing line first" order), and the photo shrinks
    to `160px` wide, still left-aligned (not centered), consistent with the
    rest of the page's document-style alignment.

### 3. Work index

This is the visual and informational core of the page — give it the most
vertical space of any block.

- Section anchor `id="work"`. Optional small `--text-meta` eyebrow label
  ("Selected work" or similar) in Plex Mono, `--text-secondary`, above the
  grid — quiet, not a big section heading (no giant "PROJECTS" banner; the
  intro strip already did the framing work).
- **Presentation: grid of cards, not a dense list.** A list reads as a resume;
  a card grid gives each project (technical or field) equal visual weight and
  room for a one-line description plus metadata — important since these are
  qualitatively different kinds of work and equal visual treatment is exactly
  what avoids a two-track feel.
- Grid: 2 columns at desktop (≥1024px) using the 12-col grid (each card spans
  6 columns), 1 column at tablet and mobile. Deliberately not 3+ columns —
  with a small, curated project count, 2 columns keeps each card wide enough
  for a real description line instead of shrinking to an icon-and-title tile.
- Card composition (each project, same template regardless of domain):
  - **Photo** (added — optional per project, same rule as the intro photo:
    only where a real image exists): sits above the meta line, inset within
    the card's existing padding — same frame language as `.intro-photo`
    (`1px solid var(--border)`, `border-radius: 6px`, `--surface` fill
    behind it, no drop shadow), not full-bleed to the card edges, so it
    reads as one more block in the card rather than a different component.
    Aspect ratio `16:9`, `object-fit: cover`. Kept in color, no grayscale,
    consistent with the intro photo's treatment. Source images:
    `design/assets/teacher-training-kavango-west.jpg`,
    `design/assets/don-bosco-preincubation.jpg` — embedded as base64 data
    URIs in `homepage-mockup.html` for the same self-contained-mockup
    reason as the portrait; at build time, switch to normal `<img
    src="...">` references to the asset files instead.
  - Top: `--text-meta` line in Plex Mono, `--text-secondary` — domain tag +
    location + year, e.g. `FIELD · Kavango West, Namibia · Oct 2025–Sep 2026`
    or `FIELD · Don Bosco Youth Centre · May 2026` (current real entries — see
    `homepage-mockup.html`). Once IT/systems work is added it'll take a
    `SYSTEMS`-style tag in the same slot. The tag vocabulary is small and
    consistent (2–4 tags total across the whole site) and is the **only**
    visual differentiator between an IT project and a Peace Corps project —
    same card shape, same type sizes, same border, just a different word in
    the same slot. This is the "unified not split" decision from
    `research.md` made concrete.
  - Middle: project title, Fraunces 500 at `--text-h2` (scaled down slightly
    inside a card vs. a full page H1 — implementer's call, suggest ~26px in-
    card vs 30px standalone).
  - Below title: 1–2 line description, Plex Sans `--text-body`,
    `--text-primary`.
  - Bottom: a quiet text link ("Read more" / "View project →") in `--accent`,
    `--text-small`, Plex Sans 500 — the entire card should also be a click
    target to its detail page, not just this link.
  - Card container: `--surface` background, 1px `--border`, no shadow, modest
    padding (`--space-5`/~24–32px), consistent corner radius kept small (4–6px)
    or square — square corners lean slightly more editorial/technical, a small
    radius leans slightly softer; either is consistent with the brief, pick one
    and hold it everywhere.
  - Card-to-card gap: `--space-6` (32px) column and row gap.
- Order: chronological (most recent first) by default is the simplest honest
  ordering and avoids the appearance of ranking one kind of work above the
  other; the user can hand-curate order later if they want a specific project
  first.

### 4. Footer

- Full-width, `--bg`, top hairline `--border` optional, generous top padding
  (`--space-8`).
- Flex row (desktop) collapsing to stacked (mobile): left = copyright/year in
  `--text-meta` Plex Mono `--text-secondary` (e.g. `© 2026`); right = email
  link repeated + optional 1–2 profile links (GitHub/LinkedIn), same treatment
  as header's email link.
- No sitemap-style link list, no newsletter signup, no social icon row beyond
  the 1–2 links mentioned.

## Project detail page

Archetype confirmed (see `design/project-detail-mockup.html` for the built
reference, using the ATCE-II teacher training project as the worked
example): **pure prose, no extra components.** A pull-quote block and a
compact stats-strip component were both considered and explicitly rejected
for a site this small — either would be one more piece of UI chrome to keep
consistent across every project page, and for two projects the payoff isn't
worth the added visual noise. Any quote or number that matters gets folded
into a sentence in the body copy instead (e.g. "self rated competence rose
from 3.90 to 4.17" reads as a sentence, not a dashboard tile). This keeps the
detail page exactly as restrained as the homepage, just longer.

- Same header and footer as homepage (header's email link stays; "Work" link
  now genuinely useful to get back).
- Back link ("← Work") top-left below header, `--text-small`, `--accent`.
- Header block: project title (Fraunces 500, ~40px desktop / ~30px mobile —
  see `--text-h1-detail` token in the mockup), immediately below it the same
  `--text-meta` Plex Mono tag/location/year line used on the card, so the
  connection to the homepage card is visually obvious.
- Body: single column, constrained measure (~680px, narrower than the full
  content width) for readability of longer technical prose — same principle
  as the intro strip. Plex Sans `--text-body`, generous paragraph spacing
  (`--space-4`). Loose narrative shape per project (see `sitemap.md`):
  problem/context → approach → outcome, as plain paragraphs — no bullet
  lists, no bolded sub-labels standing in for structure.
- Sub-headings within the body (only if a specific project's write-up is
  long enough to genuinely need them — the ATCE-II example above didn't):
  Plex Sans 600 `--text-h3`, not Fraunces — Fraunces is reserved for the one
  big title per page so it keeps its weight as a signal.
- Media block: full content-width (not the narrow measure), simple `--border`
  frame, caption below in `--text-meta`. Comes after the body, per
  `sitemap.md`'s ordering. Optional in principle, but in practice every
  current project has exactly one photo (reused from its homepage card, same
  source asset, shown larger here) — treat "one photo" as the current de
  facto standard, not a hard requirement, since a future project without a
  photo shouldn't need a structural exception.
- **Photo rail** (added — fixes dead whitespace next to the 680px prose
  column at desktop widths, where the 1024px inner content area otherwise
  leaves ~260px of empty gutter to the right of the text): a `.detail-rail`
  of 2 small photos (`260px` wide, `4:3`, same frame language as
  `.card-photo`/`.intro-photo` — border, radius, surface fill, no shadow)
  sits beside `.detail-body` inside a flex row (`.detail-layout`, gap
  `--space-7`). These are supporting texture, not documentary record, so
  **no captions** on rail photos — only the single full-width media-block
  photo at the bottom gets a caption. Below `1024px`, the rail drops beneath
  the prose and switches to a horizontal row of 2 (same collapse direction
  as the intro photo, i.e. photo(s) after the text, not before). Every
  project should have exactly 2 rail photos + 1 bottom media photo (3 total)
  once photos are available; a project without photos yet just omits the
  rail and media sections rather than showing empty frames.
- No prev/next project pager required — keep it simple; "back to work" is
  enough given a small project count.

## Responsive summary

| Breakpoint | Work index | Intro/body measure | Intro photo | Header |
|---|---|---|---|---|
| Desktop ≥1024px | 2-col card grid | ~640px (intro), ~680px (project body) | 220px, right of text, top-aligned | single row, name left / email right |
| Tablet 640–1023px | 1-col card grid, cards full content width | same measure, content gutter shrinks to 32px | 160px, stacks below text, left-aligned | same row layout, tighter padding |
| Mobile <640px | 1-col, full-width cards, `--space-4` gap | full width minus 24px gutter each side | 160px, stacks below text, left-aligned | name and email stack or stay inline if they fit; drop optional "Work" link first if space is tight |

Nothing structurally changes across breakpoints — no hidden nav, no hamburger,
no collapsed accordion. The only responsive behavior is column count and
spacing scale-down, which keeps the "single continuous scroll" feel intact at
every size.
