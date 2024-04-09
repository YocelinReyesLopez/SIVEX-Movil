import { useNavigation } from '@react-navigation/native';
import { Button, Card, Image} from "@rneui/base";
import { useState } from "react";
import { StyleSheet, View, Alert, Text, TextInput } from "react-native";
import Modal from "react-native-modal";

registro = () => {
    const navigation = useNavigation();

    let [mail,setMail]= useState('');
    let[mailConfir,setMailConfir]=useState('');
    let[password,setPassword]=useState('');
    let[passConfir, setPassConfir]= useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const validate = () => {
        if (isEmpty(mail) || isEmpty(mailConfir) || isEmpty(password) || isEmpty(passConfir)) {
          Alert.alert("Campos Vacíos", "Todos los campos deben ser completados",
            [
              {
                text: 'OK', onPress: () => {}
              }
            ]);
        } else if (mail === mailConfir) {
          if (password === passConfir) {
            handleRegistro();
            //aca 
          } else {
            Alert.alert("Contraseña Invalida", "Contraseñas no coinciden",
              [
                {
                  text: 'Intentar de nuevo', onPress: () => {}
                }
              ]);
          }
        } else {
          Alert.alert("Correo Invalido", "Correos no coinciden",
            [
              {
                text: 'Intentar de nuevo', onPress: () => {}
              }
            ]);
        }
      };


    const handleRegistro = () => {
        setModalVisible(true);
      };

      const closeModal = () => {
        setModalVisible(false);
      };

      const isEmpty = (value) => {
        return value.trim() === '';
      };
    

    return(
        <View style={{marginTop:35}}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Registro</Text>
            </View>
             <View>
                <Card>
                <Text style={styles.text}>Correo: </Text>
                <TextInput
                    style={styles.input}
                    value={mail}
                    onChangeText={setMail}
                />

                <Text style={styles.text}>Confirmar correo: </Text>
                <TextInput
                    style={styles.input}
                    value={mailConfir}
                    onChangeText={setMailConfir}
                />

                <Text style={styles.text}>Contraseña: </Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}  
                />

                <Text style={styles.text}>Confirmar Contraseña: </Text>
                <TextInput
                    style={styles.input}
                    value={passConfir}
                    onChangeText={setPassConfir}  

                />

                <Button
                 buttonStyle={{margin:5, borderRadius:20}}
                title={'Registrarse'}
                color={'#129E9E'}
                onPress={validate}
                />

                <Button
                 buttonStyle={{margin:5, borderRadius:20}}
                title={'Cancelar'}
                color={'#0833A2'}
                onPress={()=>{
                    navigation.navigate('Login');}}
                />
                
                </Card>
             </View>
             <Modal isVisible={modalVisible} onBackdropPress={closeModal}>
             <View style={styles.modalContent}>
                
                <Text style={styles.modalText}>Usuario registrado correctamente</Text>
                <Button
                buttonStyle={{ margin: 5, borderRadius: 20 }}
                title={'Ir a login'}
                color={'#0833A2'}
                onPress={() => {
                closeModal();
                navigation.navigate('Login');
                }}
                />
            </View>
        </Modal>
        </View>

        

    )
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor: '#00C89F',
        padding: 25,
        alignItems: 'center',
      },
      titulo: {
        fontFamily:'Merriweather',
        fontWeight: 'bold',
        fontSize:48,
      },
      text:{
        fontSize:15,
        margin:5,
        fontFamily:'Merriweather'
        },
        input:{
            backgroundColor:'#E5E5E5',
            borderRadius:10,
            width:290,
            height:45,
            marginBottom: 15,
            textAlign:'center'
        },
        modalContent: {
            backgroundColor: 'white',
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          },
          modalText: {
            fontSize: 18,
            marginBottom: 15,
            textAlign: 'center',
          },
})

export default registro;