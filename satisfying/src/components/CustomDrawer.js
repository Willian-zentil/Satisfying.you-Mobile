import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


function CustomDrawer(props) {
    return (
        <View style={styleDrawer.container}>
            <View style={styleDrawer.drawerHeader}>
                <Text style={styleDrawer.headerText}>usuario@dominio.com</Text>
                <View style={styleDrawer.headerDivider} />
            </View>
            <DrawerContentScrollView>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <View style={styleDrawer.drawerItem}>
                        <Icon name="description" size={30} color="#FFFFFF" />
                        <Text style={styleDrawer.drawerItemLabel}>Pesquisas</Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <View style={styleDrawer.drawerItem}>
                    <Icon name="logout" size={30} color="#FFFFFF" />
                    <Text style={styleDrawer.drawerItemLabel}>Sair</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styleDrawer = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B1F5C',
    },
    drawerHeader: {
        backgroundColor: '#2B1F5C',
        padding: 16,
    },
    headerText: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        marginTop: 15
    },
    headerDivider: {
        backgroundColor: 'white',
        height: 1,
        marginTop: 25,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        marginLeft: 30,
        marginBottom: 30
    },
    drawerItemLabel: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        marginLeft: 10,
    }
})

export default CustomDrawer