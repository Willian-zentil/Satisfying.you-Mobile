import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = (props) => {

    const text = props.text

    return (
        <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
            <Text style={estilos.texto}>{text}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: '#37BD6D',
        marginVertical: 5,
        width: '100%'
    },
    texto: {
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 3
    },
})

export default Button