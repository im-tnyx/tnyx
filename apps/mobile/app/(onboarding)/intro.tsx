import { PlaceholderScreen } from "@/components/layouts/PlaceholderScreen";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function OnboardingIntroScreen() {
  const { t } = useAppLanguage();

  return (
    <PlaceholderScreen
      title={t("onboardingIntroTitle")}
      subtitle={t("onboardingIntroSubtitle")}
    />
  );
}
