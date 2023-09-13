import { Card, Image } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';



export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      
      <view style={{display:"grid", alignContent:"center",alignItems:"center"}}>
        <Card>
          <View style={styles.row}>
            <Image style={styles.Image} resizeMode="cover" source={{uri:'https://surfcityelsalvador.sv/wp-content/uploads/2023/01/9-9-2022-1024x679.jpg'}}/>
            <View>
              <Text style={{color:"blue",fontStyle:"italic",fontWeight:"bold", fontSize:24,paddingTop:32}}>Pupusas</Text>
              <Text style={{fontSize:14,fontWeight:"bold"}}>Calorias: 256 cada 100 gramos </Text>
            </View>
          </View>
          
        </Card>
      </view>
      


      <view style={{position:"relative",alignItems:"center"}}>
        <Card>
          <View style={styles.row}>
            <Image style={styles.Image} resizeMode="cover" source={{uri:'https://surfcityelsalvador.sv/wp-content/uploads/2023/01/Gastronomia-RESTAURANT-RELAJO-ZR-07102022-CD-6-1024x683.jpg'}}/>
            <View>
              <Text style={{color:"blue",fontStyle:"italic",fontWeight:"bold", fontSize:24,paddingTop:32}}>Tamales</Text>
              <Text style={{fontSize:14,fontWeight:"bold"}}>150 calorías por cada 100 gramos</Text>
            </View>
          </View>
          
        </Card>
      </view>
      


      <view style={{display:"grid", alignContent:"center",alignItems:"center"}}>
        <Card>
          <View style={styles.row}>
            <Image style={styles.Image} resizeMode="cover" source={{uri:'https://surfcityelsalvador.sv/wp-content/uploads/2023/01/Gastronomia-RESTAURANT-RELAJO-ZR-07102022-CD-28-1024x683.jpg'}}/>
            <View>
              <Text style={{color:"blue",fontStyle:"italic",fontWeight:"bold", fontSize:24,paddingTop:32}}>Empanadas</Text>
              <Text style={{fontSize:14,fontWeight:"bold"}}>Calorias: 293 cada 100 gramos </Text>
            </View>
          </View>
          
        </Card>
      </view>
      


      <view style={{display:"grid", alignContent:"center",alignItems:"center"}}>
        <Card>
          <View style={styles.row}>
            <Image style={styles.Image} resizeMode="cover" source={{uri:'https://surfcityelsalvador.sv/wp-content/uploads/2023/01/Yuca-Frita-1-1024x683.jpg'}}/>
            <View>
              <Text style={{color:"blue",fontStyle:"italic",fontWeight:"bold", fontSize:24,paddingTop:32}}>Yuca Frita</Text>
              <Text style={{fontSize:14,fontWeight:"bold"}}>Calorias: 108 cada 100 gramos </Text>
            </View>
          </View>
          
        </Card>
      </view>
      


      <view style={{display:"grid", alignContent:"center",alignItems:"center"}}>
        <Card>
          <View style={styles.row}>
            <Image style={styles.Image} resizeMode="cover" source={{uri:'https://surfcityelsalvador.sv/wp-content/uploads/2023/01/Gastronomia-RESTAURANT-RELAJO-ZR-07102022-CD-15-1024x716.jpg'}}/>
            <View>
              <Text style={{color:"blue",fontStyle:"italic",fontWeight:"bold", fontSize:24,paddingTop:32}}>Pastelitos</Text>
              <Text style={{fontSize:14,fontWeight:"bold"}}>Calorias: 160 calorías cada 100 gramos  </Text>
            </View>
          </View>
          
        </Card>
      </view>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image:{
    width: 120,
    height: 120,
    margin: 10,
  },
  item:{
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
  row:{
      flexDirection: 'row',
      marginBottom: 8,
      marginTop: 8,
    },
  alinear:{
      alignItems:"center"
    }
   
});
