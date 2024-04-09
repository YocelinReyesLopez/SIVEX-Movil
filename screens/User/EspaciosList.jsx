import { View, Text, StyleSheet, TextInputBase, Modal } from 'react-native'
import React, { useState } from 'react'

const EspaciosList = ({ spacesForRent }) => {

    return (
        <View style={styles.card}>
            
            
        </View>
    )
}

export default EspaciosList

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F0EDE2',
        position: 'absolute',
        bottom: 136,
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