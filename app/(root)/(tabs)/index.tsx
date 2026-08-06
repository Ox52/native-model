import { SafeAreaView } from "react-native-safe-area-context";
import { Button, FlatList, Image, Pressable,Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";





export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
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


      <Pressable className="bg-blue-500 p-4 rounded-xl">

        <Text className="text-black font-bold">

          login
        </Text>


      </Pressable>

      <Image

        source={{
          uri:"https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
        }}
        className="w-48 h-48 rounded-xl"
      />

      <TextInput
        placeholder="Searching..."
        className="border rounded-lg p-3"



      />

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

<PropertyCard property={item} />
        )}



      />


    </SafeAreaView>
  );
}
