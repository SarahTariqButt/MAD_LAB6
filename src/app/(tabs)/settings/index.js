import {Text,View} from "react-native";
import  {Link} from "expo-router";

export default function Settings(){
    return (
        <View>
        <Link href="/settings/profile">Profile</Link>
        <Link href="/settings/notifications">Notifications</Link>
        </View>
    )

}