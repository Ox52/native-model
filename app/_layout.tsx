import { Stack } from "expo-router";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import "../global.css"


const properties =[
  { id: "1", title: "moedern  vila", city: "Mumbai", price: "1.2cre" },
  { id: "2", title: "moedern  dacnce", city: "Pune", price: "2cre" },
  {id:"3",title:"moedern  catsle", city:"nashik",price:"1.4cre"},
]

export default function RootLayout() {
  return (

    <SafeAreaView className="p-4 ">
      <View>
        <Text>

          dadadad
        </Text>

        <TextInput placeholder="sercg" />

        <TouchableOpacity

          onPress={() => alert("seras")}

          className="bg-yellow-500 rounded-lg py-6 px-3  border-b-gray-800">



          <Text>seacheqweqweqwe here</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={properties }
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View>
            <Text> {item.title}</Text>
            <Text> {item.id}</Text>
            <Text> { item.price}</Text>
</View>
        )}
      />



  </SafeAreaView>
  )
}
