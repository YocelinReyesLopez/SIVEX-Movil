import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../screens/InicioS";
import EventosAdmin from "../screens/Admin/EventosAdmin";
import TabAdmin from "../screens/Admin/tabNavAdmin";

const Stack = createNativeStackNavigator();

Adminroutes = () => {
    return (
    <Stack.Navigator initialRouteName='EventoAdmin' >
            <Stack.Screen name="EventoAdmin" component={EventosAdmin} options={{ headerShown: false }} />
            <Stack.Screen name='TabAdmin' component={TabAdmin} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Adminroutes;