



import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,

} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default  function SignIn() {
  const saveUsername = async () => {
    await AsyncStorage.setItem("username", "Harsh");
    console.log("Username saved");
  };

  const getUsername = async () => {
    const username = await AsyncStorage.getItem("username");
    console.log(username);
  };

  const removeUsername = async () => {
    await AsyncStorage.removeItem("username");
    console.log("Username removed");
  };
  return (



    <KeyboardAvoidingView

      className="flex-1"
      behavior={Platform.OS==="ios"? "padding":"height"}
    >


      < View className="flex-1 justify-center p-6">
        <Text className="text-3xl font-bold">

Login


        </Text>

        <TextInput
          placeholder="Email"
          className="border rounded-xl p-4 mt-6"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border rounded-xl p-4 mt-6"
        />


</View>


</KeyboardAvoidingView>


  )

}
