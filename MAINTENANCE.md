# Maintaining johnleokirkpatrick.com

A reference for running this site day to day, written for someone new to git.

## How this site actually works (the mental model)

- The GitHub repo (`https://github.com/jleok/johnleokirkpatrick.com`) is the
  single source of truth. There is no separate production server to manage.
- GitHub Pages watches the `main` branch and republishes automatically on
  every push, usually within about a minute. **Pushing to `main` *is* the
  deploy** — there's no separate "deploy" step to run.
- There's no build process. What's in the repo (`index.html`,
  `css/styles.css`, `projects/*.html`, `assets/`, `fonts/`) is exactly what's
  served to visitors, byte for byte.
- The `CNAME` file at the repo root tells GitHub which custom domain to serve
  (`johnleokirkpatrick.com`). Your domain stays registered at Squarespace;
  its DNS records just point at GitHub's servers.
- `design/` is the design-phase reference (mockups, palette, layout specs)
  used to build the live pages — it's not part of the live site itself, just
  documentation for making future changes match the existing look.

## The core workflow (every time you change something)

1. Edit the files locally, in `/home/jleo/my-website` — either yourself or
   by asking Claude Code to make the change.
2. See what changed:
   ```
   git status      # which files changed
   git diff        # the actual line-by-line changes
   ```
3. **Test locally before pushing.** Once you push, it's live in under a
   minute — there's no staging buffer to catch mistakes first.
   ```
   python3 -m http.server 8123
   ```
   then open `http://localhost:8123` in a browser and check it.
4. Stage and commit:
   ```
   git add .
   git commit -m "short description of what changed"
   ```
5. Push it live:
   ```
   git push
   ```
6. Wait ~30–60 seconds, then check `https://johnleokirkpatrick.com` to
   confirm it looks right.

That loop — **edit → test locally → add → commit → push → verify live** —
is the entire job.

## Everyday git commands

| Command | What it does |
|---|---|
| `git status` | "What's changed since my last commit?" |
| `git diff` | Shows the exact changes, line by line |
| `git log --oneline` | Shows commit history |
| `git add <file>` | Stage one file (`git add .` stages everything changed) |
| `git commit -m "message"` | Save a snapshot with a description |
| `git push` | Send commits to GitHub — triggers the live redeploy |
| `git pull` | Pull down changes from GitHub you don't have locally |

## If you make a mistake

- **Haven't committed yet:** `git restore <file>` undoes changes to a file
  back to the last commit. `git restore --staged <file>` unstages something
  you `git add`ed by mistake.
- **Committed, not yet pushed:** `git reset --soft HEAD~1` undoes the last
  commit but keeps your changes, so you can fix and recommit.
- **Already pushed and something's broken live:** usually fastest to just
  fix the file and push a new commit ("fix forward"). If you need to fully
  back out a bad commit, `git revert <commit-hash>` creates a new commit
  that safely undoes an old one, without rewriting history (safe to do even
  after pushing — unlike `git reset`).
- `git log --oneline` to find the hash of "the last time it worked."

## What to actually monitor, realistically

This is a static site — no database, no server to patch, very little that
can silently break. Realistic cadence:

- **After every push:** just look at the live site once. That's the whole
  monitoring loop for content changes.
- **Monthly, roughly:** open `https://johnleokirkpatrick.com` yourself and
  click through both project pages — eyeball that nothing's visually broken
  (an image not loading, a font falling back oddly). Nothing alerts you
  automatically on a static site, so this has to be a habit.
- **Once a year — don't skip this one:** your Squarespace domain
  registration needs renewing. If it lapses, DNS stops resolving and the
  whole site goes down. Squarespace emails a reminder, but put the renewal
  date on your own calendar too.
- **Never needs action:** SSL certificate renewal (GitHub auto-renews the
  Let's Encrypt cert), server uptime/patching (GitHub Pages handles it),
  backups (every git commit is a restore point, and GitHub is itself an
  off-site copy of everything).

## FAQ

**Do I need to run anything after I push, to "deploy"?**
No. Pushing to `main` is the deploy.

**Can I edit files directly on github.com instead of the terminal?**
Yes, for small edits — open any file on GitHub, click the pencil icon, edit,
commit. If you do this, run `git pull` next time you work locally, or your
local copy goes stale and you could later overwrite the web edit.

**What if I lose this laptop or need a new machine?**
Nothing is lost — GitHub holds the full repo and history. On a new machine:
install git, generate a new SSH key (`ssh-keygen -t ed25519`), add the
public key to GitHub (Settings → SSH and GPG keys), then
`git clone git@github.com:jleok/johnleokirkpatrick.com.git`.

**Do I need branches, pull requests, a staging site?**
No — for a one-person personal site, committing straight to `main` (what
we've been doing) is completely standard, not "doing it wrong." Branches and
review earn their complexity when multiple people edit at once.

**How often should I commit?**
Whenever you finish a self-contained change. Could be monthly, could be five
times in an afternoon. No minimum.

**What's the actual difference between git and GitHub?**
Git is the version-control tool — works entirely on your machine, no
internet required. GitHub is a company that hosts git repositories online
and, in this case, also serves the static site straight from the hosted
repo (GitHub Pages). You could use git without GitHub; you couldn't have
GitHub Pages without git.
