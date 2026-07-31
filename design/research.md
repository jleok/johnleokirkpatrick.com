# Research Notes

Purpose: ground the sitemap/theme/layout decisions in real precedent. This is a working
document, not the deliverable — kept tight.

## 1. Combining technical work with social-impact / international-development work

Web search for direct examples of individuals blending a tech portfolio with Peace
Corps / civic-tech / NGO work did not surface specific named personal sites worth
citing individually — this is a niche enough combination that there's no dominant
template to copy. That itself is useful information: **there is no established genre
convention to conform to or fight against**, so the safest structural move is not to
invent a gimmick that visually "splits" the two halves (e.g., a toggle between
"Tech Me" and "Peace Corps Me"), but to unify them under one thing they share:
**they are both bodies of project work solved with the same underlying skills**
(systems thinking, building things with constrained resources, working with
imperfect information, cross-functional/cross-cultural coordination).

Adjacent research (civic tech orgs — Code for America, Coding it Forward, Harvard
Tech for Social Good, Develop for Good) confirms the field increasingly treats
"technologist who also does social-impact work" as a normal, even sought-after,
profile rather than two unrelated resumes stapled together. The framing that reads
as credible to a peer/technical audience is **project-first, identity-second**:
lead with what was built/deployed/solved, let the domain (enterprise IT system vs.
rural school computer lab) be a tag/metadata on the project rather than a
site-level fork. Source: general career-portfolio guidance (UXfolio, CareerFoundry,
Figma resource library) converges on "tell a coherent story through the work
itself," which argues against a literal two-track site.

**Decision this feeds:** unify all projects into one index. Differentiate IT vs.
Peace Corps work with a small, consistent metadata tag per project (e.g. a
one-word domain label + location/year), not a structural split, not separate nav
items, not separate color-coding per "track" (which would visually reinforce a
divide the user does not want).

**What to avoid:** Portfolio guidance repeatedly warns against sites that read as
a resume dump (walls of bullet text, no visual hierarchy) — the fix is to treat
each project, technical or field-based, as a small case study with the same
shape: problem, action, artifact/outcome. Applying one consistent case-study shape
to both categories is itself the unifying device.

## 2. Single-page vs. multi-page for a small portfolio

General UX writing on single- vs multi-page design (UXPin, Undsgn, various
portfolio-strategy pieces) converges on: single-page/scrolling structures suit
portfolios with a **small, curated project count** — low friction, everything
reachable by scrolling, works well on mobile where nav chrome is a cost. Multi-page
structures earn their complexity when there's enough content to need real
navigation (About, Blog, Contact, categories) or when individual pieces need deep
documentation that would bloat a single scroll.

This site is explicitly project-only (no About/Blog/Contact sections per the
user's discovery answers) with a peer audience that wants technical depth on
individual projects. That's a hybrid case: the **index** wants to be a single
scroll (small, curated, low friction), but individual **projects** want room for
technical depth a homepage card can't hold (architecture notes, what broke, what
the constraint was in a rural deployment, etc.).

**Decision this feeds:** single-page home as the primary surface (hero strip +
one continuous project index + footer), with each project card linking out to a
lightweight standalone detail page. This is not a "multi-page site" in the
traditional sense (no separate About/Contact/Blog pages, no multi-item nav) — it's
one hub page plus N leaf pages, one per project, generated from the same content
model. See `sitemap.md` for the justification in full.

## 3. Minimal/clean portfolio trends relevant to an IT-adjacent peer audience

- Whitespace, grid-based layout, and a restrained/functional type system remain
  the dominant "minimal portfolio" signal in 2026 write-ups (Colorlib, Digital
  Silk, Envato). Nothing here contradicts the brief — it validates it.
- Typography is increasingly treated as the primary visual device on minimal
  sites rather than photography/illustration ("type as hero"), which suits a
  text-and-project-driven site with no glossy imagery to lean on.
- Several 2026 trend pieces flag a "dark terminal / brutalist" aesthetic as a
  common developer-portfolio cliché. **Avoid** — it would visually code the site
  as tech-only and undercut the Peace Corps side; it also reads as trying too hard
  for a peer audience that already grants technical credibility from the work
  itself, not the chrome.
- Font-pairing research (Elementor, madegooddesigns, thecrit.co) confirms a
  common, low-risk 2026 pattern: one grotesk/humanist sans for UI and body text,
  optionally paired with a serif or monospace for a secondary voice (headings,
  metadata, tags). IBM Plex (Sans + Mono, same family, designed for a technical
  audience, free/open) came up favorably as a pairing base and fits a systems/IT
  audience without being a cliché "coder font" (unlike, say, an all-monospace
  terminal theme). See `theme.md` for the specific pairing chosen and why a serif
  was added as a third, narrow-use voice.
- Accent-color guidance: 2026 minimal-trend pieces note that pure black/white
  minimalism is common but a **single restrained accent color** is a frequently
  recommended way to add warmth/memorability without breaking the minimal
  premise. Used here deliberately (see `theme.md`) as another quiet way to bridge
  "technical" and "field work" rather than picking a generic SaaS blue.

## Sources consulted

- [Portfolio design trends for 2026 (Envato Elements)](https://elements.envato.com/learn/portfolio-trends)
- [19 Best Portfolio Design Trends (2026) — Colorlib](https://colorlib.com/wp/portfolio-design-trends/)
- [Top 10 Minimalist Web Design Trends for 2026 — Digital Silk](https://www.digitalsilk.com/digital-trends/minimalist-web-design-trends/)
- [8 Minimalist UI Design Trends — sanjaydey.com](https://www.sanjaydey.com/minimalist-ui-design-clean-website-design-web-trends-2026/)
- [15 Best Developer Portfolio Templates in 2026 — myseera](https://myseera.com/blog/best-developer-portfolio-templates-2026)
- [Font Pairing Chart for Web Design (2026) — Elementor](https://elementor.com/blog/font-pairing-chart/)
- [Inter Font Pairing: 12 Best Combinations — madegooddesigns](https://madegooddesigns.com/inter-font-pairing/)
- [Best Font Pairings for Designer Portfolios (2026) — The Crit](https://thecrit.co/resources/best-font-pairings-portfolio)
- [Single-Page vs. Multi-Page Web Design — UXPin](https://www.uxpin.com/studio/blog/single-page-vs-multi-page-ui-design-pros-cons/)
- [One-Page or Multi-Page: Which Is Best — Undsgn](https://undsgn.com/one-page-or-multi-page-design/)
- [How to Make an Impressive Career Portfolio — UXfolio](https://blog.uxfol.io/career-portfolio/)
- [The Complete Software Engineer Portfolio Guide + 24 Examples — CareerFoundry](https://careerfoundry.com/en/blog/web-development/software-engineer-portfolio/)
- [23 Inspiring Portfolio Website Examples & Tips — Figma](https://www.figma.com/resource-library/portfolio-website-examples/)
