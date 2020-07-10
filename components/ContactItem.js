import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

const ContactItem = (props) => {
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(props.contato.key)}>
            <View style={estilos.itemNaLista}>
                <Text>Nome: {props.contato.nome}</Text>
                <Text>Telefone: {props.contato.telefone}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#EEE',
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 12,
        fontSize: 16,
        width: '100%',
        alignSelf: 'center'
    },
    textoItem: {
        color: '#c9c9c9',
        fontSize: 10
    }
});

export default ContactItem;