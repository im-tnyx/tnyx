# TNYX Feature Roadmap

This document defines rollout order and development priorities for TNYX.

Current focus:

- Android mobile UI only
- mock data only
- no backend logic integration
- no production API integration

## Execution Alignment

- This roadmap governs phased delivery under root `MASTER_EXECUTION_PLAN.md`.
- Detailed UI execution standards are enforced by:
  `SCREEN_INVENTORY.md`, `EXPO_SETUP.md`, `UI_GENERATION_WORKFLOW.md`, and `CODING_STANDARDS.md`.

## 1) Product Vision

TNYX is an AI-first health, fitness, nutrition, recovery, and coaching ecosystem.

Long-term platform scope:

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

In scope:

- screen architecture
- design system implementation
- navigation flows
- animation baselines
- reusable component library
- mock data states

Out of scope:

- backend integration
- auth APIs implementation
- realtime sync
- AI orchestration logic
- production persistence

## 3) UI-Only Rules (v0.1)

During v0.1:

- all data remains mock-driven
- no API calls
- no Supabase/Firebase wiring
- no business logic implementation
- no watch runtime implementation

## 4) MVP Screen Priorities

### P1 Core Entry

- Splash
- Welcome
- Login
- OTP Verify
- Onboarding
- Permissions

### P2 Main Navigation

- Home Dashboard
- Bottom Tabs
- Navigation Shell
- Empty and Loading States

### P3 Workout Module

- Planner
- Session
- Active
- Summary
- Exercise Details
- History

### P4 Nutrition Module

- Dashboard
- Food Logging
- Barcode Entry
- Food Camera Entry
- Voice Food Entry
- Micronutrient Summary

### P5 AI Surfaces

- AI Coach Entry
- AI Chat UI
- AI Workout Suggestions
- AI Nutrition Suggestions
- AI Recovery Insights

### P6 Recovery and Analytics

- Recovery Dashboard
- Sleep Summary
- Hydration Tracking
- Weight Progress
- Streak Tracking
- Analytics Overview

### P7 Profile and Settings

- Profile
- Goals
- Devices
- Notifications
- Subscription UI
- Settings

## 5) Immediate Deliverable Target (v0.1)

- 25-40 polished Android screens
- reusable design system
- stable navigation structure
- smooth transitions
- mock-driven interactions

No backend work required before this milestone is complete.

## 6) Post UI Foundation Roadmap

### v0.2

- backend contracts
- auth integration
- persistence baseline

### v0.3

- AI integration
- nutrition APIs
- wearable sync

### v0.4

- subscriptions
- realtime sync
- notification intelligence

### v1.0

- production release hardening
- analytics maturity
- scale and optimization

## 7) Documentation Status

Core v0.1 docs are available:

- `MONOREPO_STRUCTURE.md`
- `DESIGN_SYSTEM.md`
- `DESIGN_TOKENS.md`
- `NAVIGATION_STRUCTURE.md`
- `SCREEN_INVENTORY.md`
- `COMPONENT_ARCHITECTURE.md`
- `ANIMATION_GUIDELINES.md`
- `FIGMA_STRUCTURE.md`
- `EXPO_SETUP.md`
- `UI_GENERATION_WORKFLOW.md`
- `CODING_STANDARDS.md`

Primary execution authority:

- root `MASTER_EXECUTION_PLAN.md`

## 8) Execution Rule

Current path:

Documentation complete  
-> Android mobile UI foundation  
-> no backend coupling in v0.1  
-> component-first implementation  
-> premium mock-driven screens
