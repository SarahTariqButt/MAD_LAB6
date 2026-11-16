import { Tabs } from "expo-router";
import {Text} from "react-native";
export default function TabLayout() {
    return <Tabs 
    screenOptions={{headerStyle:{backgroundColor:"green"},
        headerTintColor:"white",
        headerRight:()=>(
            <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>
            BSEF24M020
          </Text>
    )
    }}>

        <Tabs.Screen
            name="index"
            options={{
                title: "Books",
                tabBarIcon: ({ color}) => <Text style={{color:color, fontSize:24}}>📚</Text> 
            }}
        />
        <Tabs.Screen
            name="saved"
            options={{
                title: "Saved",
                tabBarIcon: ({ color}) => <Text style={{color:color, fontSize:24}}>🎀</Text> 
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
                title: "Settings",
                headerShown:false,
               tabBarIcon: ({ color}) => <Text style={{color:color, fontSize:24}}>☢️</Text> 
            }}
        />

    </Tabs>
}