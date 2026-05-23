import { Platform } from "react-native";

export const shadows = {
  none: {},
  sm:
    Platform.OS === "ios"
      ? {
          shadowColor: "#000000",
          shadowOpacity: 0.2,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 2 },
        }
      : { elevation: 2 },
  md:
    Platform.OS === "ios"
      ? {
          shadowColor: "#000000",
          shadowOpacity: 0.28,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
        }
      : { elevation: 5 },
  lg:
    Platform.OS === "ios"
      ? {
          shadowColor: "#000000",
          shadowOpacity: 0.32,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: 8 },
        }
      : { elevation: 8 },
} as const;
