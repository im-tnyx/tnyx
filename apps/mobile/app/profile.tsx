import { View } from "react-native";
import { Card, Screen, Text } from "@/components/ui";
import { useAppLanguage } from "@/hooks/useAppLanguage";

export default function ProfileScreen() {
  const { t } = useAppLanguage();

  return (
    <Screen>
      <View style={{ marginTop: 18 }}>
        <Card>
          <Text variant="title">{t("profileTitle")}</Text>
          <View style={{ marginTop: 8 }}>
            <Text variant="caption">{t("profileSubtitle")}</Text>
          </View>
        </Card>
      </View>
    </Screen>
  );
}
