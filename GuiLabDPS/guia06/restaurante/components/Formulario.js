import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'react-id-generator';


const Formulario = ({
  citas,
  setCitas,
  guardarMostrarForm,
  guardarCitasStorage,
}) => {
  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [fecha, guardarFecha] = useState("");
  const [hora, guardarHora] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
    guardarFecha(date.toLocaleDateString('es-SV', opciones));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = (hora) => {
    const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
    guardarHora(hora.toLocaleString('es-SV', opciones));
    hideTimePicker();
  };

  const crearNuevaCita = () => {
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === ''
    ) {
      mostrarAlerta();
      return;
    }

    const cita = { paciente, propietario, telefono, fecha, hora };
    cita.id = shortid();

    const citasNuevo = [...citas, cita];
    setCitas(citasNuevo);

    guardarCitasStorage(JSON.stringify(citasNuevo));

    guardarMostrarForm(false);

    guardarPropietario('');
    guardarPaciente('');
    guardarHora('');
    guardarFecha('');
    guardarTelefono('');
  };

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Todos los campos son obligatorios {' + '}',
      [{ text: 'OK' }]
    );
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarPaciente(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Eres Fumador?:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarPropietario(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Telefono contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarTelefono(texto)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha Reserva:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            local="es-sv"
            headerTextIOS="Elija la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora Reserva:</Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            local="es-sv"
            headerTextIOS="Elija la hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hora}</Text>
        </View>
        
        <View>
          <TouchableHighlight
            onPress={() => crearNuevaCita()}
            style={styles.btnSubmit}>
            <View>
              <Text style={styles.textoSubmit}>Programar Reserva</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 0,
    height: 30,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#393E46",
    marginVertical: 10,
  },
  textoSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Formulario;
