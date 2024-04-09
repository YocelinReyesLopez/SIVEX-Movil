import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "../screens/User/tabNav";

const Stack = createNativeStackNavigator();

Userroutes = () => {
    return (
        <Stack.Navigator initialRouteName='TabUser'>
            <Stack.Screen name='TabUser' component={TabNav} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Userroutes;