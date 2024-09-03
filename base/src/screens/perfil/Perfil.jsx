import React, { useState } from 'react';
import { View, Text, Alert, Image, Stylesheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import Styles from './Styles';
import { Input } from '@rneui/themed';

const ResetInfo = ({ navigation, route }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const id = route.params.id


    const handleTrocarInfo = async () => {
        try {
            //verificar se as senhas coincidem

            const data = {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                id: id
            }

            //fazer a solicitação para trocar a senha
            const response = await axios.post('http://10.0.2.2:8085/api/resetInfo', data);

            if (response.status === 200) {
                navigation.navigate('Login');
                Alert.alert("informações trocadas com sucesso");
            }
            else {
                Alert.alert('erro ao trocar as informações');
            }
        }
        catch (error) {
            Alert.alert('erro ao trocar aa informações', error);
        }
    };

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Editar sua informações</Text>

            <TextInput style={Styles.EmailStyle}
                placeholder='DIGITE SEU NOVO NOME:'
                placeholderTextColor={'black'}
                onChangeText={setNome}
                value={nome}
            />


            <TextInput style={Styles.EmailStyle}
                placeholder='DIGITE SEU NOVO SOBRENOME:'
                placeholderTextColor={'black'}
                onChangeText={setSobrenome}
            />


            <TextInput style={Styles.EmailStyle}
                placeholder='CONFIRME SEU NOVO EMAIL:'
                placeholderTextColor={'black'}
                onChangeText={setEmail}
            />

            <View style={Styles.containerBtn2}>

                <Button mode='outlined' textColor='black' style={Styles.button2Styles} onPress={handleTrocarInfo}>
                    Editar informações
                </Button>

            </View>


        </View>
    );
}


export default ResetInfo;
