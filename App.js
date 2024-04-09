import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Adminroutes from "./Routes/AdminRoutes";
import Userroutes from "./Routes/UserRoutes";
import { NavigationContainer } from "@react-navigation/native";
import login from "./screens/InicioS";
import registro from "./screens/Registro";

const Stack = createNativeStackNavigator();

App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={login} options={{ headerShown: false }} />
        <Stack.Screen name="Admin" component={Adminroutes} options={{ headerShown: false }}/>
        <Stack.Screen name="User" component={Userroutes} options={{ headerShown: false }}/>
        <Stack.Screen name='Registro' component={registro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;
