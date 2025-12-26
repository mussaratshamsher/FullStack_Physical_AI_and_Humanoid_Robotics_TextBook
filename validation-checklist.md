# Validation Checklist for Physical AI & Humanoid Robotics Book

This checklist outlines key areas to review for visual consistency and adherence to the design specification (`physical-ai-book.spec.yaml`).

## I. Typography

- [ ] **Headings (H1-H4):**
  - [ ] Correct font family (Inter, sans-serif) applied.
  - [ ] Correct font sizes (`2.5rem` for H1, `2rem` for H2, `1.5rem` for H3, `1.25rem` for H4).
  - [ ] Correct font weights (`700` for H1, `600` for H2-H4).
  - [ ] Correct text color (var(--color-text)).
- [ ] **Body Text:**
  - [ ] Correct font family (Source Sans Pro, sans-serif) applied.
  - [ ] Correct font size (`1rem`).
  - [ ] Correct line height (`1.7`).
  - [ ] Correct text color (var(--color-text)).
- [ ] **Captions:**
  - [ ] Correct font size (`0.875rem`).
  - [ ] Correct text color (var(--color-text-secondary)).

## II. Layout & Structure

- [ ] **Page Layout:**
  - [ ] Page content respects `maxWidth` (`1280px`).
  - [ ] Page content is horizontally centered (`0 auto` margin).
- [ ] **Header:**
  - [ ] Height is `64px`.
  - [ ] Correct padding (`0 var(--spacing-lg)`).
  - [ ] Correct background color (rgba(255, 255, 255, 0.8) for light, appropriate for dark).
  - [ ] Correct border at the bottom.
  - [ ] Sticky position and z-index applied.
- [ ] **Footer:**
  - [ ] Correct padding (`var(--spacing-xl) var(--spacing-lg)`).
  - [ ] Correct border at the top.
  - [ ] Correct margin-top (`var(--spacing-xxl)`).
- [ ] **Main Content Area:**
  - [ ] Correct padding (`var(--spacing-xl) var(--spacing-lg)`).
- [ ] **Sidebar:**
  - [ ] Width is `280px`.
  - [ ] Correct padding (`var(--spacing-xl) 0`).

## III. Components

### A. Hero Section

- [ ] **General:**
  - [ ] Correct vertical padding (`var(--spacing-xxl)`).
  - [ ] Text is center-aligned.
  - [ ] Background image uses placeholder (`/assets/hero-placeholder.jpg`) with `cover` size and `center` position.
- [ ] **Title:**
  - [ ] Styles match H1 typography.
  - [ ] Color is `var(--color-hero-text)`.
- [ ] **Subtitle:**
  - [ ] Styles match H4 typography.
  - [ ] Color is `var(--color-hero-text)`.
  - [ ] Correct `margin-top` (`var(--spacing-md)`).

### B. Section Banner

- [ ] **General:**
  - [ ] Height is `200px`.
  - [ ] Correct vertical margin (`var(--spacing-xxl)`).
  - [ ] Background image uses placeholder (`/assets/section-banner-placeholder.jpg`) with `cover` size.

### C. Callout Box

- [ ] **General:**
  - [ ] Correct padding (`var(--spacing-md)`).
  - [ ] Correct vertical margin (`var(--spacing-lg)`).
  - [ ] `8px` border-radius.
  - [ ] `1px` solid border.
  - [ ] Icon is displayed with `20px` size and correct margin.
- [ ] **Types (Note, Tip, Warning, Insight):**
  - [ ] **Note:** Correct `borderColor` (`#63B3ED`) and `backgroundColor` (`#EBF8FF`).
  - [ ] **Tip:** Correct `borderColor` (`#68D391`) and `backgroundColor` (`#F0FFF4`).
  - [ ] **Warning:** Correct `borderColor` (`#F6E05E`) and `backgroundColor` (`#FFFFF0`).
  - [ ] **Insight:** Correct `borderColor` (`#B794F4`) and `backgroundColor` (`#FAF5FF`).

### D. Code Blocks

- [ ] **General:**
  - [ ] Correct font family (Fira Code, monospace).
  - [ ] Correct font size (`0.9rem`).
  - [ ] Correct padding (`var(--spacing-md)`).
  - [ ] `8px` border-radius.
  - [ ] Correct background color (`var(--color-code-background)`).
  - [ ] Copy button visible (Docusaurus default).
  - [ ] Syntax highlighting themes (GitHub Light/Dracula Dark) applied correctly.
- [ ] **Tabs:**
  - [ ] Active tab border color is `var(--color-primary)`.
  - [ ] Inactive tab text color is `var(--color-text-secondary)`.

### E. Tables

- [ ] **General:**
  - [ ] `100%` width.
  - [ ] `border-collapse` applied.
- [ ] **Header (`<th>`):**
  - [ ] Correct background color (`var(--color-code-background)`).
  - [ ] Font weight `600`.
  - [ ] `2px` solid border at the bottom.
  - [ ] Correct padding (`var(--spacing-sm) var(--spacing-md)`).
- [ ] **Cells (`<td>`):**
  - [ ] `1px` solid border.
  - [ ] Correct padding (`var(--spacing-sm) var(--spacing-md)`).

## IV. Interactivity

- [ ] **Smooth Scroll:** Enabled for internal navigation.
- [ ] **Internal Links (Glossary Terms):**
  - [ ] Dotted underline style.
  - [ ] Color is `var(--color-accent)`.
  - [ ] Tooltip appears on hover, displaying definition (future implementation/check).

## V. Navigation

- [ ] **Header Navigation:**
  - [ ] Links for "Home", "Chapters", "Glossary", "Resources" are present and functional.
  - [ ] Correct order and position (left).
- [ ] **Sidebar Navigation:**
  - [ ] Reflects chapter and section order from `physical-ai-book.spec.yaml`.
  - [ ] Labels match `_category_.json` files.
  - [ ] Correct hierarchy and nesting.
