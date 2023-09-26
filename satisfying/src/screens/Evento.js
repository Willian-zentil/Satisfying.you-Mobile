import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import ViewBlue from '../components/ViewBlue'
import coleta from '../../assets/image/coleta.png'
import modificar from '../../assets/image/modificar.png'
import relatorio from '../../assets/image/relatorio.png'



function Evento() {
    return (
        <ViewBlue>
            <SafeAreaView>
                <ScrollView horizontal={true}>
                    <View style={eventoStyle.viewAcoes}>
                        <Image
                            style={eventoStyle.imgColeta}
                            source={modificar}
                        />
                        <Text style={eventoStyle.text}>Modificar</Text>
                    </View>

                    <View style={eventoStyle.viewAcoes}>
                        <Image
                            style={eventoStyle.imgColeta}
                            source={coleta}
                        />
                        <Text style={eventoStyle.text}>Coletar dados</Text>
                    </View>

                    <View style={eventoStyle.viewAcoes}>
                        <Image
                            style={eventoStyle.imgColeta}
                            source={relatorio}
                        />
                        <Text style={eventoStyle.text}>Relatório</Text>
                    </View>
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