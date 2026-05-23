# TNYX Feature Roadmap

This document defines feature rollout order and development priorities for TNYX.

Current focus:

- Android mobile UI only
- no backend logic
- no real API integration
- no production data layer
- mock-driven interface development

## 1) Product Vision

TNYX is an AI-first health, fitness, nutrition, recovery, and coaching ecosystem.

The platform will eventually include:

- mobile apps
- watch companion apps
- web dashboard
- admin panel
- AI coaching system
- recovery intelligence
- nutrition intelligence
- health sync integrations

## 2) Current Development Phase

### Phase: UI Foundation (v0.1)

Goal:
Create a production-grade Android mobile UI prototype with premium UX quality.

Current scope:

- screen architecture
- design system implementation
- navigation flows
- animations
- reusable components
- mock data
- empty/loading/error states

Not included:

- backend integration
- authentication APIs
- payments
- realtime sync
- AI logic
- database
- analytics tracking

## 3) UI-Only Development Rules (v0.1)

During v0.1:

- all data is mock data
- no API calls
- no Supabase integration
- no Firebase integration
- no authentication logic implementation
- no business logic
- no production persistence
- focus only on UI/UX quality

## 4) MVP Mobile Screen Priorities

### Priority 1: Core Entry

- Splash
- Welcome
- Login
- OTP Verify
- Onboarding
- Permissions

### Priority 2: Main Navigation

- Home Dashboard
- Bottom Tab System
- Navigation Shell
- Empty States
- Loading States

### Priority 3: Workout Module

- Workout Planner
- Workout Session
- Active Workout
- Workout Summary
- Exercise Details
- Workout History

### Priority 4: Nutrition Module

- Nutrition Dashboard
- Food Logging
- Barcode Entry
- Food Camera Entry
- Voice Food Entry
- Micronutrient Summary

### Priority 5: AI Surfaces

- AI Coach Entry
- AI Chat UI
- AI Workout Suggestions
- AI Nutrition Suggestions
- AI Recovery Insights

### Priority 6: Recovery & Analytics

- Recovery Dashboard
- Sleep Summary
- Hydration Tracking
- Weight Progress
- Streak Tracking
- Analytics Overview

### Priority 7: Profile & Settings

- Profile
- Goals
- Devices
- Notifications
- Subscription UI
- Settings

## 5) Animation Rollout

Initial animation priorities:

1. screen transitions
2. tab interactions
3. workout progress feedback
4. charts and progress rings
5. button feedback

Avoid:

- decorative motion overload

## 6) Component System Priorities

Build reusable primitives first:

- Button
- Card
- Progress Ring
- Input
- Bottom Sheet
- Modal
- Chart Container
- Metric Row
- Empty State
- Loading Skeleton

## 7) Mock Data Rules

Mock data should:

- feel realistic
- reflect athlete behavior
- support multiple UI states

Include:

- workout stats
- hydration logs
- streaks
- calories
- recovery scores
- sleep summaries

## 8) Design Quality Goals

Every screen should feel:

- premium
- production-ready
- responsive
- smooth
- modern
- fitness-focused

Avoid:

- template UI
- generic SaaS layouts
- overcrowded dashboards

## 9) Immediate Deliverable Target (v0.1)

- 25-40 polished Android screens
- reusable design system
- stable navigation structure
- smooth transitions
- mock-driven interactions

No backend work is required before this milestone is complete.

## 10) Post UI Foundation Roadmap

### v0.2

- Supabase integration
- authentication
- local persistence
- API contracts

### v0.3

- AI integration
- nutrition APIs
- wearable sync

### v0.4

- subscriptions
- realtime sync
- notifications

### v1.0

- production release
- analytics
- scaling
- optimization

## 11) Next Documentation Sequence

Create next:

```txt
docs/
 ├── SCREEN_INVENTORY.md
 ├── COMPONENT_ARCHITECTURE.md
 ├── DESIGN_TOKENS.md
 ├── ANIMATION_GUIDELINES.md
 └── FIGMA_STRUCTURE.md
```

Most critical next doc:

- `docs/SCREEN_INVENTORY.md`

## 12) Execution Rule

Current execution path:

Documentation Complete  
-> Android Mobile UI Only  
-> No Backend  
-> No Logic  
-> No APIs  
-> No State Complexity  
-> Premium Screens + Navigation + Mock Data
