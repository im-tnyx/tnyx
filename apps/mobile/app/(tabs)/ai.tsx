import { PlaceholderScreen } from "@/components/layouts/PlaceholderScreen";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function AiScreen() {
  const { t } = useAppLanguage();
  return <PlaceholderScreen title={t("aiTitle")} subtitle={t("aiSubtitle")} />;
}
