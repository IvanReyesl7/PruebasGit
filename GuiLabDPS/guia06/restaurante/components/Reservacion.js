import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const Cita = ({ item, eliminarPaciente }) => {
  const dialogoEliminar = (id) => {
    console.log("eliminando ...", id);
    eliminarPaciente(id);
  };

  return (
    <View style={styles.reservacion}>
      <View>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.label}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Fumador:</Text>
        <Text style={styles.label}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Numero de contacto:</Text>
        <Text style={styles.label}>{item.telefono}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora de reserva:</Text>
        <Text style={styles.label}>{item.fecha}</Text>
      </View>
      <View>
        <Text style={styles.label}>Fecha de reserva:</Text>
        <Text style={styles.label}>{item.hora}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(item.id)}
          style={styles.btnEliminar}
        >
          <Text style={styles.textoEliminar}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reservacion: {
    backgroundColor: "#FFF",
    borderBottomColor: "#E1E1E1",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: "red",
    marginVertical: 10,
  },
  textoEliminar: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cita;