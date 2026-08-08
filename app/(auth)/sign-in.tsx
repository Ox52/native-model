



import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
export default function SignIn() {
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
          className="border rounde-xl p-4 mt-6"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border rounde-xl p-4 mt-6"
        />


</View>


</KeyboardAvoidingView>


  )

}
