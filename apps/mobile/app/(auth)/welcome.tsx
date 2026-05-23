import { View } from "react-native";
import { router } from "expo-router";
import { Card, Button, Screen, Text } from "@/components/ui";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function WelcomeScreen() {
  const { t } = useAppLanguage();

  return (
    <Screen>
      <View style={{ marginTop: 24 }}>
        <Card>
          <Text variant="title">{t("authWelcomeTitle")}</Text>
          <View style={{ marginTop: 8 }}>
            <Text variant="caption">{t("authWelcomeSubtitle")}</Text>
          </View>
          <View style={{ marginTop: 16 }}>
            <Button label={t("welcomeGoHome")} onPress={() => router.replace("/(tabs)/home")} />
          </View>
        </Card>
      </View>
    </Screen>
  );
}
