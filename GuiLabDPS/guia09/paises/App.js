import React,{useState, useEffect} from "react";
import {StyleSheet,Text,View,Alert} from "react-native";
import Formulario from "./components/Formulario"
import Pais from "./components/Pais"

export default function App(){
  const [busqueda,guardarBusqueda] = useState({pais:""})
  const [consultar,guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});

  useEffect(() => {
    const {pais} = busqueda;
    const consultarPais = async () => {
      if(consultar){
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`
        try{
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado(resultado);
          guardarconsultar(false);
        }catch(error){
          mostrarAlerta();
        }
      }
    }
    consultarPais();
  },[consultar]);

  const mostrarAlerta = () => {
    Alert.alert("error","No hay resultado intenta con otra ciudad o pais"),
    [{Text:"ok"}]
  }

  return(
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} guardarconsultar={guardarconsultar}/>
        <Pais resultado={resultado}></Pais>
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({

  app:{
    flex:1,
    backgroundColor: "rgb(71,149,212)",
    justifyContent: "center",
  },
  contenido:{
    margin: "2.5%",
  }
})