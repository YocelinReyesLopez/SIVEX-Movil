
import { StyleSheet, View, Alert, Text, TextInput, ScrollView } from "react-native";

History = () => {
    return(
        <View style={{marginTop:35}}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Historial</Text>
            </View>
            <ScrollView vertical={true}>    
            <View style={styles.tabla}>
            <View style={styles.filaEncabezado}>
            <Text style={styles.celdaEncabezado}>Fecha</Text>
            <Text style={styles.celdaEncabezado}>Evento</Text>
            <Text style={styles.celdaEncabezado}>Espacio</Text>
            <Text style={styles.celdaEncabezado}>Precio</Text>
            </View>
            <View style={styles.fila}>
            <Text style={styles.celda}>12/01/24</Text>
            <Text style={styles.celda}>Danza</Text>
            <Text style={styles.celda}>Pequeño</Text>
            <Text style={styles.celda}>1200</Text>
            </View>
            <View style={styles.fila}>
            <Text style={styles.celda}>12/01/24</Text>
            <Text style={styles.celda}>Danza</Text>
            <Text style={styles.celda}>Pequeño</Text>
            <Text style={styles.celda}>1200</Text>
            </View>
            </View>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
      header: {
        backgroundColor: '#00C89F',
        padding: 25,
        alignItems: 'center',
        },
        titulo: {
          fontFamily:'Arial',
          fontWeight: 'bold',
          fontSize:35,
        },
        filaEncabezado: {
            flexDirection: 'row',
            backgroundColor: '#f2f2f2',
          },
          celdaEncabezado: {
            flex: 1,
            padding: 10,
            textAlign: 'center',
            fontWeight: 'bold',
          },
          fila: {
            flexDirection: 'row',
          },
          celda: {
            flex: 1,
            padding: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            textAlign: 'center',
          },
          tabla: {
            borderWidth: 1,
            borderColor: '#ddd',
            margin: 10,
            flex:1
          },
})

export default History;