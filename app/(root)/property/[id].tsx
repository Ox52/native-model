import { useLocalSearchParams } from "expo-router/build/hooks";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function PopertyDeatils() {

  const { id } = useLocalSearchParams()

  return (

    <SafeAreaView>

      <Text className="text-3xl font-bold">

        Property Id :{id}
</Text>


    </SafeAreaView>


  )
}
