# GABI Design System

> **Brand:** GABI — AI Education & Consulting
> **Tagline:** _Elevating Business Through AI_ · _Cutting through the AI noise_
> **Founder:** Alexander Coenegrachts · Based in Brussels, Belgium
> **Site:** [gabi.xyz](https://www.gabi.xyz)

GABI is an AI automation agency and consulting firm. Their pitch is anti-hype:
no fluff, no slide decks, no "AI revolution" rhetoric — just two clear tracks
("Educate" and "Build") and practical outcomes. The visual identity matches:
black, white, and one platinum accent. Restrained, premium, slightly editorial.
Subtle gradient glows appear only on interactive accents.

---

## Sources

This system was built by reading code (not screenshots) from the official
GABI codebase. Anyone iterating on this system should explore these too:

- **Source repo:** [`alexandernacho/gabi-site`](https://github.com/alexandernacho/gabi-site) — the live marketing site
  - `tailwind.config.ts` — full color, animation, and font config
  - `app/globals.css` — semantic CSS variables, light/dark mode, type rules
  - `.cursorrules` (Brand Identity Guidelines section at end) — the canonical brand spec
  - `components/landing/*` — homepage sections (hero rotator, path cards, testimonials)
  - `components/shared/*` — service cards, CTA section, footer, header
  - `components/ui/liquid-glass.tsx` — the signature card primitive
  - `components/background-grid.tsx` — cursor-reveal grid background
  - `app/(marketing)/about/page.tsx` — best example of the editorial layout

---

## Index

```
GABI Design System/
├── README.md                ← you are here
├── SKILL.md                 ← agent skill manifest (Claude Code compatible)
├── colors_and_type.css      ← all tokens (colors, type, radii, shadows)
├── assets/                  ← logos, hero imagery, founder portraits, testimonial avatars
├── preview/                 ← Design System tab cards (registered as assets)
└── ui_kits/
    └── gabi-site/           ← marketing site recreation
        ├── README.md
        ├── index.html       ← live clickthrough of homepage → bootcamp → about
        └── *.jsx            ← Header, Hero, PathCards, ServiceCard, LiquidGlass, etc.
```

---

## Content Fundamentals

GABI's voice is **direct, anti-hype, and warm-professional**. The brand
positions itself as the calm adult in a noisy room.

### Pronouns & voice
- **"We" + "you"** — never third-person ("Gabi helps companies…").  
  > "We help you Educate your team and Build custom AI solutions."
- First-person plural makes the agency feel like a partner, not a vendor.

### Casing
- **UPPERCASE** only for: the GABI wordmark, hero display words (e.g. `GABI` in the og-image), and small SECTION EYEBROW labels (`IN-HOUSE TRAINING PROGRAM`, `OUR MISSION`).
- **Sentence case** for all body, button labels ("Book a Discovery Call"), CTAs.
- **Title Case** for headlines, page titles, nav links.

### Tone — what to say
- Plain, concrete, outcome-focused.  
  > "We don't just build and leave. Every solution includes knowledge transfer so your team understands what we built and can maintain it."
- Punchy fragments are welcome.  
  > "Practical Innovation." · "Compliance Built-In." · "We build, you own."
- Use _opposition_ constructions: "Practical over theoretical." "We measure success by your outcomes, not our billable hours."
- Lead with the problem in a single line, then resolve it in plain English.

### Tone — what NOT to say
- ❌ "Cutting-edge AI revolution", "harness the power of next-gen LLMs"
- ❌ "Synergize", "leverage", "transform your enterprise"
- ❌ Emoji-laden marketing copy
- ❌ Vague capabilities ("AI-powered everything")
- ❌ Stat-spam ("87% of CTOs say…")

### Concrete examples (lifted from production)
| Hero | "Cutting through the AI noise" |
| Sub-hero | "We help companies build AI solutions that actually work — no fluff, no hype, just practical results." |
| About badge | "About Gabi" · "Our mission" · "Our values" |
| Founder quote | "The best AI implementation is the one your team actually uses every day." |
| Value title | "Knowledge Transfer" |
| Value body | "We don't just implement—we teach your team to own and grow your AI capabilities." |
| Service eyebrow | "In-House Training Program" |
| CTA | "Book a Discovery Call" (never "Get Started", never "Try For Free") |
| Footer line | "We help companies cut through the AI noise and build solutions that actually work." |

### Emoji
**No.** The codebase is emoji-free in production marketing copy. The hero rocket icon and similar are always rendered as Lucide React SVGs (`<Rocket />`, `<Sparkles />`), never as 🚀 / ✨.

### "I" vs "you" vs "we"
- **We** = GABI / Alexander + team
- **You** = the prospective client / reader
- **I** is almost never used, even on the founder page. The founder is described in third-person ("8 years building products…") then quoted directly.

---

## Visual Foundations

### Color
- **Three colors, period:** Black `#000000`, White `#FFFFFF`, Platinum `#E5E4E2`.
- Black is text on white (light mode) **and** background in dark mode. Same with white. The brand swaps roles, not the palette.
- Platinum is the _only_ accent. Use it for: icon strokes, dividers, hover highlights, footer contact icons, subtle borders. **Never for backgrounds.**
- **Gradient ribbons exist** but are deeply restricted: only inside interactive accents (hero "educate ↔ build" underline, path-card CTA arrow, magicui pill border). Two flavors:
  - `educate` track → blue → purple → pink (cool)
  - `build` track → orange → pink (warm)
  - generic CTA → cyan → purple
- Never use a gradient on a section background. Never on body copy. They live on lines, arrows, and pill borders only.

### Type
- **Display:** IvyEpic (Adobe Typekit) — a **sans-serif display** family (not a serif, despite the name). Used for hero text, h1, h2, founder name, section titles. The brand wordmark is set at regular weight (400) in uppercase; section headlines use bold (700) at large sizes.
- **Body:** Neue Haas Grotesk Display (Adobe Typekit) — neutral grotesque, **weight 500 (medium) by default** for body, 600 for h3/h4/UI labels. Notably _not_ regular 400 — body sits at medium for slightly more presence.
- **Substitutions in this system:** Manrope (display) + Hanken Grotesk (body) via Google Fonts. ⚠️ The user should replace these with the real Adobe Typekit licenses (`https://use.typekit.net/wzn4zws.css`) in production.
- **Scale:** 48 / 36 / 28 / 20 / 16 / 14 (h1 → small). Hero display can run as large as `clamp(56px, 9vw, 144px)`.
- **Letter-spacing:** Display headings tighten to `-0.02em`. Uppercase eyebrows open to `0.2em`.

### Backgrounds
- **Solid black or solid white.** That's the default.
- A signature **"reactive grid background"** is the one motion treatment: faint grid lines (14×24 px) that brighten in a colored halo around the cursor (blue/purple/pink/orange) with a trailing 14-point fade. Fixed full-viewport layer behind everything else; opacity-gated by cursor movement; fades out after ~7s of inactivity. On mobile it shows a few static reveal spots in the corners. Implemented in `assets/background-grid.js` + `assets/background-grid.css` — just drop a `<div class="gabi-grid" data-gabi-grid></div>` into a page and the JS auto-attaches. **Use on long marketing pages**, never inside apps.
- **No** photographic backgrounds, **no** repeating patterns, **no** noise textures, **no** gradient hero backdrops. The brand's whole point is restraint.

### Liquid-glass cards (signature primitive)
The site's go-to card is a `LiquidGlassCard`: a translucent surface that combines a backdrop-blur, an inset white/grey highlight ring, and a soft outer glow. Distinguishes GABI cards from generic flat shadcn cards.
- **blurIntensity:** `xs` (2px) on most marketing cards; `sm` (4px) on hero/founder.
- **glowIntensity:** `none` for body cards; `xs` glow on featured/founder cards.
- **shadowIntensity:** `xs` (1px inset highlight) standard; `sm` (2px) on featured.
- **borderRadius:** `20px` for value cards · `24px` for path/service cards · `32px` for hero/founder/CTA cards.
- The blur reads on top of the grid background; on solid backgrounds it reads as a very subtle, premium card.

### Animation
- Library: **Framer Motion**.
- Default entrance: `initial={{ opacity: 0, y: 20 }} animate/whileInView={{ opacity: 1, y: 0 }}` over 0.5–0.7s, staggered by 0.1s. No bounce, no overshoot.
- The hero word rotator uses a `spring` (stiffness 300, damping 30) for the vertical pendulum between "educate" and "build".
- Custom keyframes (`text-glow`, `strong-text-glow`, `max-text-glow`) provide a subtle pulsing shadow on the hero wordmark.
- No parallax. No scroll-jacking. No autoplay video heroes.

### Hover states
- **Buttons (outline):** background → `bg-gray-100` (light) / `#2A2A2A` (dark). Border stays platinum.
- **Buttons (filled):** opacity 0.9 OR background darkens slightly.
- **Animated buttons:** an underline accent (a 2px gradient line) widens from 50% → 75% of the button's width on hover, plus brightens to full opacity.
- **Links:** color shifts from `var(--fg)` to `#666666` in light mode, or to platinum `#E5E4E2` in dark mode. Used for footer and inline links.
- **Cards:** very subtle `scale: 1.01` on hover when wrapped in motion. Service-card icons rotate 5° and scale 1.1 with spring.
- **CTA arrows:** the inline `→` (lucide `ArrowRight`) translates 4px right on hover (`group-hover:translate-x-1`).

### Press states
- `whileTap={{ scale: 0.98 }}` on liquid-glass cards.
- Standard shadcn button press = no transform, just background change.

### Borders
- Default `1px solid rgba(0,0,0,0.12)` (light) / `rgba(255,255,255,0.15)` (dark).
- Platinum border on outline buttons: `border-gabi-accent` = `#E5E4E2`.
- Inside dropdowns / sheets: `border-neutral-200` / `dark:border-white/[0.2]`.

### Shadow systems
- **Card:** `0 1px 3px rgba(0,0,0,0.08)` — barely there.
- **Liquid-glass outer glow:** `0 4px 4px rgba(0,0,0,0.15), 0 0 12px rgba(0,0,0,0.08), 0 0 24px rgba(255,255,255,0.1)` — directional + ambient + faint white halo.
- **Liquid-glass inner highlight:** `inset 1px 1px 1px 0 rgba(150,150,150,0.25), inset -1px -1px 1px 0 rgba(150,150,150,0.25)` — two-sided ring so the card looks like a glass tile.
- **Wordmark glow:** Per the brand spec doc, a subtle text-shadow was originally specified for the wordmark, but **current production uses no glow** — the wordmark is solid foreground color, regular weight, no effects. If reviving the glow treatment for a specific surface (e.g. dark hero), keep it very subtle: `text-shadow: 0 0 10px rgba(255,255,255,0.5)` in dark mode only.
- **Animated text-glow keyframes** for hero: cycles between 5px → 25px multi-stop text-shadow with rgba blue/white tints.

### Protection gradients vs capsules
- No "protection gradient" (image overlays). Instead the site uses **capsule pills** for badges (`pill` class): a rounded-pill with `bg-foreground/5` and `text-foreground/70`.
- One exception: the founder card photo has a subtle bottom-to-top black gradient overlay (`from-black/30 via-transparent`) for legibility on the inset corner.

### Layout rules
- Container: centered, max-width `1400px` (`2xl: 1400px` in tailwind config), `2rem` horizontal padding.
- Section vertical rhythm: `py-16 md:py-24` standard, `py-20 md:py-32` for hero sections.
- Stacked spacing inside cards: 6 (icon) → 4 (title) → 6/8 (body) → 8 (CTA gap) in `p-8` cards.
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for service/value rows. 2-up for path cards. Founder card splits 2/5 photo + 3/5 text on md+.
- Header is sticky/fixed at top, transitions to a "floating navbar" pill when scrolled.

### Transparency & blur
- **Backdrop-blur** is the surface treatment, used inside `LiquidGlassCard` (2–16px) and on the floating navbar (`bg-background/80 backdrop-blur-sm`).
- Pill badges use `bg-foreground/5` (5% opacity foreground over the page) for a barely-there capsule.
- Avoid blur stacking — keep one blur layer per card.

### Imagery
- **Cool, mid-contrast, monochrome-friendly.** Founder photo is desaturated warm beige + denim — sits well next to platinum and black. Testimonial avatars are small (56px) circular crops.
- **No** AI-generated stock photos, **no** purple/blue tech gradients, **no** abstract neural-network art.
- When an image is used, it's photo-real and editorial. Often paired with a subtle gradient overlay for text legibility.
- Imagery sits inside liquid-glass cards or behind subtle masks — never full-bleed banner style.

### Abstract brand shapes
Six grid-textured gradient blobs are part of the brand's expressive vocabulary, in `assets/shapes/`. They use the same blue → purple → pink → orange ribbon as the interactive grid background, with a faint grid overlay baked in — so they read as bigger, frozen versions of the cursor-trail effect.

| Shape | Silhouette |
|---|---|
| `arc.png`      | Long, lower-left → upper-right swoosh |
| `swoosh.png`   | Hook with a peak rising at top-left |
| `teardrop.png` | Symmetrical droplet, pointing up |
| `peak.png`     | Tall arrow-head with a sharp top |
| `flame.png`    | Vertical flame, narrow top widening to a glow |
| `wave.png`     | Heart-ish wave, two crests with a soft swell |

**Use them for:** hero accents in decks and one-pagers, large-format covers, social cards, big section dividers. Each one is 1024×1024 transparent PNG — drop one in absolutely positioned with `pointer-events: none` and let the rest of the content sit on top. They are big and loud, so use **at most one per surface** and let it breathe (40–60% of the artboard, often bled off an edge).

**Don't:** stack multiples, tile them, or pair them with other gradients or photographic imagery. The grid texture inside the shape is the only visual treatment they need.

### Corner radii
| Element | Radius |
|---|---|
| Pills, buttons, chips | `9999px` (fully rounded) |
| Outline / filled buttons | `9999px` (rounded-full) |
| Value cards | `20px` |
| Path cards, service cards | `24px` |
| Hero cards, founder card, CTA card | `32px` |
| Inputs, dropdowns | `8px` (md) |

### What cards look like
- Surface: `LiquidGlassCard` (frosted, inset ring, outer glow) OR a plain rounded-2xl with `border` + `bg-background`.
- Padding: `p-6` on small cards, `p-8` on standard, `p-12` on hero cards.
- Internal layout: icon block at top (`size-12` icon container with `bg-foreground/5` rounded-xl), then title (h3 sans-serif semibold), then body, then optional inline CTA with gradient text + arrow.

---

## Iconography

### System: Lucide React
**The codebase uses Lucide React exclusively.** Every icon — nav, footer, service, value, info badges — comes from `lucide-react`. No emoji, no custom SVG iconography.

- Default stroke width: 2px (Lucide default)
- Default sizes: `size-4` (16px) for inline / nav, `size-6` (24px) for headers, `size-12` (48px) for service cards, `size-16` (64px) for hero feature cards.
- Color: always inherits from `currentColor` → black on white / white on black. Platinum stroke (`text-gabi-tertiary`) used on footer contact icons and dropdown indicators only.

**Common icons in production:**
| Icon | Used for |
|---|---|
| `Rocket` | Bootcamp / AI Acceleration Program |
| `GraduationCap` | Educate track, Executive Seminar |
| `Wrench` | Build track |
| `BrainCircuit`, `Bot`, `Workflow`, `LineChart` | Service cards (Strategy / Custom Dev / Automation / Data) |
| `Lightbulb`, `Shield`, `Target`, `Sparkles` | Value cards |
| `Search`, `Route`, `Cog`, `TrendingUp` | Process steps |
| `Calendar`, `MapPin`, `Users`, `Mail`, `Phone` | Info blocks, footer contact |
| `ArrowRight` | Every CTA. Translates +4px on hover. |
| `Menu`, `X`, `ChevronDown` | Nav controls |
| `Home`, `Info` | Floating navbar |

### CDN integration (for this system)
This design system uses Lucide via the official CDN for HTML previews:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="rocket"></i>
<script>lucide.createIcons();</script>
```

or for React (matching production):

```jsx
import { ArrowRight, Rocket } from 'lucide-react';
```

### Logo / Wordmark
The brand identity is the wordmark `GABI` set in IvyEpic (sans-serif display), uppercase, **regular weight (400)**, slightly negative tracking, **no shadow or glow** in current production usage. The `assets/og-image.png` shows the wordmark in outlined rainbow form — this is a **decorative variant**, used only for og-image/social cards. The default wordmark is solid foreground color, no effects.

The `assets/icon.png` is the favicon — a black circle outline with a sans "G" inside. Use it for tabs, app icons, social profile pictures.

### Emoji and Unicode
**Not used in product copy.** A literal "✨" or "🚀" never appears in marketing strings — those concepts are always Lucide `<Sparkles />` and `<Rocket />` instead. Use Unicode characters only for typographic glyphs (e.g. `→` quote marks `"` `"`).

---

## Font substitution — please review

The real fonts are licensed via Adobe Typekit (kit `wzn4zws`):

```html
<link rel="stylesheet" href="https://use.typekit.net/wzn4zws.css" />
```

This kit serves:
- **IvyEpic** (display)
- **Neue Haas Grotesk Display Pro** (sans)

Because Typekit requires an authenticated kit on the destination domain, the
design system uses Google Fonts substitutes:

- **Manrope** → in place of IvyEpic. Modern humanist sans with comparable proportions and weight rhythm. The user should swap this back to IvyEpic for production.
- **Hanken Grotesk** → in place of Neue Haas Grotesk. Neutral grotesque, very close in proportion and rhythm.

**Action for the user:** drop the Typekit `<link>` into your final designs, then change `--font-display` and `--font-sans` in `colors_and_type.css` to put `'ivyepic'` / `'neue-haas-grotesk-display'` first in the stack.

---

## Caveats

1. **Fonts:** substituted Google Fonts for licensed Adobe Typekit faces — flagged above.
2. **The repo's `hero.png` is leftover template imagery** (it shows "Takeoff", not GABI). I did not use it in any preview or kit. The real hero is the interactive rotator built with `GabiTextEffect` + `HeroInteractive`.
3. **The `GabiTextEffect` SVG-morph hero is replaced by the rainbow-outlined OG-image** as a static element — the original morphs strokes across letterforms. The interactive hero rotator AND the cursor-tracking grid background ARE live (the latter ported in `assets/background-grid.{js,css}`).
4. **No real client logos** were available in the repo — the `case-studies` section references placeholder paths. The UI kit shows a stylized "Logo wall" with disclaimer.
5. The repo includes a second `seminar` marketing surface (`/executive-ai-seminar`) which is not yet recreated in the UI kit — the bootcamp surface is representative of the pattern.
