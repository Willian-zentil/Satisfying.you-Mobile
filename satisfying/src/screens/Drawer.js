import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Home from "./Home";
import CustomDrawer from "../components/CustomDrawer";


const DrawerNavigator = createDrawerNavigator()

function Drawer(props) {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{ backgroundColor: "#2B1F5C" }}
      screenOptions={{
        drawerActiveTintColor: '#387392',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#2B1D62',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          display: 'none',
        }
      }}>
      <DrawerNavigator.Screen name="Home" component={Home} />
    </DrawerNavigator.Navigator>
  )
}

export default Drawer