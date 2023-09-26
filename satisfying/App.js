import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screens/Login';
import NovaConta from './src/screens/NovaConta';
import EsqueciSenha from './src/components/EsqueciSenha';
import Home from './src/components/Home';


const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerTintColor: '#573fba',
        headerTitleStyle: {
          fontSize: 29,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#2B1D62',
        }
      }}>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Nova Conta' component={NovaConta} />
        <Stack.Screen name='Recuperação de senha' component={EsqueciSenha} />
        <Stack.Screen name='Home' component={Home}
          options={{/*headerShown: false*/ }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
