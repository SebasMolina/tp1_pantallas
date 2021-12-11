import React from "react";
import { View, Text, Button  } from "react-native";

export default function SecondScreen( {navigation} ) {
    goToFirstScreen = () => {
        console.log('Presiono el boton de la primer pantalla')
        navigation.navigate('FirstScreen')
    }
    
    goToThirdScreen = () => {
        console.log('Presiono el boton de la tercer pantalla')
        navigation.navigate('ThirdScreen')
    }

    const  volver = () => {
        console.log('vuelvo')
        navigation.goBack()
    }

    return(
        <View>
            <Text style={{ marginTop: 150, fontSize: 34 }}> SECOND SCREEN </Text>

            <Button title='VOLVER' onPress={() => volver()}/>
            
            <Button title='Primer Pantalla' onPress={() => goToFirstScreen()}/>
            
            <Button title='Tercer Pantalla' onPress={() => goToThirdScreen()}/>
            
        </View>
    )
}