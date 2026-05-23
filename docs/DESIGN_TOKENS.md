# TNYX Design Tokens

This document defines the token contract for TNYX mobile applications.

All visual styling must derive from these tokens.

Hard rule:

- no hardcoded visual values inside production UI components or screens.

## Execution Alignment

- Token contract is mandatory for all v0.1 UI implementation work.
- Keep token names theme-extensible for future web/admin/watch surfaces.
- Conflict priority:
  `MASTER_EXECUTION_PLAN -> FEATURE_ROADMAP -> this document -> DESIGN_SYSTEM`.

## 1) Token Philosophy

Tokens must provide:

- visual consistency
- scalable theming
- reusable styling
- predictable spacing
- maintainable dark theme support

Tokens should be:

- semantic
- reusable
- implementation-safe
- platform-consistent

## 2) Token Categories

Core token groups:

```txt
colors
typography
spacing
radius
elevation
opacity
motion
z-index
icon-size
layout
```

## 3) Color Tokens

### 3.1 Background Colors

```txt
bg.primary
bg.secondary
bg.elevated
bg.card
bg.modal
bg.input
```

Rules:

- avoid pure black
- maintain layered depth
- elevated surfaces must remain distinguishable

### 3.2 Text Colors

```txt
text.primary
text.secondary
text.muted
text.inverse
text.disabled
```

Rules:

- prioritize readability
- muted text must remain readable in dark mode

### 3.3 Accent Colors

```txt
accent.primary
accent.success
accent.warning
accent.error
accent.ai
accent.recovery
accent.hydration
accent.nutrition
accent.workout
```

Rules:

- semantic meaning must remain stable
- avoid competing accent overload on a single screen

## 4) Typography Tokens

### 4.1 Font Families

```txt
font.primary
font.heading
font.mono
```

Recommended:

- Inter
- Plus Jakarta Sans

### 4.2 Font Sizes

```txt
text.xs
text.sm
text.md
text.lg
text.xl
text.2xl
text.3xl
```

Rules:

- maintain hierarchy consistency
- no arbitrary font sizes

### 4.3 Font Weights

```txt
weight.regular
weight.medium
weight.semibold
weight.bold
```

### 4.4 Line Heights

```txt
leading.tight
leading.normal
leading.relaxed
```

## 5) Spacing Tokens

Approved spacing scale:

```txt
space.1 = 4
space.2 = 8
space.3 = 12
space.4 = 16
space.5 = 20
space.6 = 24
space.8 = 32
space.10 = 40
space.12 = 48
```

Rules:

- no arbitrary spacing values
- preserve vertical rhythm

## 6) Radius Tokens

```txt
radius.sm
radius.md
radius.lg
radius.xl
radius.full
```

Rules:

- avoid inconsistent radius mixing
- use `radius.full` only where intentional

## 7) Elevation Tokens

```txt
elevation.none
elevation.sm
elevation.md
elevation.lg
elevation.overlay
```

Rules:

- dark theme shadows must remain subtle
- elevation should express hierarchy

## 8) Opacity Tokens

```txt
opacity.disabled
opacity.muted
opacity.overlay
opacity.loading
```

## 9) Motion Tokens

### 9.1 Duration Tokens

```txt
motion.fast
motion.normal
motion.slow
```

### 9.2 Spring Presets

```txt
spring.snappy
spring.smooth
spring.gentle
```

Rules:

- motion must support comprehension
- avoid exaggerated bounce behavior

## 10) Z-Index Tokens

```txt
z.base
z.dropdown
z.modal
z.toast
z.overlay
```

Rules:

- stacking order must remain predictable

## 11) Icon Size Tokens

```txt
icon.xs
icon.sm
icon.md
icon.lg
icon.xl
```

Rules:

- icon scale must stay consistent across modules

## 12) Layout Tokens

### 12.1 Container Widths

```txt
layout.content
layout.compact
layout.modal
```

### 12.2 Safe Area Tokens

```txt
safe.top
safe.bottom
```

## 13) Component Token Rules

### 13.1 Button Tokens

Required mapping:

- background
- text color
- radius
- spacing
- elevation
- pressed state

### 13.2 Card Tokens

Required mapping:

- background
- padding
- radius
- border
- elevation

### 13.3 Input Tokens

Required mapping:

- background
- border
- focus state
- placeholder color
- text color

## 14) Semantic Feature Tokens

### 14.1 Workout Tokens

```txt
workout.active
workout.rest
workout.complete
```

### 14.2 Recovery Tokens

```txt
recovery.good
recovery.medium
recovery.low
```

### 14.3 Hydration Tokens

```txt
hydration.low
hydration.normal
hydration.complete
```

### 14.4 AI Tokens

```txt
ai.primary
ai.background
ai.highlight
```

## 15) Token Usage Rules

Mandatory:

- tokens only
- semantic naming only
- no inline hex values
- no arbitrary spacing/radius/font values

Avoid:

- duplicate token definitions
- screen-local styling systems
- component-local hardcoded palettes

## 16) Theme Rules

Current supported theme:

- dark theme only

Future:

- light theme support planned

Rules:

- token contract must remain theme-extensible

## 17) Accessibility Rules

Tokens must support:

- readable contrast
- scalable typography
- dark mode readability
- touch target sizing

## 18) Implementation Rules

Token mappings should eventually live in:

- NativeWind config
- Tamagui config
- shared constants
- animation preset modules

## 19) Quality Bar

The token system should make the app feel:

- premium
- cohesive
- modern
- scalable
- production-grade

No screen should visually drift from the token contract.
