import { Stack } from "expo-router";
import {Text,View,Button,Pressable} from "react-native";
import { useRouter } from "expo-router";
export default function about(){
const router = useRouter();
return ( <View>

     <Stack.Screen
        options={{
          headerTitle: "About",
        }}
      />
      <Button title="Books List" style={{ color: "green" }} onPress={() => router.replace("/")} />
      
     </View>
);
}