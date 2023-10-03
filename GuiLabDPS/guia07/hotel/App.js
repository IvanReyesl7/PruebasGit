import React,{useState} from "react";
import {View,StyleSheet,Image,Text,ScrollView,Modal,Button,TouchableHighlight} from "react-native";

const App = () =>{
  const [modalVisibleHotel,setModalVisibleHotel] = useState(false);
  return(
    <>
      <ScrollView>
        <Modal transparent={true} animationType='slide' visible={modalVisibleHotel} onRequestClose={() =>{
          alert("Modal has been closed.");
        }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Hotel EL Mirador</Text>
              <Text>Hermoso Hotel Ubicado en San Salvador Cerca del Mirador</Text>
              <Button title="cerrar" onPress={()=>{setModalVisibleHotel(!modalVisibleHotel)}}></Button>
            </View>
          </View>
        </Modal>

        <Text style={styles.titulo}>Hotel El Mirador</Text>
        <View style={{flexDirection: "row"}}>
        
          <Image style={styles.banner} source={require("./img/mirador.jpg")}/>
        </View>

        <View style={styles.contenedor}>
          
          
          <Text style={styles.titulo}>Nuestros Servicios</Text>
          <ScrollView horizontal>

            <View>
              <Image style={styles.servicios}  source={require("./img/caminata.jpg")}/>
            </View>
            <View>
              <Image style={styles.servicios} source={require("./img/disco.jpg")} />
            </View>
            <View>
              <Image style={styles.servicios} source={require("./img/masaje.jpg")} />
            </View>
            <View>
              <Image style={styles.servicios}  source={require("./img/picina.jpg")}/>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <Text style={styles.titulo}>Nuestras Habitaciones</Text>
      <View>
        <View>
              <Image style={styles.mejores} source={require("./img/cuarto1.jpg")}  />
            </View>
            <View>
              <Image style={styles.mejores} source={require("./img/cuarto2.jpg")} />
            </View>
            <View>
              <Image style={styles.mejores}  source={require("./img/cuarto3.jpg")}/>
            </View>
            <View>
              <Image style={styles.mejores}  source={require("./img/cuarto4.jpg")}/>
            </View>
      </View>

      <Text style={styles.titulo}>Rutas De Interes</Text>
      <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require("./img/LagranVia.jpg")} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores}  source={require("./img/Picnic.jpg")}/>
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores}  source={require("./img/volcan.jpg")}/>
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores}  source={require("./img/antiguo.jpg")}/>
            </View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  titulo:{
    fontWeight: "bold",
    fontSize:24,
    marginVertical:10,
  },
  contenedor:{
    marginHorizontal:10,
  },
  servicios:{
    width: 250,
    height:300,
    marginRight:10,
  },
  mejores:{
    width: "%100",
    height: 200,
    marginVertical: 5,
  },
  listaItem:{
    flexBasis: "49%",
  },
  listado:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vistaModal:{
    backgroundColor: "#000000aa",
    flex: 1,
  },
  Modal:{
    backgroundColor: "#fff",
    margin:50,
    padding:40,
    borderRadius: 10,
  },
  subtitulo:{
    fontWeight: "bold",
    fontSize:14,
    justifyContent: "center",
  }
})



export default App;