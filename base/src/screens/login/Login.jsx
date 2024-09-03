import React, { useState } from "react";
import { StatusBar, SafeAreaView, View, Alert, ScrollView, TouchableOpacity } from "react-native";
import { Text, } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import Styles from './Styles';
import axios from 'axios';
import Signin from "../sign-in/Signin";
import HomeP from "../home/Home";
import { HelperText, TextInput } from 'react-native-paper';

const Login = ({ navigation }) => {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);

    const hasErrors = () => {
        return !text.includes('@');
    };

    const handleResetSenha = () => {
        navigation.navigate('Reset');
    }
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {

            //verificar se os campos foram preenchidos

            if (!email || !senha) {
                Alert.alert('Preencha todos os campos')
                return;
            }

            //Objetivo para enviar para a API
            const data = {
                email: email.toLowerCase(),
                senha: senha
            }

            //Envio dos dados para a API

            const response = await axios.post('http://10.0.2.2:8085/api/validation', data);

            //Verificar se o login foi efetuado com sucesso

            if (response.status === 200) {
                setEmail('');
                setSenha('');
                const userData = {
                    id:response.data.id,
                    nome:response.data.nome,
                    sobrenome:response.data.sobrenome,
                    email:response.data.email,
                    senha:response.data.senha,
                    imagem:response.data.imagem
                }
                navigation.navigate('Home', {userData});
            }
            else {
                Alert.alert('Email ou senha incorretos')
            }

        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert('Email ou senha incorretos ')


            }

            else {
                console.log(error)
                Alert.alert('Ocorreu um erro ao tentar fazer login')
            }
        };

        const [dados, setDados] = useState([]);

        useEffect(()=>{
            axios.get("http://10.0.2.2:8085/api/read")
            .then(response =>{
                //Ordenar os dados pelo id em ordem crescente
                //setDados(sortData);
                console.log(response.data)
    
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });
        },[]);

    };
    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar hidden />

            <ScrollView>

                <View style={Styles.loginDiv}>
                    <Text style={Styles.text1}>
                        LOG-IN
                    </Text>
                    <Text style={Styles.text2}>
                        Entre para continuar
                    </Text>

                    <Input style={Styles.EmailStyle}
                        placeholder='EMAIL:'
                        placeholderTextColor={'black'}
                        onChangeText={setEmail}
                        value={email.toLowerCase()}
                        keyboardType="email-address" 
                    />

                    <Input
                        style={Styles.senhaStyle}
                        placeholder='SENHA:'
                        placeholderTextColor={'black'}
                        onChangeText={setSenha}
                        value={senha}
                        secureTextEntry
                    />

                    <View style={Styles.containerStyleBtn}>
                        <Button
                            title="ENTRAR"
                            loading={false}
                            loadingProps={{ size: 'small', color: 'black' }}
                            buttonStyle={Styles.buttonStyle}
                            titleStyle={{ fontWeight: 'bold', fontSize: 21, color:'black' }}
                            onPress={handleLogin}
                        />
                    </View>
                    <TouchableOpacity onPress={handleResetSenha}>
                        <Text style={Styles.resetSenha}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <View style={Styles.btmTextView}>

                        <Text style={Styles.textBottom}>Não tem uma conta?</Text>

                        <Button
                            title="Crie uma"
                            loading={false}
                            loadingProps={{ size: 'small', color: 'black' }}
                            buttonStyle={Styles.textBTM}
                            titleStyle={{ color: '#00B0FB', fontWeight: 'bold', fontSize: 14 }}
                            onPress={() => navigation.navigate('Signin')}
                        />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;