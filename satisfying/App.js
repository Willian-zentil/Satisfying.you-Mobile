import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';
import EsqueciSenha from './src/screens/EsqueciSenha';
import Home from './src/screens/Home';
import NovaPesquisa from './src/screens/NovaPesquisa';
import Evento from './src/screens/Evento';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import Coleta from './src/screens/Coleta';
import Relatorio from './src/screens/Relatorio';
import Obrigado from './src/screens/Obrigado';
import Drawer from './src/screens/Drawer';



const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerTintColor: '#573fba',
        headerTitleStyle: {
          fontSize: 29,
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: '#2B1D62',
          height: 80
        }
      }}>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Nova Conta' component={NovaConta} />
        <Stack.Screen name='Recuperação de senha' component={EsqueciSenha} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Drawer' component={Drawer} options={{ headerShown: false }} />
        <Stack.Screen name='Nova pesquisa' component={NovaPesquisa} />
        <Stack.Screen name='Evento' component={Evento} />
        <Stack.Screen name='Modificar Pesquisa' component={ModificarPesquisa} />
        <Stack.Screen name='Coleta' component={Coleta} />
        <Stack.Screen name='Relatorio' component={Relatorio} />
        <Stack.Screen name='Obrigado' component={Obrigado} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
