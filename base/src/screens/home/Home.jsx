import * as React from 'react';
import { SafeAreaView, ScrollView, View, Image, Alert, TouchableOpacity, FlatList,} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from 'galio-framework';
// import mainCardIMG from '../../../res/img/MesaVIP/home.png';
import { ProgressCircle } from 'react-native-svg-charts'
import { Modal, Portal, PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, Text, LeftContent, RightContent, ProgressBar, MD3Colors, TextInput, SegmentedButtons} from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { IconButton, } from 'react-native-paper';
import styles from './Styles';
import { useState, useEffect, } from "react";

import axios from 'axios';

function HomeScreen({ navigation, route }) {
  const { id, nome, sobrenome, email, senha, imagem } = route.params.obj;
  const sampleNews = [
    {
      image: 'https://i.pinimg.com/564x/3f/de/59/3fde59c1d9ae5d1285e4786be81b7152.jpg',
    },
    {
      image: 'https://i.pinimg.com/736x/18/2f/55/182f55abd1b3ab47c85bcb8abaa4c988.jpg',
    },
    {
      image: 'https://i.pinimg.com/564x/3d/46/74/3d467426e5ad3f306e8104b4a7df0cff.jpg',
    },
    {
      image: 'https://i.pinimg.com/564x/1f/0f/ee/1f0fee613c3000d6df53e7e1b52d7a84.jpg',
    },

  ];

  const PaginaHome = ({ navigation }) => {
    const handlePress = (imageName) => {
      navigation.navigate('Pagina', { imageName });

    };

    return (

      <View style={styles.container}>
        <ScrollView>

          <Card style={styles.mainCard}>
            {/* <Card.Cover source={mainCardIMG} style={styles.mainCardIMG} /> */}
            <Card.Content style={styles.TextMainCardCont}>
              <Text style={styles.MainCardText1} variant="titleMedium">Olá, seja bem-vindo ao MesaVIP, {nome} {sobrenome}</Text>
            </Card.Content>
            <Card.Content style={styles.TextMainCardCont2}>
            </Card.Content>
            <Card.Actions>
            </Card.Actions>
          </Card>

          <View style={styles.Title}>
            <Text style={styles.TitleText}>RESTAURANTES:</Text>
          </View>
          {/* inicio do codigo da nery */}
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

              <FlatList
                data={sampleNews}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.cardImage} />
                  </View>
                )}
                showsHorizontalScrollIndicator={false}
                style={styles.cardList}
              />
              <View style={styles.tabela}>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image1')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image1.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image2')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image2.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image3')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image3.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image4')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image4.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image5')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image5.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image6')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image6.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image7')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image7.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image8')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image8.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.roundBackground} onPress={() => handlePress('image9')}>
                  <Image
                    source={require('../../../res/img/MesaVIP/image9.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {/* fim do codigo da nery */}
          {/* codigo card noticia */}
          {/*
        <Card style={styles.newsCard}>
          <Card.Cover style={styles.newsIMG} source={newsimgg3} />
          <Card.Content style={styles.newsTitle}>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Acompanhe as principais noticias do mundo maromba</Text>
            <Text variant="bodyMedium">Veja o que está acontecendo de novo no mundo fitness agora mesmo</Text>
          </Card.Content>
          <Card.Actions>
            <Button color='black' mode='outilined' textColor='black' onPress={() => navigation.navigate('Noticias')} >Ver noticias</Button>
          </Card.Actions>
        </Card> */}
        </ScrollView>
      </View>

    );
  }
}
//treinos
function WorkoutScreen({ route }) {
  const { id } = route.params.obj;
  const [workoutType, setWorkoutType,] = React.useState('');
  const [workoutFrequency, setWorkoutFrequency,] = React.useState('');

  const [mensagem, setMensagem] = useState('')
  const [formData, setFormData] = React.useState({
    exerciciosInput: '',

  });

  const data = {
    workoutType: workoutType,
    exerciciosInput: formData.exerciciosInput,
    workoutFrequency: workoutFrequency,
    id_usuario: id
  }

  console.log(data);

  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // console.log('Tipo de treino: ' + workoutType);
  // console.log('Exercicios: ' + formData.exerciciosInput);
  // console.log('Frequencia de treinamento: ' + workoutFrequency);


  const handleInputChange = (name, value) => {
    setFormData({ ...value, [name]: value });
  };


  //validar se campos estão vazios

  const handleAddWorkout = async () => {
    if (!workoutType || !formData.exerciciosInput || !workoutFrequency) {
      setMensagem('Todos os campos são obrigatórios')
      return;
    }

    //envio de informações para a API cadastrar no banco de dados
    try {
      await axios.post('http://10.0.2.2:8085/api/addWorkout', data);
      Alert.alert('Treino adicionado com sucesso');
      setVisible(false)
    }
    catch (error) {
      console.log(error)

    }
  };

  const containerStyle = { backgroundColor: 'white', padding: 20, width: '100%', alignItems: 'center', justifyContent: 'center' };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View >
        <PaperProvider>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <Text style={styles.titleWorkout}>
                ADICIONAR NOVO TREINO
              </Text>

              <Text style={{ marginVertical: 5, fontWeight: 'bold', fontSize: 16 }}>
                Tipo de treino:
              </Text>
              <SegmentedButtons
                style={styles.workoutType}
                theme={{ colors: { secondaryContainer: 'black' } }}
                value={workoutType}
                onValueChange={value => setWorkoutType(value)} // Aqui, corrija para atualizar o estado 'value'
                buttons={[
                  {
                    value: 'Força',
                    label: 'Força',
                    checkedColor: 'white',
                    uncheckedColor: 'green',
                    showSelectedCheck: true,

                  },
                  {
                    value: 'Hipertrofia',
                    label: 'Hipertrofia',
                    checkedColor: 'white',
                    uncheckedColor: 'green',
                    showSelectedCheck: true,
                  },
                  {
                    value: 'Resistência',
                    label: 'Resistência',
                    checkedColor: 'white',
                    uncheckedColor: 'green',
                    showSelectedCheck: true,
                  },
                ]}
              />
              <TextInput
                style={styles.exerciciosInput}
                outlineColor='gray'
                mode='outlined'
                activeOutlineColor='black'
                placeholderTextColor='black'
                label="Exercicios"
                multiline


                value={formData.exerciciosInput}
                onChangeText={(text) => handleInputChange('exerciciosInput', text)}
              />

              <SegmentedButtons
                style={styles.workoutFrequency}
                theme={{ colors: { secondaryContainer: 'black' } }}
                value={workoutFrequency}
                onValueChange={value => setWorkoutFrequency(value)}
                buttons={[
                  {
                    value: 'Alta',
                    label: 'Alta (07-07)',
                    checkedColor: 'white',
                    uncheckedColor: 'green',
                    showSelectedCheck: true,

                  },
                  {
                    value: 'Média',
                    label: 'Média (05-07)',
                    checkedColor: 'white',
                    uncheckedColor: 'green',
                    showSelectedCheck: true,
                  },
                  {
                    value: 'Baixa',
                    label: 'Baixa (03-07)',
                    checkedColor: 'white',
                    uncheckedColor: 'green',
                    showSelectedCheck: true,
                  },
                ]}
              />

              <Button textColor='white' buttonColor="#46C03B" mode="outlined" style={{ marginTop: 20, width: 210, }} onPress={handleAddWorkout}>
                Adicionar treino
              </Button>
              {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
            </Modal>
          </Portal>
          <Button textColor='green' style={{ marginTop: 250, width: 420, }} onPress={showModal}>
            Adicione seu treino
          </Button>
        </PaperProvider>
      </View>

    </View>
  );
}
//perfil
function ProfileScreen({ navigation, route }) {


  let [img, setImg] = useState('');

  const { id, nome, sobrenome, email, senha, imagem } = route.params.obj;



  //acessar a câmera do celular
  const handleCameraLaunch = async () => {
    const options = {
      mediaType: 'photo',
    };

    try {
      const response = await launchCamera(options);
      console.log('pickedFile', response);

      // Verifica se a imagem foi capturada com sucesso
      if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];
        setImg(image)
        Alert.alert('Sua foto foi selecionada clique em confirmar -> (✔) para envia-la')
      } else {
        console.log('Nenhuma imagem capturada.');
      }
    } catch (error) {
      console.error('Erro ao capturar a imagem:', error);
    }
  };

  const handleSendPicture = async () => {
    try {

      // Lê o arquivo da imagem como base64
      const imageData = await RNFS.readFile(img.uri, 'base64');

      // Configuração da requisição Axios
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // URL da sua API para enviar os dados e a imagem
      const data = {
        id: id,
        imagemBase64: imageData,
      };

      const apiUrl = 'http://10.0.2.2:8085/api/registerImage';

      // Dados a serem enviados para a API

      // Envia os dados e a imagem para a API usando Axios
      const response = await axios.post(apiUrl, data, config);
      console.log('Resposta da API:', response.data);

      // Retorna para a página inicial
      Alert.alert('Foto alterada com sucesso \n (Entre novamente para vizualiza-la)')
      navigation.navigate('Login')
    } catch (error) {
      console.error('Erro ao enviar os dados e a imagem para a API:', error);

    }
  };

  //Acessar a biblioteca de imagens do celular
  const handleImageLibraryLaunch = async () => {
    const options = {
      mediaType: 'photo',
    };

    try {
      const response = await launchImageLibrary(options);
      console.log('pickedFile', response);

      // Verifica se a imagem foi selecionada com sucesso
      if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];
        Alert.alert('Sua foto foi selecionada clique em confirmar para envia-la')
        setImg(image);
      } else {
        console.log('Nenhuma imagem selecionada.');
      }
    } catch (error) {
      console.error('Erro ao selecionar a imagem:', error);
    }
  };

  const noPIC = 'https://i.pinimg.com/736x/65/1c/6d/651c6da502353948bdc929f02da2b8e0.jpg'

  const imagemUri = imagem ? `data:image/jpeg;base64,${imagem}` : img;
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20, alignItems: 'center', justifyContent: 'center' };
  return (
    <View style={{ flex: 1, height: 'auto' }}>
      <ScrollView>
        <View style={styles.avatarView}>
          <Avatar.Image size={200} source={{ uri: imagemUri }}
            style={styles.avatar}
            theme={{ colors: { primary: 'black' } }}

          />

          <View style={styles.viewProfPic}>

            <IconButton
              icon="camera"
              iconColor={'black'}
              size={25}
              onPress={handleCameraLaunch}
            />

            <IconButton
              icon="camera-burst"
              iconColor={'black'}
              size={25}
              onPress={handleImageLibraryLaunch}
            />

            <IconButton
              icon="check"
              iconColor={'black'}
              size={25}
              onPress={handleSendPicture}
            />
          </View>
        </View>

        <View style={styles.editProfile}>
          <Button textColor='black' onPress={() => navigation.navigate('Perfil', { id })}>Editar</Button>
        </View>

        <View style={styles.UserInfoView}>
          <TextInput mode='outlined' style={styles.userInfo} label={nome} disabled />
          <TextInput mode='outlined' style={styles.userInfo} label={sobrenome} disabled />
          <TextInput mode='outlined' style={styles.userInfo} label={email} disabled />
          <TextInput mode='outlined' style={styles.userInfo} label={senha} disabled />
        </View>

        <View style={{ marginVertical: 15 }}>
          <Button textColor='black' onPress={() => navigation.navigate('Treino', { id })}>Reservas</Button>
        </View>
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeP({ navigation, route }) {
  const obj = route.params.userData;

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'TREINOS') {
            iconName = focused
              ? 'barbell'
              : 'barbell-outline';
          }
          else if (route.name === 'PERFIL') {
            iconName = focused
              ? 'body'
              : 'body-outline';
          }

          // Você pode devolver qualquer componente que desejar aqui!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        initialParams={{ obj }}
        options={{
          title: 'MesaVIP',
          headerStyle: {
            backgroundColor: '#E3CFAF',
            height: 75,

          },
          headerTitleStyle: {
            color: 'black',
            fontSize: 25,
            fontWeight: 800,

          },
          headerTitleAlign: 'center',
        }}

      />
      <Tab.Screen name="TREINOS" initialParams={{ obj }} component={WorkoutScreen} options={{
        title: 'TREINOS',

        headerStyle: {
          backgroundColor: '#E3CFAF',
          height: 75,

        },
        headerTitleStyle: {
          color: 'black',
          fontSize: 25,
          fontWeight: 800,

        },
        headerTitleAlign: 'center',
      }}

      />
      <Tab.Screen name="PERFIL" component={ProfileScreen} initialParams={{ obj }} options={{
        title: 'PERFIL',

        headerStyle: {
          backgroundColor: '#E3CFAF',
          height: 75,

        },
        headerTitleStyle: {
          color: 'black',
          fontSize: 25,
          fontWeight: 800,

        },
        headerTitleAlign: 'center',
      }}
      />
    </Tab.Navigator>

  );
};