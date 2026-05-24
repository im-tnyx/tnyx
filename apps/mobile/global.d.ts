declare module "*.css";

declare module "expo-linear-gradient" {
  import type { ReactNode, ComponentType } from "react";
  import type { ViewProps } from "react-native";

  export type LinearGradientProps = ViewProps & {
    colors: readonly string[];
    locations?: readonly number[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    children?: ReactNode;
  };

  export const LinearGradient: ComponentType<LinearGradientProps>;
}
