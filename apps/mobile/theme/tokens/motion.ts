export const motion = {
  duration: {
    fast: 120,
    normal: 220,
    slow: 340,
  },
  spring: {
    snappy: {
      damping: 18,
      stiffness: 260,
      mass: 0.7,
    },
    smooth: {
      damping: 22,
      stiffness: 180,
      mass: 0.8,
    },
    gentle: {
      damping: 24,
      stiffness: 140,
      mass: 1,
    },
  },
} as const;
