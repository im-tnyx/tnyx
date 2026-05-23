import { PlaceholderScreen } from "@/components/layouts/PlaceholderScreen";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function ProgressScreen() {
  const { t } = useAppLanguage();
  return <PlaceholderScreen title={t("progressTitle")} subtitle={t("progressSubtitle")} />;
}
