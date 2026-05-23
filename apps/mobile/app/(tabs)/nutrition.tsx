import { PlaceholderScreen } from "@/components/layouts/PlaceholderScreen";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function NutritionScreen() {
  const { t } = useAppLanguage();
  return <PlaceholderScreen title={t("nutritionTitle")} subtitle={t("nutritionSubtitle")} />;
}
