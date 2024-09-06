import HomeP from "./src/screens/home/Home";
import LogHome from "./src/screens/LogHome/LogHome";
import Login from "./src/screens/login/Login";
import Signin from "./src/screens/sign-in/Signin"
import ResetSenha from "./src/screens/reset/Reset";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResetInfo from "./src/screens/perfil/Perfil";

const Stack = createStackNavigator();

function App() {
  return (
    // <Meu Component/>

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="LogHome"
          component={LogHome}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#EDE6DB',
              height: 5
            }
          }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: 'MesaVIP',
            headerStyle: {
              backgroundColor: '#E3CFAF',
              height: 70
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 25,
              fontWeight: 800,

            },
            headerTitleAlign: 'center',

          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'MesaVIP',
            headerStyle: {
              backgroundColor: '#E3CFAF',
              height: 70,
            },
            headerTitleStyle: {

              color: 'black',
              fontSize: 25,
              fontWeight: 800,

            },
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeP}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Reset"
          component={ResetSenha}
          options={{
            title: 'MesaVIP',
            headerStyle: {
              backgroundColor: '#E3CFAF',
              height: 70,
            },
            headerTitleStyle: {

              color: '#E3CFAF',
              fontSize: 25,
              fontWeight: 800,

            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={ResetInfo}
          options={{
            title: 'EDITAR INFORMAÇÕES',
            headerStyle: {
              backgroundColor: '#E3CFAF',
              height: 70,
            },
            headerTitleStyle: {

              color: 'black',
              fontSize: 20,
              fontWeight: 800,

            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;

