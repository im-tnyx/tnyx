import { PlaceholderScreen } from "@/components/layouts/PlaceholderScreen";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function WorkoutScreen() {
  const { t } = useAppLanguage();
  return <PlaceholderScreen title={t("workoutTitle")} subtitle={t("workoutSubtitle")} />;
}
