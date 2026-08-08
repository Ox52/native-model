import { useLocalSearchParams } from "expo-router";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView } from "react-native";
import { properties } from "@/data/properties";
import { Image } from "react-native";
import { useState } from "react";




export default function PopertyDeatils() {

  const [booked, setBooked] = useState(false);

  // const { id } = useLocalSearchParams()
  const { id } = useLocalSearchParams<{ id: string }>();
  const property = properties.find((item) => item.id === id);



  if (!property) {

    return (
      <SafeAreaView className="flex-1 justify-center items-center">




        <Text>

Property not found
</Text>


      </SafeAreaView>
    )
  }



  return (



    <SafeAreaView>

      <ScrollView>







        <Image
          source={{ uri: property.image }}
          className="w-full h-72"
          resizeMode="cover"
        />

        <View className="p-5">

      <Text className="text-3xl font-bold">{property.title}</Text>

        <Text className="text-2xl font-bold text-green-600 mt-4">{property.price}</Text>
        <Text className="text-xl font-bold mt-6">
            Description
        </Text>


        <Text className="text-gray-600 mt-2 leading-6">{property.description}</Text>


        <View className="flex-row justify-between mt-3">
          <Text>{property.rating}</Text>
           <Text>{property.city}</Text>
        </View>



          <Pressable
            disabled={booked}

            onPress{() => {

              Alert.alert(

                "book Visit",
                "do you want to book a visit",
                [
                  {
                    text: "Cancel"

                  },
                  {
                    text: "Confirm",
                    onPress: () => {

                      setBooked(true)
                    },



                  }

                ]


              )


            }
            }


            className={`rounded-xl py-4 mt-8 ${booked ? "bg-green-400" : "bg-blue-500"}`}


          >
            <Text className="text-white text-center text-lg font-bold">


{booked? "Visited Booked" : "Book Visit"}


          </Text>


          </Pressable>


        </View>




      </ScrollView>
    </SafeAreaView>


  )
}
