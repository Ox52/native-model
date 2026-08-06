import { Property } from "@/types/property";
import { Image, Pressable, View, Text } from "react-native";
import { router } from "expo-router";

interface PropertyCardProps{

property:Property
}

export default function PropertyCard({ property, }: PropertyCardProps) {

  return (


    <Pressable className="bg-white rounded-2xl shadow p-4 mb-4 "

      onPress={() =>
        router.push({

          pathname: "/property/[id]",
          params: {
id:property.id
          }
})

      }

    >

      <Image source={{ uri: property.image }} className="w-full h-48 rounded-xl" resizeMode="cover" />

      <View className="mt-3 ">
        <Text className="text-xl font-bold">


{property.title}
        </Text>

        <Text className="text-gray-500">
                📍 {property.city}
        </Text>

        <Text className="text-lg font-semibold text-green-600 mt-1">
                 {property.price}
               </Text>




</View>





    </Pressable>



)


}
