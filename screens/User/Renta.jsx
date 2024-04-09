import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useState } from 'react'
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import EspaciosList from './EspaciosList'
import spacesForRent from '../data/spacesForRent.json'

Renta = () => {
    const [selectedSpace, setSelectedSpace] = useState({
        latitude:18.850355263823197,
        longitude:-99.20045426082453,
    });

    const [newPosition, setNewPosition] = useState({
        latitude:18.850355263823197,
        longitude:-99.20045426082453,
    })

    const obtainCoordinate = (coordinate) => {
        console.log("Las coordenadas son: ", coordinate)
        setNewPosition(coordinate)
    }
    const regionChange = (coordinates) => {
        console.log("Nuevas coordenadas: ", coordinates)
        console.log("Prueba 1")
      }
    return (
        <View style={{ marginTop: 35 }}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Croquis</Text>
            </View>
            <View>
            <MapView style={styles.mapView}
                provider={PROVIDER_GOOGLE}
                onPress={(e) => obtainCoordinate(e.nativeEvent.coordinate)}
                onRegionChange={regionChange}
                initialRegion={{
                    latitude: 18.850552206853074,
                    longitude: -99.20064395293592,
                    latitudeDelta: 0.004477962358141241,
                    longitudeDelta: 0.002062283456325531
                }}>
                {spacesForRent.map((spacesForRent) => (
                    <Marker pinColor='#00ff00'
                        onPress={() => setSelectedSpace(spacesForRent)}
                        coordinate={{ latitude: spacesForRent.latitude, longitude: spacesForRent.longitude }}
                        title={spacesForRent.title}
                        description={spacesForRent.estatus}
                    >
                    </Marker>    
                     
                ))}
                
                <Circle
                    radius={15}
                    strokeWidth={3}
                    strokeColor='#00ab41'
                    fillColor='rgba(128, 255, 128, 0.2)'
                    //center={{latitude:18.851441957249275, longitude:-99.20081563433325}}
                    center={{longitude:selectedSpace.longitude,latitude:selectedSpace.latitude}}
                /> 
            </MapView>
            {/*Para seleccionar el espacio en renta */}
            {selectedSpace && <EspaciosList spacesForRent={selectedSpace} />}
        </View>

        </View>
    )
}

export default Renta;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#129E9E',
    },
    header: {
        backgroundColor: '#00C89F',
        padding: 10,
        alignItems: 'center',
    },
    titulo: {
        fontFamily: 'san-serif',
        fontWeight: 'bold',
        fontSize: 35,
    },
    mapView: {
        width: '100%',
        height: '100%'
    },
})