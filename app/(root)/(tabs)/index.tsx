import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Button
        title="Open Notifications"
        onPress={() => router.push("/notifications")}
      />

      <Button

        title="open property 1"
        onPress={() => router.push({

          pathname: "/property/[id]",
          params: {
id:1
          }

        })}


      />
    </SafeAreaView>
  );
}
