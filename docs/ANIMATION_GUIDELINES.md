# TNYX Animation Guidelines

This document defines animation behavior, motion standards, interaction feedback, and performance rules for TNYX mobile applications.

Current phase:

- Android-first UI only
- mock data only
- no backend logic

## Execution Alignment

- Follow milestone and scope guardrails from root `MASTER_EXECUTION_PLAN.md`.
- If any conflict appears between docs, resolve by:
  `MASTER_EXECUTION_PLAN -> FEATURE_ROADMAP -> MONOREPO_STRUCTURE -> this document`.

## 1) Motion Philosophy

Motion should feel:

- smooth
- intentional
- premium
- fast
- supportive
- athlete-focused

Animation exists to:

- improve comprehension
- communicate hierarchy
- reinforce interactions
- guide attention
- provide feedback

Animation must never:

- distract
- slow workflows
- create visual fatigue
- compete with primary content

## 2) Motion Principles

Core principles:

1. clarity over decoration
2. responsiveness over spectacle
3. subtlety over exaggeration
4. consistency over novelty
5. performance over complexity

## 3) Approved Animation Categories

Allowed motion types:

- screen transitions
- shared element transitions
- press feedback
- loading skeletons
- progress animations
- chart transitions
- bottom sheet motion
- modal transitions
- gesture interactions

Avoid:

- decorative floating motion
- excessive looping
- unnecessary parallax
- distracting particle effects

## 4) Animation Ownership

Animation logic should live in:

- reusable interaction wrappers
- shared components
- feature-level motion modules

Avoid:

- duplicated animation logic across screens
- inline one-off animation systems

## 5) Timing Standards

Use tokenized timing only:

```txt
motion.fast
motion.normal
motion.slow
```

Rules:

- fast for taps and button feedback
- normal for transitions
- slow only for emphasis surfaces

Avoid:

- arbitrary duration values

## 6) Spring Standards

Approved spring presets:

```txt
spring.snappy
spring.smooth
spring.gentle
```

Use cases:

- `spring.snappy`: quick tap feedback
- `spring.smooth`: navigation and card interactions
- `spring.gentle`: onboarding and modal entry

Rules:

- avoid exaggerated bounce
- avoid rubbery physics

## 7) Screen Transition Rules

Primary transitions:

- fade
- slide
- shared-axis motion

Rules:

- preserve orientation between screens
- avoid aggressive direction changes
- maintain continuity from source to destination

Avoid:

- flashy 3D transitions
- long cinematic transitions

## 8) Bottom Tab Animation Rules

Allowed:

- subtle scale feedback
- active indicator movement
- opacity transitions

Avoid:

- oversized bounce effects
- noisy tab motion

## 9) Button Interaction Rules

Buttons must provide:

- press feedback
- opacity or scale response
- tactile feel

Rules:

- feedback must feel immediate
- never delay primary action

## 10) Card Interaction Rules

Cards may use:

- subtle lift
- scale feedback
- shadow elevation change

Rules:

- keep interaction lightweight
- avoid aggressive motion stacking

## 11) Modal & Bottom Sheet Rules

Motion should communicate:

- entry hierarchy
- temporary context
- dismiss direction

Rules:

- bottom sheets slide vertically
- modals fade with subtle scale support
- gestures must feel natural and predictable

Avoid:

- unexpected motion origin
- abrupt dismiss behavior

## 12) Loading Animation Rules

Allowed:

- skeleton shimmer
- progress pulse
- subtle fade transitions

Avoid:

- spinner overload
- large blocking loaders

Rules:

- preserve layout stability while loading
- avoid layout jumps

## 13) Workout Motion Rules

Workout flows prioritize:

- speed
- readability
- focus
- timer clarity

Allowed:

- set-complete feedback
- progress ring animation
- timer transitions
- subtle PR celebration

Avoid:

- excessive celebration motion
- distracting movement during active sets

## 14) Chart Animation Rules

Charts may animate:

- initial load
- value transitions
- progress updates

Rules:

- prioritize readability
- keep chart animations short and restrained

## 15) AI Interaction Motion

AI interactions should feel:

- intelligent
- calm
- contextual

Allowed:

- recommendation reveal transitions
- subtle typing indicators
- progressive suggestion appearance

Avoid:

- chatbot gimmick animations
- noisy AI visuals

## 16) Gesture Rules

Gestures must feel:

- predictable
- responsive
- smooth

Supported gestures:

- swipe
- drag
- pull-to-refresh
- bottom sheet drag
- carousel gestures

Rules:

- avoid gesture conflicts
- preserve scroll priority

## 17) Haptic Feedback Rules

Use haptics for:

- primary confirmations
- workout completion moments
- timer milestones
- high-importance actions

Avoid:

- excessive vibration frequency

## 18) Accessibility Rules

Animations must support:

- reduced-motion compatibility
- readable transitions
- no seizure-risk flashing
- predictable motion paths

Rules:

- critical information must never depend only on motion

## 19) Performance Rules

Mandatory:

- use Reanimated where appropriate
- avoid JS-thread-heavy animations
- preserve 60fps target
- lazy-load heavy motion surfaces

Avoid:

- layout thrashing
- overlapping heavy animations
- unnecessary re-renders

## 20) Implementation Rules

Motion implementation should map into:

- Reanimated presets
- Moti wrappers
- shared interaction hooks
- animation token system

## 21) Quality Bar

Animations should make the app feel:

- premium
- fluid
- responsive
- modern
- production-grade

The app should never feel:

- laggy
- chaotic
- over-animated
- distracting
- inconsistent
