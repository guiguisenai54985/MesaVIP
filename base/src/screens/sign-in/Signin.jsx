import React from "react";
import { StatusBar, SafeAreaView, View, ScrollView, Alert, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { Text, } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import Styles from './Styles';
import axios from 'axios';

export default function Signin({ navigation }) {
    const [mensagem, setMensagem] = useState('')
    const [formData, setFormData] = useState({
        id: '',
        email: '',
        nome: '',
        sobrenome: '',
        senha: '',
        imagem: ''
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    //validar se campos estão vazios

    const handleCadastrar = async () => {
        if (!formData.email || !formData.nome || !formData.sobrenome || !formData.senha) {
            setMensagem('Todos os campos são obrigatórios')
            return;
        }
        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/cadastro', formData);
            Alert.alert('Cadastro realizado com sucesso');

            setFormData('');

            navigation.navigate('Login')
        }
        catch (error) {
            console.log(error)
            if (error.response.status === 401) {
                setMensagem('O email ' + formData.email + ' já existe no banco de dados')
            }
            else {
                console.log(error)
            }
        }
    };
    return (
        <SafeAreaView style={Styles.container}>

            <ScrollView>

                <View style={Styles.loginDiv}>
                    <Text style={Styles.text1}>
                        Registre-se
                    </Text>
                    <Text style={Styles.text2}>
                        Registre-se para continuar
                    </Text>

                    <Input
                        style={Styles.nomeStyle}
                        placeholder='NOME:'
                        placeholderTextColor={'black'}
                        onChangeText={(text) => handleInputChange('nome', text)}
                        value={formData.nome}

                    />

                    <Input
                        style={Styles.sobrenomeStyle}
                        placeholder='SOBRENOME:'
                        placeholderTextColor={'black'}
                        onChangeText={(text) => handleInputChange('sobrenome', text)}
                        value={formData.sobrenome}

                    />

                    <Input
                        style={Styles.emailStyle}
                        placeholder='EMAIL:'
                        placeholderTextColor={'black'}
                        onChangeText={(text) => handleInputChange('email', text.toLowerCase())}
                        value={formData.email}
                    />

                    <Input
                        style={Styles.senhaStyle}
                        placeholder='SENHA:' placeholderTextColor={'black'}
                        onChangeText={(text) => handleInputChange('senha', text)}
                        value={formData.senha}
                    />

                    <View style={Styles.containerStyleBtn}>
                        <Button
                            title="Registrar-se"
                            loading={false}
                            loadingProps={{ size: 'small', color: 'black' }}
                            buttonStyle={Styles.buttonStyle}
                            titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
                            onPress={handleCadastrar}
                        />
                        {mensagem ? <Text style={Styles.mensagem}>{mensagem}</Text> : null}

                    </View>

                    <View style={Styles.btmTextView}>
                        <Text style={Styles.textBottom}>Já tem uma conta?</Text>
                        <Button
                            title="Entre"
                            loading={false}
                            loadingProps={{ size: 'small', color: 'black' }}
                            buttonStyle={Styles.textBTM}
                            titleStyle={{ color: '#00B0FB', fontWeight: 'bold', fontSize: 14, }}
                            onPress={() => navigation.navigate('Login')}
                        />

                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );

}

