import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions, useNavigation } from "@react-navigation/native";
import EventosAdmin from "./EventosAdmin";
import Service from "./Service";
import { MaterialIcons } from "@expo/vector-icons";
import Maps from "./Croquis";

const Tab=createBottomTabNavigator();

TabAdmin = () =>{
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: 'Login', // Asegúrate de que sea el nombre correcto de tu pantalla de inicio de sesión
                },
              ],
            })
          );
    }

    return(
        <Tab.Navigator initialRouteName="EventosAdmin">
            <Tab.Screen
            name="Eventos" 
            component={EventosAdmin}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'#129E9E',
                tabBarInactiveTintColor:'#0833A2',
                tabBarLabelStyle:{fontSize:20},
                tabBarIcon: ({size,color}) =>{
                    return(
                    <MaterialIcons name="home"
                    color={color}
                    size={size} />
                    )
                }
            }} />

            <Tab.Screen
            name="Servicios" 
            component={Service}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'#129E9E',
                tabBarInactiveTintColor:'#0833A2',
                tabBarLabelStyle:{fontSize:20},
                tabBarIcon: ({size,color}) =>{
                    return(
                        <MaterialIcons name="design-services"
                    color={color}
                    size={size} />
                    )
                }
            }} />

            <Tab.Screen
            name="Croquis" 
            component={Maps}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'#129E9E',
                tabBarInactiveTintColor:'#0833A2',
                tabBarLabelStyle:{fontSize:20},
                tabBarIcon: ({size,color}) =>{
                    return(
                        <MaterialIcons name="map"
                    color={color}
                    size={size} />
                    )
                }
            }} />

            <Tab.Screen
            name="Salir"
            component={() => null} // No necesitas un componente aquí
            listeners={({ navigation }) => ({
            tabPress: (e) => {
                e.preventDefault(); // Evitar cambiar de pestaña al presionar "Salir"
                handleLogout();
            },
            })}
            options={{
            tabBarActiveTintColor: '#129E9E',
            tabBarInactiveTintColor: '#0833A2',
            tabBarLabelStyle: { fontSize: 20 },
            tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="logout" color={color} size={size} />
            ),
            }} />
            
        </Tab.Navigator>

    )
}

export default TabAdmin;