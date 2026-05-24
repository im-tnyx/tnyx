import { Image, Platform, Pressable, Text as RNText, View } from "react-native";
import { router } from "expo-router";
import { Avatar, Text } from "@/components/ui";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useAppLanguage } from "@/hooks/useAppLanguage";
import { useStreakStore } from "@/store/streak.store";
import { SubscriptionPlan, useSubscriptionStore } from "@/store/subscription.store";

function PlanBadge({
  plan,
  label,
  onPress,
  colors,
}: {
  plan: SubscriptionPlan;
  label: string;
  onPress: () => void;
  colors: ReturnType<typeof useAppTheme>["colors"];
}) {
  const isActionable = plan === "free" || plan === "plus";
  const isPremium = plan === "pro";
  const showGlow = isActionable;

  const glowShell = {
    minWidth: 100,
    height: 33,
    borderRadius: 12,
    padding: 2.2,
    backgroundColor: colors.accent.primary,
    borderWidth: 0.8,
    borderColor: "#A9CBFF",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    shadowColor: colors.accent.primary,
    shadowOpacity: showGlow ? 0.45 : 0,
    shadowRadius: showGlow ? 12 : 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: showGlow ? 9 : 0,
  };

  const innerPill = {
    width: "100%" as const,
    height: "100%" as const,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "#030303",
    alignItems: "center" as const,
    justifyContent: "center" as const,
  };

  const badgeTextStyle = {
    color: "#BBD6FF",
    fontWeight: "700" as const,
    fontSize: 14,
    lineHeight: 18,
    includeFontPadding: false as const,
    textAlignVertical: "center" as const,
  };

  if (isPremium) {
    return (
      <View style={glowShell}>
        <View style={innerPill}>
          <Text variant="title" style={badgeTextStyle}>
            {label}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={glowShell}>
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        disabled={!isActionable}
        style={({ pressed }) => ({
          ...innerPill,
          opacity: pressed ? 0.92 : 1,
        })}
      >
        <Text variant="title" style={badgeTextStyle}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

export function AppTopBar() {
  const { colors } = useAppTheme();
  const { t } = useAppLanguage();
  const plan = useSubscriptionStore((state) => state.plan);
  const streakCount = useStreakStore((state) => state.count);
  const hasStreakCount = streakCount > 0;
  const streakDigits = String(streakCount).length;
  const streakWidth = hasStreakCount ? Math.max(50, 35 + 5 + streakDigits * 10) : 35;

  const brandLabel = plan === "plus" ? t("brandTnyxPlus") : t("brandTnyx");
  const planLabel =
    plan === "free" ? t("planGetPremium") : plan === "pro" ? t("planPremium") : t("planUpgrade");

  return (
    <View
      style={{
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ minWidth: 76 }}>
        <Text variant="title">{brandLabel}</Text>
      </View>

      <PlanBadge plan={plan} label={planLabel} onPress={() => router.push("/profile")} colors={colors} />

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            width: streakWidth,
            height: 35,
            borderRadius: 999,
            padding: 2.1,
            backgroundColor: colors.bg.card,
            borderWidth: 1.6,
            borderColor: colors.accent.ai,
            shadowColor: colors.accent.ai,
            shadowOpacity: 0.3,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 0 },
            elevation: 5,
          }}
        >
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push("/(tabs)/progress")}
            style={({ pressed }) => ({
              width: "100%",
              height: "100%",
              borderRadius: 999,
              borderWidth: 0,
              borderColor: "transparent",
              paddingHorizontal: hasStreakCount ? 8 : 0,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#05070E",
              opacity: pressed ? 0.92 : 1,
            })}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: hasStreakCount ? 6 : 0,
              }}
            >
              <Image
                source={require("../../assets/fire_streak.png")}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
              {hasStreakCount ? (
                <RNText
                  style={{
                    color: "#F5F7FA",
                    fontFamily: Platform.select({
                      ios: "System",
                      android: "sans-serif-medium",
                      default: "System",
                    }),
                    fontSize: 20,
                    lineHeight: 20,
                    includeFontPadding: false,
                    textAlignVertical: "center",
                    paddingVertical: 0,
                  }}
                >
                  {streakCount}
                </RNText>
              ) : null}
            </View>
          </Pressable>
        </View>

        <Pressable accessibilityRole="button" onPress={() => router.push("/profile")}>
          <Avatar size="md" initials="ST" />
        </Pressable>
      </View>
    </View>
  );
}
