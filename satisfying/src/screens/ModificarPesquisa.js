import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ViewBlue from '../components/ViewBlue'
import Textlabel from '../components/Textlabel'
import Button from '../components/Button'
import ViewBtn from '../components/ViewBtn'
import ViewInput from '../components/ViewInput'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import { doc, updateDoc } from 'firebase/firestore'




function ModificarPesquisa(props) {

    const [modalVisible, setModalVisible] = useState(false);


    const goToHome = () => {
        props.navigation.navigate('Home')
    }


    return (
        <ViewBlue>
            <View style={modalVisible && { opacity: .1 }}>
                <Textlabel text='Nome' />
                <TextInput style={modificarPesquisa.textInput} placeholder={'Evento 2023'} placeholderTextColor="#3F92C5"></TextInput>

                <ViewInput>
                    <Textlabel text='Data' />
                    <Icon style={modificarPesquisa.icon} name="event" size={35} color="#999999"></Icon>
                    <TextInput style={modificarPesquisa.textInput} type={'data'} placeholder={'20/11/2023'} placeholderTextColor="#3F92C5"></TextInput>
                </ViewInput>

                <View style={modificarPesquisa.viewIcon}>
                    <Textlabel text='Imagem' />
                    <TextInput style={modificarPesquisa.imageInput}></TextInput>
                    <Icon style={modificarPesquisa.iconChange} name="person" size={55} color="pink"></Icon>
                </View>

                <ViewBtn>
                    <View style={modificarPesquisa.viewBtn}>

                        <View style={modificarPesquisa.btn}>
                            <Button text='SALVAR' funcao={goToHome} />
                        </View>

                        <TouchableOpacity style={modificarPesquisa.viewBin} onPress={() => setModalVisible(true)}>
                            <Icon style={modificarPesquisa.iconTrash} name="delete-outline" size={35} color="#fff"></Icon>
                            <Text style={modificarPesquisa.textBin}>Apagar</Text>
                        </TouchableOpacity>
                    </View>
                </ViewBtn>
            </View>



            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={modificarPesquisa.view}>
                    <Text style={modificarPesquisa.text}>Tem certeza de apagar essa pesquisa?</Text>

                    <View style={modificarPesquisa.viewBtns}>
                        <TouchableOpacity style={modificarPesquisa.btnSim} onPress={goToHome}>
                            <Text style={modificarPesquisa.text}>SIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={modificarPesquisa.btnNao} onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                            <Text style={modificarPesquisa.text}>CANCELAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ViewBlue>
    )
}

const modificarPesquisa = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        fontSize: 28,
        paddingLeft: 15
    },
    iconTrash: {
        position: 'relative',
        left: 5
    },
    viewBin: {
        marginTop: 30,

    },
    textBin: {
        color: '#fff'
    },
    imageInput: {
        backgroundColor: '#fff',
        color: '#3F92C5',
        fontSize: 22,
        height: 100,
        width: 300,
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        top: 50,
        right: 10,
        zIndex: 1
    },
    iconChange: {
        position: 'absolute',
        left: 120,
        top: 55,
        zIndex: 1
    },
    viewIcon: {
        position: 'relative'
    },
    view: {
        backgroundColor: '#2B1F5C',
        position: 'absolute',
        top: 200,
        left: 50,
        zIndex: 1,
        width: 300,
        height: 200,
        color: '#fff',
        paddingTop: 40
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    viewBtns: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 20
    },
    btnSim: {
        backgroundColor: '#FF8383',
        width: 120,
        height: 40,
        marginRight: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnNao: {
        backgroundColor: '#3F92C5',
        width: 120,
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ModificarPesquisa