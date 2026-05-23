# TNYX Navigation Structure

This document defines route hierarchy, navigation behavior, and flow architecture for TNYX mobile applications.

## 1) Navigation Goals

Navigation should feel:

- predictable
- fast
- thumb-friendly
- low cognitive load
- workout and recovery optimized

Primary navigation priorities:

1. workout access
2. logging speed
3. AI assistance
4. dashboard visibility

## 2) Navigation Stack Overview

Primary app structure:

```txt
Root
 ├── Auth Stack
 ├── Onboarding Stack
 ├── Main Tabs
 ├── Modal Stack
 └── System Flows
```

## 3) Route Strategy

Use:

- Expo Router
- file-based routing
- domain-first route naming

Rules:

- avoid generic route names
- avoid deeply nested routing
- keep hierarchy stable and predictable
- keep URLs feature-scoped and readable

Examples:

Good:

- `/workout/session`
- `/nutrition/log`
- `/ai/coach`

Bad:

- `/newpage`
- `/screen1`
- `/misc`

## 4) Root App Folder Structure

```txt
app/
  (auth)/
  (onboarding)/
  (tabs)/

  workout/
  nutrition/
  ai/
  analytics/
  recovery/
  profile/

  modal/
  system/
```

## 5) Auth Stack

Purpose:

- account access
- session recovery
- onboarding entry

Routes:

```txt
(auth)/
 ├── welcome
 ├── login
 ├── otp-verify
 ├── email-login
 ├── forgot-password
 └── permissions
```

Rules:

- minimal distractions
- fast completion path
- clear CTA hierarchy
- consistent back behavior

## 6) Onboarding Stack

Purpose:

- collect fitness context
- personalize AI setup
- initialize goals and preferences

Routes:

```txt
(onboarding)/
 ├── intro
 ├── goal-selection
 ├── body-metrics
 ├── activity-level
 ├── nutrition-preferences
 ├── wearable-sync
 └── completion
```

Rules:

- progressive disclosure
- avoid long forms
- maintain completion momentum
- allow safe resume on interruption

## 7) Main Tab Navigation

Primary navigation method:

- bottom tabs

Tabs:

```txt
(tabs)/
 ├── home
 ├── workout
 ├── nutrition
 ├── analytics
 └── profile
```

Rules:

- maximum 5 tabs
- thumb reachable targets
- persistent visibility in primary surfaces
- tab naming must stay domain-driven

## 8) Home Dashboard Navigation

Purpose:

- recovery summary
- next workout
- hydration status
- streak visibility
- AI insights

Quick actions:

- start workout
- log food
- log water
- ask AI

## 9) Workout Navigation

```txt
/workout/
 ├── planner
 ├── session
 ├── active
 ├── summary
 ├── history
 └── exercise
```

Workout flow:

Planner  
-> Session Setup  
-> Active Workout  
-> Summary  
-> Recovery Suggestions

Rules:

- minimize taps during active workout
- support one-hand operation
- keep timer and critical controls persistent
- preserve workout state across app backgrounding

## 10) Nutrition Navigation

```txt
/nutrition/
 ├── dashboard
 ├── log
 ├── barcode
 ├── image-scan
 ├── voice-log
 ├── meal-details
 └── micronutrients
```

Rules:

- fast logging priority
- camera entry within one tap where possible
- AI suggestions should be contextual to meal or log action

## 11) AI Navigation

```txt
/ai/
 ├── coach
 ├── chat
 ├── workout-generator
 ├── nutrition-assistant
 ├── recovery-insights
 └── recommendations
```

Rules:

- AI should augment workflows, not replace core navigation
- avoid isolated chatbot-heavy UX as default
- prefer contextual AI entry points from workout/nutrition/recovery screens

## 12) Analytics Navigation

```txt
/analytics/
 ├── overview
 ├── workout
 ├── nutrition
 ├── recovery
 ├── sleep
 └── streaks
```

Rules:

- trend visibility first
- avoid chart overload
- mobile readability first

## 13) Profile Navigation

```txt
/profile/
 ├── account
 ├── subscriptions
 ├── devices
 ├── goals
 ├── notifications
 ├── privacy
 └── settings
```

## 14) Modal System

Use modals for:

- quick logging
- AI quick actions
- confirmations
- media previews
- picker flows

Avoid:

- deep, multi-step workflows inside modals

Rules:

- modals should be dismissible and state-safe
- destructive actions require explicit confirmation

## 15) System Flows

```txt
/system/
 ├── permissions
 ├── sync-status
 ├── update-required
 ├── maintenance
 └── error
```

## 16) Deep Linking Strategy

Deep links supported for:

- workout plans
- coaching programs
- shared analytics
- referral journeys
- blog/app redirects

Rules:

- every deep link must include fallback handling
- authentication-aware redirects are mandatory
- unresolved routes should land on safe recovery screens

## 17) Watch Companion Navigation

Watch priorities:

1. active workout
2. BPM visibility
3. timer controls
4. hydration logging

Rules:

- ultra-low friction
- minimal nesting
- large tap targets
- Android-mediated sync first

## 18) Navigation Performance Rules

Mandatory:

- lazy load heavy routes
- preserve active workout state
- avoid blocking transitions
- keep gesture navigation smooth
- defer non-critical data fetches after initial render

## 19) Navigation Guardrails

Avoid:

- duplicate routes for same intent
- inconsistent back-stack behavior
- hidden high-frequency actions
- mixed naming conventions

For every new feature route:

1. map entry point
2. define exit/back behavior
3. define deep link behavior
4. define auth-required behavior

## 20) Navigation Quality Bar

Navigation must always feel:

- fast
- predictable
- low-friction
- athlete-focused
- production-grade

Never ship navigation that feels:

- chaotic
- duplicated
- inconsistent
- fragile under deep-link entry
