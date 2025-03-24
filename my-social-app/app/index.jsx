
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter()

  return (
    <ScreenWrapper
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="welcome" onPress={() => router.push("welcome")} />
    </ScreenWrapper>
  );
}
