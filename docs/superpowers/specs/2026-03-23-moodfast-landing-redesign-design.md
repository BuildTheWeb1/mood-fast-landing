# MoodFast Landing Page Redesign — Design Spec

- **Date:** 2026-03-23
- **Status:** Approved
- **Scope:** Full visual redesign of the Next.js landing page at `/` and all shared components (Header, Footer). No content changes to other pages (how-it-works, faq, privacy).

---

## 1. Design Goals

1. Modernise the visual identity to match a high-quality iOS wellness app.
2. Create a stronger conversion funnel: hero → features → social proof → pricing → CTA.
3. Introduce a lavender/purple palette and dark hero to replace the current light grey background.
4. Showcase all six available app screenshots in a tabbed feature section.
5. Maintain full accessibility (focus rings, aria labels, semantic HTML).

---

## 2. Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#8B6FE8` | Buttons, tabs, tags, accent text, icons |
| `accent` | `#83F6CC` | Mint green — bullet dots, trust strip dots, level bubble bg, h1 span in dark sections |
| `dark` | `#1A1A1A` | Body text, dark section backgrounds |
| `dark-purple` | `#2d1f4e` | Mid-stop of dark gradient |
| `dark-teal` | `#1a3028` | End-stop of dark gradient |
| `lavender-bg` | `#faf9ff` | Light section backgrounds (features, pricing) |
| `lavender-tint` | `#f0eaff` | Card borders, pill tab bg, feature tags |
| `lavender-tabs` | `#ede8ff` | Tab bar container background |
| `muted` | `#6B7280` | Body copy in light sections |
| `muted-dark` | `rgba(255,255,255,0.65)` | Body copy in dark sections |
| `star-yellow` | `#FFD93D` | Star ratings |

### Dark gradient (hero + final CTA + footer)
```css
background: linear-gradient(145deg, #1A1A1A 0%, #2d1f4e 60%, #1a3028 100%);
```

### Radial glow overlays on dark sections
- Top-left: `radial-gradient(circle, rgba(139,111,232,0.25) 0%, transparent 65%)`
- Bottom-right: `radial-gradient(circle, rgba(131,246,204,0.15) 0%, transparent 65%)`

---

## 3. Typography

No font family change — continue using the existing system sans-serif stack.

| Element | Size | Weight |
|---------|------|--------|
| H1 (hero) | `52px` / `clamp(36px, 6vw, 52px)` | 800 |
| H2 (section) | `34px` | 800 |
| H3 (feature panel) | `26px` | 800 |
| Body | `14–17px` | 400 |
| Label/tag | `11–12px` | 600–700 |
| Nav links | `13px` | 400 |

---

## 4. Page Structure

```
① Header
② Hero
③ Trust Strip
④ Feature Showcase (tabbed)
⑤ Social Proof
⑥ Pricing
⑦ FAQ
⑧ Final CTA
⑨ Footer
```

---

## 5. Section Specs

### ① Header

- **Background:** `rgba(26,26,26,0.85)` with `backdrop-filter: blur(12px)` — seamlessly continues the dark hero gradient.
- **Border:** `1px solid rgba(139,111,232,0.2)` bottom border.
- **Logo:** Existing `mood-fast_logo.png` (40×40) + "Mood Fast" text in white.
- **Nav links:** `rgba(255,255,255,0.6)` — How it works, Privacy, FAQ.
- **CTA button:** White pill button (`border-radius: 100px`) with dark text — label "Download".
- **Behavior:** `position: sticky; top: 0; z-index: 100`.

---

### ② Hero

- **Background:** Dark gradient (see §2).
- **Radial glows:** Purple top-left, mint bottom-right (purely decorative, `pointer-events: none`).
- **Layout:** Centered column.

**Social proof badge**
- `background: rgba(255,255,255,0.1)` frosted pill with `border: 1px solid rgba(255,255,255,0.15)`.
- Stars in `#FFD93D` + "4.8 · 100+ App Store reviews".

**Headline**
- White, 800 weight. Accent word "emotional wellness" in `#83F6CC` (mint).
- Copy: *"Your emotional wellness companion."*

**Subtext**
- `rgba(255,255,255,0.65)`, max-width 420px.
- Copy: *"Log how you're feeling in 2 seconds. See patterns. Get personalized activities to feel better right now."*

**App Store button**
- White background, dark text + dark Apple logo.
- Sub-label: "Free to start · iOS only" in `rgba(255,255,255,0.4)`.

**Three phone mockups**
- Left phone: `mood-fast_mood.png` — `rotate(-8deg) translateY(12px)`, 120×216px.
- Center phone: `mood-fast_home.png` — upright, 140×252px.
- Right phone: `mood-fast_progress.png` — `rotate(8deg) translateY(12px)`, 120×216px.
- Phone frame: `#0d0d0d`, `border-radius: 22px`, heavy drop shadow.
- No bottom padding on hero — phones bleed into the Trust Strip.

**Floating stat bubbles** (positioned over the phone row)
- Streak bubble (left): frosted glass (`rgba(255,255,255,0.12)` + blur + border), "🔥 30 days".
- Mood bubble (right): same frosted style, value text in `#83F6CC`, "😊 Great".
- Level bubble (bottom-left): solid `#83F6CC` background, dark text, "⭐ Level 5".

---

### ③ Trust Strip

- **Background:** `#111`, `border-top: 1px solid rgba(139,111,232,0.2)`.
- **Layout:** Horizontal flex row, centered, `gap: 32px`, `padding: 20px`.
- **Items:** Each item is icon + text in `rgba(255,255,255,0.55)` with a `#83F6CC` dot prefix.
  - 🔒 Encrypted storage
  - 🍎 Sign in with Apple
  - 🚫 Never sold or shared
  - Firebase-authenticated

---

### ④ Feature Showcase

- **Background:** `#faf9ff`.
- **Section header:** Centered H2 + subtitle.
  - H2: *"Everything you need to feel better"*
  - Sub: *"Four core pillars, built to work together — each one takes seconds, not minutes."*

**Tab bar**
- Container: `background: #ede8ff; border-radius: 100px; padding: 4px`.
- Tabs: Mood Tracking | Activities | Gratitude | Progress.
- Active tab: `background: #8B6FE8; color: white`.
- Inactive tab: `color: #6B7280`.
- Tab switching is **client-side interactive** — clicking a tab swaps both the screenshot and the text content below without a page reload (React state).

**Feature panel** (white card, `border-radius: 24px`, subtle purple shadow)
- Left: phone mockup (170×306px frame) showing the active tab's screenshot.
- Right: tag pill + H3 + description paragraph + bullet list.
- Bullet dots: `#83F6CC` circles.

**Tab content map:**

| Tab | Screenshot | H3 | Description |
|-----|------------|-----|-------------|
| 😊 Mood Tracking | `mood-fast_mood.png` | "2 seconds. No excuses." | Log in a single tap. No forms. Mood Fast captures your emotional state and builds a picture over time. |
| 🧘 Activities | `mood-fast_activities.png` | "Guided sessions for right now." | Breathing, grounding, movement, reframing — personalized to how you're feeling today, not in theory. |
| 🌸 Gratitude | `mood-fast_gratitude.png` | "A daily gratitude practice." | A simple daily ritual that compounds. Track your streak, reflect with AI-powered prompts, and build positivity over time. |
| 📈 Progress | `mood-fast_progress.png` | "See how far you've come." | Streaks, XP, level progression, weekly goals, and achievement badges — all in one place. |

**Bullets per tab** (3–4 items each):
- Mood: intensity options, optional notes, calendar view, weekly charts.
- Activities: 6 categories (Breathing, Grounding, Activation, Reframing, Gratitude, Sleep), session reflection, mood delta.
- Gratitude: daily flow, streak tracking, AI-generated prompts (Apple Intelligence), journal review.
- Progress: streak card, XP & level, weekly goal editor, achievement toasts.

---

### ⑤ Social Proof

- **Background:** White.
- **Layout:** Centered H2 + subtitle + 3-column testimonial grid.
- **Cards:** `background: #faf9ff; border: 1px solid rgba(139,111,232,0.1); border-radius: 18px; padding: 24px`.
- Stars in `#FFD93D`, quote text in `#1A1A1A`, author name in `#8B6FE8`.
- Existing three testimonials (Sarah M., James T., Priya K.) — content unchanged. Cards are inlined directly in `page.tsx` (no separate component).

---

### ⑥ Pricing

- **Background:** `#faf9ff`.
- **Layout:** Centered H2 + subtitle + 2-column grid (max-width 700px, centered).
- **Free card:** White bg, `border: 1px solid rgba(139,111,232,0.15)`, `border-radius: 24px`.
  - CTA button: `background: #f0eaff; color: #8B6FE8` — "Download free".
- **PRO card:** `background: #1A1A1A`, `border-radius: 24px`.
  - "Most popular" badge: `background: #8B6FE8` pill.
  - CTA button: `background: #8B6FE8; color: white` — "Start free, upgrade in-app".
- Check icons: `#83F6CC` filled circles (existing `CheckIcon` component, recolored).
- All pricing copy, feature lists, and App Store links unchanged from current implementation.

---

### ⑦ FAQ

- **Background:** White.
- Existing `FaqAccordion` component retained.
- Visual updates: border color changes to `#f0eaff`, chevron background `#f0eaff`, active color `#8B6FE8`.

---

### ⑧ Final CTA

- **Background:** Dark gradient — identical to hero (visual bookend).
- H2 white, sub-text `rgba(255,255,255,0.55)`.
- App Store button: white background, dark text (same as hero).
- Copy unchanged: *"Start your emotional wellness journey today."* / *"2 seconds a day. Real patterns. Better days."*

---

### ⑨ Footer

- **Background:** `#111`.
- Three columns: logo (dot + "Mood Fast" in white), copyright (`rgba(255,255,255,0.35)`), X/Twitter link (`rgba(255,255,255,0.4)`).
- Existing Footer component, restyled.

---

## 6. Animations & Interactions

- Existing `ScrollReveal` component retained for fade-in animations.
- Feature tab switching: React `useState` for `activeTab`, instant swap (no animation required for MVP; can add CSS transition later).
- Phone tilt and hover effects: existing transform on hover retained for center phone.
- App Store button: existing `hover:scale-105` retained.

---

## 7. Responsive Behavior

- **Mobile:** Single-column layouts. Phones row shows only the center phone on `< md`. Tab bar scrolls horizontally (`overflow-x: auto`, no wrapping). Floating bubbles hidden on mobile.
- **Tablet (md):** 2-column feature panel collapses to stacked. Pricing grid remains 2-col.
- **Desktop (lg+):** All three phones visible. Feature panel side-by-side.

---

## 8. Components to Modify

| Component | Change |
|-----------|--------|
| `Header.tsx` | Dark background, white logo text, white nav links, white pill Download CTA |
| `Footer.tsx` | Dark `#111` background, white/muted text |
| `src/app/page.tsx` | Full redesign of all sections per this spec |
| `FaqAccordion.tsx` | Minor color updates (border, chevron) |
| `ScrollReveal.tsx` | No changes needed |

**New component to create:**
- `FeatureTabs.tsx` — client component (`'use client'`) managing `activeTab` state, rendering the tab bar and feature panel. Accepts a `features` array prop.

---

## 9. Assets

All required screenshots already exist in `public/images/`:
- `mood-fast_home.png` — hero center phone, Activities tab backup
- `mood-fast_mood.png` — hero left phone, Mood Tracking tab
- `mood-fast_progress.png` — hero right phone, Progress tab
- `mood-fast_gratitude.png` — Gratitude tab
- `mood-fast_activity.png` — single activity screen (not used anywhere in this redesign)
- `mood-fast_activities.png` — Activities tab
- `mood-fast_logo.png` — header logo (unchanged)

---

## 10. Out of Scope

- Changes to `/how-it-works`, `/faq`, `/privacy` page content.
- New copywriting (all text content unchanged from current unless noted above).
- New photography or app screenshots.
- Dark mode toggle.
- Animation library additions.
