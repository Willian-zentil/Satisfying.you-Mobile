import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import ViewBlue from '../components/ViewBlue'
import coleta from '../../assets/image/coleta.png'
import modificar from '../../assets/image/modificar.png'
import relatorio from '../../assets/image/relatorio.png'



function Evento(props) {

    const goToModificar = () => {
        props.navigation.navigate('Modificar Pesquisa')
    }

    const goToColeta = () => {
        props.navigation.navigate('Coleta')
    }

    const goToRelatorio = () => {
        props.navigation.navigate('Relatorio')
    }


    return (
        <ViewBlue>
            <SafeAreaView>
                <ScrollView horizontal={true}>
                    <TouchableOpacity style={eventoStyle.viewAcoes} onPress={goToModificar} >
                        <Image
                            style={eventoStyle.imgColeta}
                            source={modificar}
                        />
                        <Text style={eventoStyle.text}>Modificar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={eventoStyle.viewAcoes} onPress={goToColeta}>
                        <Image
                            style={eventoStyle.imgColeta}
                            source={coleta}
                        />
                        <Text style={eventoStyle.text}>Coletar dados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={eventoStyle.viewAcoes} onPress={goToRelatorio}>
                        <Image
                            style={eventoStyle.imgColeta}
                            source={relatorio}
                        />
                        <Text style={eventoStyle.text}>Relatório</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </ViewBlue>
    )
}

const eventoStyle = StyleSheet.create({
    imgColeta: {
        padding: 10
    },
    viewAcoes: {
        backgroundColor: '#312464',
        width: 180,
        height: 200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 30
    },
    text: {
        color: '#fff',
        fontSize: 26,
        marginTop: 10
    }
})

export default Evento