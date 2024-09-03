
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, View, Image } from "react-native";
import { Text, } from '@rneui/themed';
import { Button } from '@rneui/themed';
import Styles from './Styles';
import Signin from '../sign-in/Signin';
import Login from '../login/Login';

const LogHome = ({ navigation }) => {

    return (

        <SafeAreaView style={Styles.container}>
            <Image source={require('../../../res/img/MesaVIP/imagens.png')} /> 
            <View style={Styles.containerStyle}>
                <Button
                    title="REGISTRE-SE"
                    buttonStyle={Styles.buttonStyles}
                    titleStyle={{
                        fontWeight: 'bold',
                        color: 'black', fontSize: 13,
                    }}
                    onPress={() => navigation.navigate(Signin)}
                />
                <Button
                    title="ENTRAR"
                    buttonStyle={Styles.button2Styles}
                    titleStyle={{ fontWeight: 'bold', color: 'black', fontSize: 13 }}
                    onPress={() => navigation.navigate(Login)}
                />
            </View>



        </SafeAreaView>

    );

}
export default LogHome

