# Theme

## Direction: light, warm-neutral, editorial-minimal

**Light mode**, not dark. Justification: the audience is peers evaluating
credibility and the content spans two very different registers (systems/IT work
and Peace Corps field work) — a dark "terminal/brutalist" developer-portfolio
aesthetic (flagged as a cliché in `research.md` §3) would visually code the site
as tech-only before a visitor reads a word, undercutting the Peace Corps half.
A warm off-white/paper background reads as editorial and human rather than
clinical-corporate (avoids pure `#FFFFFF` + pure gray, which reads as generic
SaaS) or terminal-coded (avoids near-black backgrounds).

One restrained accent color (terracotta/clay) is used instead of a generic
tech blue — it's warm without being decorative, and doesn't read as
belonging to either "world" more than the other (not a circuit-board green,
not a corporate blue, not a travel-brochure orange) — a small, deliberate way
the palette itself avoids taking sides between the two halves of the work.

## Palette

| Role | Hex | Notes |
|---|---|---|
| `--bg` | `#FAF9F6` | Page background. Warm off-white, not pure white. |
| `--surface` | `#F1EEE7` | Card/section backgrounds, subtle separation from `--bg`. |
| `--border` | `#E1DCCF` | Hairline dividers, card borders. Decorative only, not for text. |
| `--text-primary` | `#1A1A18` | Headings, body text. Near-black, warm cast (not pure `#000`). |
| `--text-secondary` | `#57544C` | Metadata, captions, secondary copy. |
| `--accent` | `#B5502F` | Links, tags, small emphasis marks. Terracotta/clay. |
| `--accent-strong` | `#9A4425` | Hover/active state for accent text (darker, more contrast on `--bg`). |
| `--accent-on-accent` | `#FFFFFF` | Text/icon color when placed on a solid `--accent` fill. |

### Contrast check (WCAG 2.1, computed against actual hex values)

| Pair | Ratio | Passes |
|---|---|---|
| `--text-primary` on `--bg` | 16.55:1 | AAA (body + large text) |
| `--text-primary` on `--surface` | 15.04:1 | AAA |
| `--text-secondary` on `--bg` | 7.18:1 | AAA (normal text) |
| `--text-secondary` on `--surface` | 6.52:1 | AA (normal text) |
| `--accent` on `--bg` | 4.80:1 | AA (normal text, ≥4.5:1) |
| `--accent-on-accent` (white) on `--accent` fill | 5.06:1 | AA (normal text) |
| `--accent-strong` on `--bg` (hover state) | 6.18:1 | AAA |

All pairs actually used for text meet at least AA at normal text size. Do not
introduce a lighter tint of `--accent` for text on `--bg` without re-checking —
the current `--accent` is already close to the AA floor (4.80:1).

## Typography

**Three-voice system, two type families, deliberately mapped to meaning:**

1. **IBM Plex Sans** — UI chrome, body copy, project descriptions, nav/header,
   footer. Free (Google Fonts / fonts.google.com/specimen/IBM+Plex+Sans), designed
   by IBM for technical/engineering contexts without being a novelty "coder
   font" — signals technical credibility to a peer audience by pedigree, not by
   cliché (monospace-everywhere, terminal-green, etc.).
2. **IBM Plex Mono** — same type family as above (so it's cohesive, not a
   random third font), used narrowly for metadata: project tags, dates,
   locations, the small labels under project titles. This is the one place the
   "technical" register shows up typographically, kept small and quiet.
3. **Fraunces** — a warm, humanist serif with optical-size variation (Google
   Fonts / fonts.google.com/specimen/Fraunces), used only for the site's name/
   wordmark and project titles (H1/H2-scale headings). This is the deliberate
   "human" counterweight to the Plex system — it's what keeps the whole site
   from reading as IT-only. The pairing itself is the bridge device described in
   `research.md`: serif = narrative/human, mono = technical/precise, sans =
   neutral connective tissue — rather than splitting the page into two visual
   tracks, the two halves of the person's work sit inside one shared type
   system.

All three are variable fonts (Fraunces esp. — use its optical-size axis so
large display sizes get a slightly higher-contrast, more "editorial" cut and
small sizes stay legible), self-hostable from Google Fonts for a self-contained
build (download and serve as static assets rather than a runtime Google Fonts
`<link>`, to keep the site free of third-party requests — consistent with the
"self-contained, no external dependencies" instruction used for the mockup).

### Weights used

- Plex Sans: 400 (body), 500 (UI labels/nav), 600 (emphasis within body).
- Plex Mono: 400 (metadata default), 500 (tag chips, slightly bolder for legibility at small size).
- Fraunces: 400 (rare), 500 (project titles), 600 (site wordmark/H1). Use the
  "soft" optical-size cut at display sizes if the variable font's opsz axis is
  exposed at build time; otherwise the static 9pt/72pt masters both work — prefer
  the 72pt-leaning cut for headings.

### Type scale (base 16px, ~1.25 ratio, rounded to clean values)

| Token | Size | Line-height | Family | Use |
|---|---|---|---|---|
| `--text-display` | 48px (3rem) | 1.1 | Fraunces 600 | Site wordmark / H1 |
| `--text-h2` | 30px (1.875rem) | 1.2 | Fraunces 500 | Project titles (detail page H1, card titles) |
| `--text-h3` | 20px (1.25rem) | 1.3 | Plex Sans 600 | Sub-headings within project body copy |
| `--text-body` | 17px (1.0625rem) | 1.6 | Plex Sans 400 | Body copy, project descriptions |
| `--text-small` | 14px (0.875rem) | 1.5 | Plex Sans 400/500 | Nav, footer, UI labels |
| `--text-meta` | 13px (0.8125rem) | 1.4 | Plex Mono 400/500 | Tags, dates, locations |

Mobile: scale `--text-display` down to 34px and `--text-h2` down to 24px at
the `mobile` breakpoint (see below); everything else holds.

## Spacing & grid

- **Base unit: 8px.** Spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`
  (px), exposed as tokens `--space-1` (4px) through `--space-10` (128px) at the
  implementer's discretion for naming.
- **Content max-width:** 1120px (`--content-max`), centered, with a minimum
  24px (mobile) / 48px (desktop) side gutter.
- **Grid:** CSS Grid, 12 columns at desktop widths (≥1024px) with a 24px
  column gap; project index collapses to a 2-column grid at tablet (640–1023px)
  and a single column at mobile (<640px). See `layout.md` for how the project
  grid specifically uses this.
- **Vertical rhythm:** section-level spacing uses the larger tokens
  (`--space-8`/64px to `--space-10`/128px between major blocks: header→intro,
  intro→work index, work index→footer) so whitespace does the section-dividing
  work instead of borders/backgrounds — consistent with the "lots of
  whitespace" brief. Card-internal spacing uses the smaller tokens
  (`--space-2`/12px–`--space-4`/24px).
- **Breakpoints:** `mobile` <640px, `tablet` 640–1023px, `desktop` ≥1024px.

## What this rules out

- No drop shadows beyond a hairline border (`--border`) for card separation —
  keep depth flat, consistent with minimal/typography-led direction.
- No decorative iconography beyond simple inline glyphs (external link arrow,
  mail icon) — the type system carries the visual weight.
- No gradient fills, no background imagery/texture.
