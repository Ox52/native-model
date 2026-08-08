import { useLocalSearchParams } from "expo-router";
import { Alert, Modal, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView } from "react-native";
import { properties } from "@/data/properties";
import { Image } from "react-native";
import { useState } from "react";




export default function PopertyDeatils() {

  const [booked, setBooked] = useState(false);
  const [showModal, setShowModal] = useState(false);

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


      <Modal
        visible={showModal}
        transparent
        animationType="slide"






      >

        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-6">

            <Text className="text-2xl font-bold">
                  Book a Visit
            </Text>


            <Text className="text-gray-500 mt-2">

                Would you like to book a visit for this property?
            </Text>

            <Pressable className="bg-blue-500 rounded-xl py-4 mt-6"
onPress={()=>{

  setBooked(true)
  setShowModal(false)
}}


            >



              <Text className="text-white text-center font-bold">
                      Confirm Booking
                    </Text>




            </Pressable>

            <Pressable
              className="py-4 mt-2"
              onPress={() => setShowModal(false)}
            >
              <Text className="text-center font-bold">
                Cancel
              </Text>
            </Pressable>




</View>

</View>


      </Modal>

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
              onPress={() => setShowModal(true)}

            // onPress{() => {

            //   Alert.alert(

            //     "book Visit",
            //     "do you want to book a visit",
            //     [
            //       {
            //         text: "Cancel"

            //       },
            //       {
            //         text: "Confirm",
            //         onPress: () => {

            //           setBooked(true)
            //         },



            //       }

            //     ]


            //   )


            // }
            // }


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
