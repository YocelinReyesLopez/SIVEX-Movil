import { View, Text, StyleSheet, TextInputBase, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button} from '@rneui/base'

const EspaciosList = ({ spacesForRent }) => {

    const [estatus, setEstatus] = useState(spacesForRent.estatus);
    
    const [isModalVisible, setModalVisible] = useState(false);

    const [modalView, setModalView] = useState(false)

    const handleSpacePress = () => {
        setModalView(true)
    }

    const handleCancelPress = () => {
        setEstatus('Libre')
        setModalView(false)
    }
    
    const acceptAlert = () => {
        Alert.alert('¡Felicidades!, espacio rentado',
          'Se ha enviado una confirmación a tu correo',
          [
            { text: 'Aceptar', onPress: () => { setModalVisible(false), setModalView(false), setEstatus('Ocupado') } }
          ]);
      }

    return (
        <View style={styles.card}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginTop: 10 }} />
                    <Text style={styles.texto}>Espacio: {spacesForRent.title}</Text>
                    <Text style={styles.texto}>Sillas: {spacesForRent.sillas}</Text>
                    <Text style={styles.texto}>Mesas: {spacesForRent.mesas}</Text>
                    <Text style={styles.texto}></Text>
                    <Button title='Rentar espacio' buttonStyle={{ width: 150, height: 40, backgroundColor: '#00b4d8', borderRadius: 5 }}
                        onPress={handleSpacePress} />
                </View>
                <View><Text style={{ fontSize: 20, fontWeight: '500' }}>Información...</Text></View>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginTop: 10 }} />
                    <Text style={styles.texto}>Tamaño: {spacesForRent.tamaño}</Text>
                    <Text style={styles.texto}>Tamaño: {spacesForRent.medidas}</Text>
                    <Text style={styles.texto}>Estatus: {estatus}</Text>
                </View>
            </View>

            {/*Primer Modal */}
            <Modal animationType='slide' transparent={true} visible={modalView}>
                <View style={styles.ModalView}>
                    <View style={styles.modalContainer}>
                        <View style={{ backgroundColor: '#00b3b3' }}>
                            <Text style={styles.modalTitle}>Renta del espacio</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding:2 }}>
                            <View style={{ flex: 1 }}>
                                <View>
                                <Text style={{ marginTop: 10 }} />
                                <Text style={styles.texto}>Espacio: {spacesForRent.title}</Text>
                                <Text style={styles.texto}>Sillas: {spacesForRent.sillas}</Text>
                                <Text style={styles.texto}>Mesas: {spacesForRent.mesas}</Text>
                                <Text style={styles.texto}></Text>
                                </View>
                                
                                <Button title='Cancelar' buttonStyle={{ width: 100, height: 40, backgroundColor: 'red', borderRadius: 5 }}
                                    onPress={handleCancelPress} />
                                
                                
                            </View>
                            <View><Text style={{ fontSize: 20, fontWeight: '500' }}>Servicios Extra</Text></View>
                            <View style={{ flex: 1 }}>
                                <View>
                                <Text style={{ marginTop: 10 }} />
                                <Text style={styles.texto}>Tamaño: {spacesForRent.tamaño}</Text>
                                <Text style={styles.texto}>Tamaño: {spacesForRent.medidas}</Text>
                                <Text style={styles.texto}>Estatus: {estatus}</Text>
                                <Text style={styles.texto}></Text>
                                </View>
                                
                                <Button title='Rentar' buttonStyle={{ width: 100, height: 40, backgroundColor: 'green', borderRadius: 5 }}
                                    onPress={acceptAlert} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default EspaciosList

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F0EDE2',
        position: 'absolute',
        bottom: 5,
        right: 10,
        left: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        overflow: 'hidden',
    },
    title: {
        fontFamily: 'San-serif',
        fontSize: 18
    },
    rightContainer: {
        padding: 10,
        flex: 1
    },
    texto: {
        fontSize: 16,
        fontFamily: 'San-serif',
        marginBottom: 10,
        paddingStart: 20

    },
    inputs: {
        width: 100,
        fontSize: 16,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        width: 110,
        height: 40,
    },
    modalContainer: {
        margin: 20,
        borderRadius: 7,
        paddingHorizontal: 30,
        paddingVertical: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: 'white'
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: '#00b3b3',
        alignContent: 'center',
        textAlign: 'center',
        color: 'white'
    },
    ModalView: {
        flex: 1,
        justifyContent: 'center',
        top: 50
    }
})