import { Card, Screen, Text } from "@/components/ui";

type PlaceholderScreenProps = {
  title: string;
  subtitle: string;
};

export function PlaceholderScreen({ title, subtitle }: PlaceholderScreenProps) {
  return (
    <Screen>
      <Card className="mt-6 gap-2">
        <Text variant="title">{title}</Text>
        <Text variant="caption">{subtitle}</Text>
      </Card>
    </Screen>
  );
}
