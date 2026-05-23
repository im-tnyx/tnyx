import { MotiView } from "moti";
import { useAppTheme } from "@/hooks/useAppTheme";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  const { colors } = useAppTheme();

  return (
    <MotiView
      from={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ type: "timing", duration: 700, loop: true, repeatReverse: true }}
      className={`rounded-md ${className ?? ""}`}
      style={{ backgroundColor: colors.bg.elevated }}
    />
  );
}
