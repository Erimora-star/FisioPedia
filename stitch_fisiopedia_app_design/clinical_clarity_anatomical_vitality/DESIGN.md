---
name: Clinical Clarity & Anatomical Vitality
colors:
  surface: '#f5faf8'
  surface-dim: '#d6dbd9'
  surface-bright: '#f5faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f5f2'
  surface-container: '#eaefed'
  surface-container-high: '#e4e9e7'
  surface-container-highest: '#dee4e1'
  on-surface: '#171d1c'
  on-surface-variant: '#3d4947'
  inverse-surface: '#2c3130'
  inverse-on-surface: '#edf2f0'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00685d'
  on-tertiary: '#ffffff'
  tertiary-container: '#008376'
  on-tertiary-container: '#f4fffb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#71f8e4'
  tertiary-fixed-dim: '#4fdbc8'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#f5faf8'
  on-background: '#171d1c'
  surface-variant: '#dee4e1'
  slate-surface: '#F8FAFC'
  slate-subtle: '#F1F5F9'
  slate-border: '#E2E8F0'
  slate-muted: '#64748B'
  slate-strong: '#1E293B'
  cyan-accent: '#06B6D4'
  amber-quiz: '#F59E0B'
  coral-alert: '#F43F5E'
  cat-muscles: '#0D9488'
  cat-bones: '#0284C7'
  cat-joints: '#6366F1'
  cat-movements: '#F59E0B'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a welcoming, scientifically rigorous, and highly legible environment for physiotherapy and health sciences students. The emotional tone bridges clinical authority with warm, supportive mentorship—demystifying complex kinesiology and biomechanics without sacrificing medical precision.

The design movement synthesizes **Modern Humanist Medical UI** with **Tactile Educational Utility**. It eliminates the austere, intimidating coldness of traditional medical compendiums by using soft, approachable geometry, generous negative space, crisp categorical badging, and vibrant study cues (amber and coral highlights for active recall and assessment).

## Colors

The palette balances therapeutic calmness with anatomical distinction:
- **Primary Teal (`#0D9488`) & Mint (`#14B8A6`)**: Inspires rehabilitation, physiological balance, and primary interactive focus.
- **Deep Navy & Slate (`#0F172A`, `#1E293B`)**: Ensures clinical contrast, structured hierarchy, and long-session reading legibility.
- **Warm Light Canvas (`#F8FAFC`, `#F1F5F9`)**: Softens glare across prolonged study periods and eliminates visual fatigue.
- **Categorical System**:
  - *Músculos*: Teal (`#0D9488`)
  - *Huesos*: Cyan/Sky (`#0284C7`)
  - *Articulaciones*: Indigo (`#6366F1`)
  - *Movimientos*: Amber (`#F59E0B`)
- **Study Accent**: Amber (`#F59E0B`) and Coral (`#F43F5E`) are strictly reserved for quizzes, flashcard memory testing, and anatomical contraindication alerts.

## Typography

The type system pairs **Plus Jakarta Sans** for headlines, section anchors, and interactive labels with **Inter** for core anatomical reading matter. 

- **Plus Jakarta Sans** introduces friendly rounded geometric characteristics that relieve academic stress while maintaining clinical authority.
- **Inter** ensures tall x-heights, neutral letterforms, and high distinction between Latin anatomical terms, origins, insertions, and innervation bullet points.
- Use `label-caps` for anatomical taxonomy tags, category anchors, and flashcard side indicators.

## Layout & Spacing

The interface uses a 12-column responsive fluid grid on desktop (max canvas constraint: 1280px) and a single-column stacked layout on mobile.

- **Breakpoints**:
  - Mobile: `< 640px` (Gutter: `1rem`, Margins: `1rem`)
  - Tablet: `640px - 1024px` (Gutter: `1.25rem`, Margins: `1.5rem`)
  - Desktop: `> 1024px` (Gutter: `1.5rem`, Margins: `2rem`, Max Container: `80rem`)
- **Reading Containers**: Medical definition text blocks are strictly capped at `65ch` width for optimal scanning and reading retention.
- **Split Viewports**: In biomechanical visualization modules, the viewport adopts a 7:5 split on desktop (7 columns for interactive 3D/diagram canvas, 5 columns for anatomical descriptors and origin/insertion charts). On mobile, this stacks into a sticky canvas with a collapsible bottom drawer.

## Elevation & Depth

Visual hierarchy uses a refined hybrid of **low-contrast micro-outlines** and **subtle ambient shadows**, avoiding heavy drops to maintain clean scientific readability:

- **Surface Level (Base)**: `#F8FAFC` canvas with cards resting at `#FFFFFF`.
- **Card Outlines**: `1px solid #E2E8F0` provides crisp structural definition without visual clutter.
- **Ambient Shadows**:
  - *Resting Card*: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`
  - *Interactive Hover / Elevated*: `0 8px 16px -4px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)`
  - *Modal & Flashcard Flip*: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`
- **Glass Accents**: Diagram overlays, floating pin labels, and biomechanical rotation controls utilize `background: rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(8px)` and a `1px solid rgba(255, 255, 255, 0.6)` border.

## Shapes

The interface embraces a balanced `0.5rem` (8px) base radius, stepping to `1rem` (16px) for major cards and viewports.

- **Primary Cards & Containers**: `1rem` (16px) radius softens visual density and frames complex medical schemas.
- **Interactive Controls & Search Inputs**: `0.5rem` (8px) for buttons, text inputs, and filter toggles.
- **Anatomical Badges & Category Chips**: Fully rounded pill shapes (`9999px`) to create clear differentiation between actionable components and taxonomy tags.

## Components

### Buttons
- **Primary**: Solid Teal (`#0D9488`), white text, `label-md`, `0.5rem` radius, hover state `#0F766E`.
- **Secondary**: Slate container (`#F1F5F9`), text `#1E293B`, `1px solid #E2E8F0`, hover state `#E2E8F0`.
- **Quiz Action**: Solid Amber (`#F59E0B`), text `#0F172A` (bold), used exclusively for initiating practice rounds and active recall triggers.

### Chips & Anatomical Badges
- **Category Badges**: Pill-shaped, subtle tint background (10% opacity of the category color), 1px solid border (20% opacity), bold category text. E.g., *Músculos*: bg `#F0FDFA`, border `#CCFBF1`, text `#0F766E`.
- **Filter Chips**: Neutral resting state (`#FFFFFF` with `#E2E8F0` border), active state transitions to Primary Teal with `#FFFFFF` text.

### Anatomical Cards
- Background `#FFFFFF`, border `1px solid #E2E8F0`, `1rem` border-radius.
- Internal layout features a dedicated top badge row (taxonomy tag + biomechanical plane), followed by `headline-sm` title, structured data points (Origen, Inserción, Inervación) set in `body-sm`, and micro-divider lines in `#F1F5F9`.

### Input Fields & Search
- Generous padding (`space-md`), `0.5rem` border-radius, `1px solid #CBD5E1`.
- Focused state: Border changes to `#0D9488` with a `0 0 0 3px rgba(13, 148, 136, 0.15)` focus ring. Built-in leading search icon and trailing keyboard shortcut hint (`⌘K`).

### Checkboxes & Quiz Selection
- Selection tiles for quiz options: `0.75rem` radius, `1px solid #E2E8F0`, background `#FFFFFF`.
- Correct state: `#ECFDF5` background, `#059669` border, check icon.
- Incorrect state: `#FFF1F2` background, `#E11D48` border, cross icon.

### Flashcard Module
- Double-sided card structure with 3D perspective flip.
- Front: Big-type anatomical term (`headline-lg`) centered with subtle category indicator.
- Back: Segmented breakdown detailing functional movement, clinical palpation tips, and antagonist relationships.