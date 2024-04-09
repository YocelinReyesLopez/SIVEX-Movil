import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons } from "@expo/vector-icons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import Eventos from "./Eventos";
import History from "./History";
import Renta from "./Renta";


const Tab=createBottomTabNavigator();

TabNav = () =>{
    const navigation= useNavigation();

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
        
        <Tab.Navigator initialRouteName="Eventos">
            <Tab.Screen
            name="Eventos" 
            component={Eventos}
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
            name="Historial" 
            component={History}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'#129E9E',
                tabBarInactiveTintColor:'#0833A2',
                tabBarLabelStyle:{fontSize:20},
                tabBarIcon: ({size,color}) =>{
                    return(
                        <MaterialIcons name="history"
                    color={color}
                    size={size} />
                    )
                }
            }} />

        <Tab.Screen
            name="Renta" 
            component={Renta}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'#129E9E',
                tabBarInactiveTintColor:'#0833A2',
                tabBarLabelStyle:{fontSize:20},
                tabBarIcon: ({size,color}) =>{
                    return(
                        <MaterialIcons name="check-circle"
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


export default  TabNav;