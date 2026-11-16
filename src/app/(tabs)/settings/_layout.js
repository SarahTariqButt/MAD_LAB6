import {Stack} from "expo-router";
import {Text} from "react-native";
export default function settingsLayout(){



    return <Stack
    screenOptions={{
      headerStyle: { backgroundColor: "green" },
      headerTintColor: "white",
      headerRight: () => (
          <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>
            BSEF24M020
          </Text>
        ),
    }}>
        
        <Stack.Screen name="index" options={{title:"Settings List"}}/>
        <Stack.Screen name="profile" options={{title:"Profile"}}/>
        <Stack.Screen name="notifications" options={{title:"Notifications"}}/>

    </Stack>
}
