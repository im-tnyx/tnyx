# TNYX Design System

This document defines the visual identity and UI behavior standards for TNYX across mobile, watch companion surfaces, web dashboard, and admin interfaces.

## 1) Design Philosophy

TNYX should feel:

- premium
- performance-focused
- modern
- intelligent
- calm but energetic

UI goal: clarity, momentum, and trust.  
Avoid visual clutter and decorative overload.

Primary inspiration:

- Nike Training Club
- Whoop
- Strava
- Fitbod

## 2) Theme Direction

- Dark theme first
- High-contrast readability
- Minimal but premium hierarchy
- Gradients used sparingly and intentionally
- Touch-friendly, ergonomic surfaces
- Motion supports comprehension, not decoration

## 3) Color System

### 3.1 Core Principles

- Avoid pure black as primary background
- Avoid neon-heavy accents
- Keep accent usage intentional and limited
- Meet accessibility contrast requirements

### 3.2 Semantic Palette (Token-Based)

Background:

- `bg.primary`
- `bg.secondary`
- `bg.elevated`
- `bg.card`

Text:

- `text.primary`
- `text.secondary`
- `text.muted`

Accent and Status:

- `accent.primary`
- `accent.success`
- `accent.warning`
- `accent.error`
- `accent.recovery`
- `accent.hydration`

Rules:

- UI code must reference tokens only
- No hardcoded hex values in screen files
- Status colors must stay semantically consistent across features

## 4) Typography System

### 4.1 Font Direction

Use clean sans-serif families.

Recommended:

- Inter
- Plus Jakarta Sans

### 4.2 Type Hierarchy

- Hero
- Heading
- Title
- Body
- Caption
- Label

Rules:

- Avoid excessive weight variation
- Keep line-height predictable
- Optimize for readability over stylistic effects
- Use tokenized typography styles (size/weight/line-height)

## 5) Spacing System

Use only the approved spacing scale:

- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48

Rules:

- No arbitrary spacing values
- Prefer vertical rhythm and breathing room
- Avoid cramped cards, rows, and dashboard sections

## 6) Radius System

Use consistent radius tokens:

- `radius.sm`
- `radius.md`
- `radius.lg`
- `radius.xl`

Rules:

- Do not mix unrelated radius values on the same screen
- Primary surfaces should avoid sharp corners

## 7) Elevation & Layering

Layer priority:

1. Base background
2. Elevated cards
3. Floating CTA
4. Modal surfaces

Rules:

- Keep shadows subtle in dark theme
- Avoid heavy blur/shadow stacking
- Use elevation to express hierarchy, not decoration

## 8) Card System

Cards should:

- optimize information scanning
- support quick actions
- avoid text overload
- keep predictable internal padding

Allowed enhancements:

- subtle gradients
- progress rings
- compact charts

## 9) Button System

### 9.1 Primary Buttons

Use for high-intent actions:

- start workout
- save log
- continue
- AI-assisted actions

### 9.2 Secondary Buttons

Use for supportive actions:

- edit
- cancel
- filter

Rules:

- minimum touch target required (mobile ergonomics)
- avoid overcrowded multi-action rows
- keep button hierarchy visually obvious

## 10) Navigation Rules

Primary navigation:

- bottom tabs

Secondary navigation:

- stack navigation

Rules:

- avoid deep nesting
- keep primary actions thumb-reachable
- route naming should remain domain-first and predictable

## 11) Animation Rules

Animation purpose:

- interaction feedback
- state transitions
- hierarchy guidance
- progress comprehension

Allowed:

- spring feedback
- shared transitions
- subtle press/scale feedback

Avoid:

- flashy decorative loops
- continuous non-functional motion

## 12) Dashboard Rules

Dashboards must:

- be glanceable
- surface highest-value metrics first
- minimize cognitive load

Priority order:

1. Workout
2. Recovery
3. Water
4. Nutrition
5. Streaks

## 13) AI UI Rules

AI surfaces should feel:

- contextual
- supportive
- intelligent
- non-intrusive

Rules:

- avoid chatbot-heavy primary layouts
- prioritize actionable recommendations
- include confidence/reasoning summaries when useful

## 14) Chart Rules

Charts must:

- remain readable in dark mode
- use restrained color count
- support fast trend understanding

Preferred chart patterns:

- line chart
- progress ring
- compact bar chart

## 15) Accessibility Rules

Mandatory for every screen/component:

- readable contrast
- scalable text behavior
- screen reader labels
- large touch targets
- predictable focus/navigation order

## 16) Screen Layout Rules

Preferred structural rhythm:

1. Header
2. Primary summary
3. Quick actions
4. Main content
5. Bottom navigation

Rules:

- avoid disconnected floating sections
- maintain consistent section rhythm and padding

## 17) Design Quality Bar

Every screen must feel:

- production-ready
- premium
- focused
- calm
- fast
- modern

No screen should feel:

- template-generated
- cluttered
- visually inconsistent
- overloaded

## 18) Implementation Enforcement

Before approving any screen PR:

- token usage check (colors/spacing/type/radius)
- interaction and accessibility review
- loading/empty/error state coverage
- navigation and action hierarchy sanity check

This document is the single source of truth for visual and interaction consistency until revised.
