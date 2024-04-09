import { Button, Card, Image} from "@rneui/base";
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { StyleSheet, View, Alert, Text, TextInput, ScrollView } from "react-native";

EventosAdmin = () => {

    return(
      <ScrollView>
        <View style={{marginTop:35}}>
             <View style={styles.header}>
                <Text style={styles.titulo}>Eventos</Text>
            </View>
            <View>
                <Card>
                    <Card.Title>Evento: Harry pother</Card.Title>
                    <CardDivider/>
                    <View style={styles.contenedorPrincipal}>
                    <View style={styles.contenedorImagen}>
                    <Image style={styles.imagen} source={require('../../images/casasH.jpg')}/>
                    </View>
                    <View style={styles.contenedorTexto}>
                    <Text>Descripción: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore</Text>
                    </View>
                    </View>
                    <Button
                   buttonStyle={{margin:5, borderRadius:20}}
                    title={'Editar'}
                    color={'#129E9E'}
                    />
                    <Button
                    buttonStyle={{margin:5, borderRadius:20}}
                    title={'Eliminar'}
                    color={'#129E9E'}
                    />
                </Card>

                <Card>
                    <Card.Title>Evento: Danza floklorica</Card.Title>
                    <CardDivider/>
                    <View style={styles.contenedorPrincipal}>
                    <View style={styles.contenedorImagen}>
                    <Image style={styles.imagen} source={require('../../images/danza.jpg')}/>
                    </View>
                    <View style={styles.contenedorTexto}>
                    <Text>Descripción: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore</Text>
                    </View>
                    </View>
                    <Button
                   buttonStyle={{margin:5, borderRadius:20}}
                    title={'Editar'}
                    color={'#129E9E'}
                    />
                    <Button
                    buttonStyle={{margin:5, borderRadius:20}}
                    title={'Eliminar'}
                    color={'#129E9E'}
                    />
                </Card>

                <Card>
                    <Card.Title>Evento: Danza floklorica</Card.Title>
                    <CardDivider/>
                    <View style={styles.contenedorPrincipal}>
                    <View style={styles.contenedorImagen}>
                    <Image style={styles.imagen} source={require('../../images/danza.jpg')}/>
                    </View>
                    <View style={styles.contenedorTexto}>
                    <Text>Descripción: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore</Text>
                    </View>
                    </View>
                    <Button
                   buttonStyle={{margin:5, borderRadius:20}}
                    title={'Editar'}
                    color={'#129E9E'}
                    />
                    <Button
                    buttonStyle={{margin:5, borderRadius:20}}
                    title={'Eliminar'}
                    color={'#129E9E'}
                    />
                </Card>
            </View>           
        </View>
      </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#f2f2f200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        backgroundColor: '#D9D9D9',
        padding: 25,
        alignItems: 'center',
      },
      titulo: {
        fontFamily:'Arial',
        fontWeight: 'bold',
        fontSize:25,
      },
      button:{
        alignItems:'baseline',
        height:20,
        width:30,
        borderRadius:30,
        margin: 30
    },
    contenedorPrincipal: {
        flexDirection: 'row', // Alinear los subcontenedores en fila
        alignItems: 'center', // Centrar verticalmente los subcontenedores
        padding: 16,
      },
      contenedorImagen: {
        marginRight: 16, // Espacio entre la imagen y el texto
      },
      imagen: {
        width: 80, // Ajusta el ancho de la imagen según tus necesidades
        height: 80, // Ajusta la altura de la imagen según tus necesidades
      },
      contenedorTexto: {
        flex: 1, // Aprovechar el espacio disponible
      },
  });

  export default EventosAdmin;