import { Text } from "@rneui/base";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";

Service = () =>{
    return(
        <View style={{marginTop:35}}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Servicios</Text>
            </View>
            <ScrollView vertical={true}>    
            <View style={styles.tabla}>
            <View style={styles.filaEncabezado}>
            <Text style={styles.celdaEncabezado}>#</Text>
            <Text style={styles.celdaEncabezado}>servicio</Text>
            <Text style={styles.celdaEncabezado}>acciones</Text>
          
            </View>
            <View style={styles.fila}>
            <Text style={styles.celda}>1</Text>
            <Text style={styles.celda}>Televición</Text>
            <Text style={styles.celda}>Btns</Text>
            </View>
            <View style={styles.fila}>
            <Text style={styles.celda}>2</Text>
            <Text style={styles.celda}>Sillas</Text>
            <Text style={styles.celda}>Btns</Text>
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

export default Service;