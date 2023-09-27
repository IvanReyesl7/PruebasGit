import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import Cita from "./components/Reservacion";
import Formulario from "./components/Formulario";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "./utils/Colors";

const App = () => {
  const [citas, setCitas] = useState([]);
  const [mostrarForm, guardarMostrarForm] = useState(false);

  useEffect(() => {
    const obtenerCitasStorage = async () => {
      try {
        const citasStorage = await AsyncStorage.getItem("citas");
        if (citasStorage) setCitas(JSON.parse(citasStorage));
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCitasStorage();
  }, []);

  const eliminarPaciente = (id) => {
    const citasFiltradas = citas.filter((cita) => cita.id !== id);
    setCitas(citasFiltradas);
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  };

  const mostrarFormulario = () => guardarMostrarForm(!mostrarForm);

  const cerrarTeclado = () => Keyboard.dismiss();

  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem("citas", citasJSON);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
        <SafeAreaView>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Administrador de Reservas de Restaurante</Text>
            <View>
              <TouchableHighlight
                onPress={() => mostrarFormulario()}
                style={styles.btnMostrarForm}
              >
                <View>
                  <Text style={styles.textoMostrarForm}>
                    {mostrarForm ? "Cancelar Reserva" : "Crear Nueva Reserva"}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.contenido}>
            {mostrarForm ? (
              <>
                <Text style={styles.titulo}>Crear Nueva Reserva</Text>
                <Formulario
                  citas={citas}
                  setCitas={setCitas}
                  guardarMostrarForm={guardarMostrarForm}
                  guardarCitasStorage={guardarCitasStorage}
                />
              </>
            ) : (
              <>
                <Text style={styles.titulo}>
                  {citas.length > 0
                    ? "Administra tus reservas"
                    : "No hay reservas, agenda una"}
                </Text>
                <FlatList
                  style={styles.listado}
                  data={citas}
                  renderItem={({ item }) => (
                    <Cita item={item} eliminarPaciente={eliminarPaciente} />
                  )}
                  keyExtractor={(cita) => cita.id}
                />
              </>
            )}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  titulo: {
    color: "#FFF",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  contenido: {
    marginHorizontal: "2.5%",
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: Colors.BUTTON_COLOR,
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;