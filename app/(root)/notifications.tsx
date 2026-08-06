import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";
import { router } from "expo-router";

export default function Notifications() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Button
        title="Home"
        onPress={() => router.back()}
      />
    </SafeAreaView>
  );
}
