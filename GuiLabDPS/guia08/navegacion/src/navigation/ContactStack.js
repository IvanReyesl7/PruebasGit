import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Contact from "../screen/Contact";

const Stack = createStackNavigator();

export default function ContactStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="contact" component={Contact} options={{HeaderShown: false}}/>
    </Stack.Navigator>
  )
}