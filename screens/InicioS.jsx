import { useNavigation} from "@react-navigation/native";
import { Button, Card, Image} from "@rneui/base";
import { useState } from "react";
import { StyleSheet, View, Alert, Text, TextInput } from "react-native";


login = () => {

    const navigation = useNavigation();

    let [mail, setMail] = useState('');
    let [pass, setPass] = useState('');

    const validUser = {
        user: 'Ana',
        password: '123'
    }

    const adminUser={
        user: 'Admin',
        password: '1234'
    }

    let intentos = 0;

    const validateUser = () => {
        if (mail === validUser.user
            && pass === validUser.password) {
            navigation.replace('User',{screen: 'TabUser'});
            Alert.alert("Usuario", `Bienvenido ${validUser.user}`,
                [
                    {
                        text: 'OK', onPress: () => {}
                    }
                ]);
        }else if(mail === adminUser.user
            && pass === adminUser.password){
                navigation.navigate('Admin', {screen:'TabAdmin'});
                Alert.alert("Administrador", "Bienvenido administrador",
                [
                    {
                        text: 'OK', onPress: () => {}
                    }
                ]);
        }
         else {
            Alert.alert('Usuario incorrecto',
                `Tienes ${3 - intentos} restantes `,
                [
                    {
                        text: 'Ok', onPress: () => {
                            intentos++;
                        }
                    }
                ]);
        }
    }


    return (
        <View style={styles.container}>
            <Card containerStyle={{justifyContent:'center', alignItems:'center'}}>
                <Image style={styles.Image} source={require('../images/ImagenLogo.png')}/>
                <Card.Title style={styles.title}>SIVEX</Card.Title>
                <Card.Divider/>
                <Text style={styles.text}>Usuario: </Text>
                <TextInput
                    style={styles.input}
                    value={mail}
                    onChangeText={setMail}
                    placeholder="acano@utez.edu.mx"
                />
                <Text style={styles.text}>Contraseña:</Text>
                <TextInput
                    style={styles.input}
                    value={pass}
                    onChangeText={setPass}  

                />

                <Button
                buttonStyle={{margin:5, borderRadius:20}}
                title={'Iniciar sesión'}
                color={'#0833A2'}
                onPress={validateUser}
                />

                <Button
                buttonStyle={{margin:5, borderRadius:20}}
                title={'Registrarse'}
                color={'#129E9E'}
                onPress={()=>{
                    navigation.navigate('Registro');}}
                />
            </Card>
        </View>
        

    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:35
    },
    text:{
        fontSize:15,
        margin:5,
        fontFamily:'Arial'
    },
    title:{
        fontFamily:'Arial',
        fontWeight: 'bold',
        fontSize:48,
        margin:20
    },
    Image:{
        width:300,
        height:150,
        justifyContent: 'center',
        alignItems:'center'
    },
    input:{
        backgroundColor:'#E5E5E5',
        borderRadius:10,
        width:290,
        height:45,
        marginBottom: 15,
        textAlign:'center',
        textAlignVertical:'center'
    }
})

export default login;