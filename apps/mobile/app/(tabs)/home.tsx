import { View } from "react-native";
import { AppTopBar } from "@/components/composite/AppTopBar";
import { Card, Screen, Text } from "@/components/ui";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function HomeScreen() {
  const { t } = useAppLanguage();

  return (
    <Screen>
      <AppTopBar />
      <View style={{ marginTop: 18 }}>
        <Card>
          <Text variant="title">{t("homeTitle")}</Text>
          <View style={{ marginTop: 8 }}>
            <Text variant="caption">{t("homeSubtitle")}</Text>
          </View>
        </Card>
      </View>
    </Screen>
  );
}
