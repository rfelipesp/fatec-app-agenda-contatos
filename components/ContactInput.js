import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const ContactInput = (props) => {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    return (
        <View style={estilos.contactView}>
            <TextInput
                placeholder="Nome"
                style={estilos.contactTextInput}
                onChangeText={(t) => setNome(t)}
                value={nome}
            />
            <TextInput
                placeholder="Telefone"
                style={estilos.contactTextInput}
                onChangeText={(t) => setTelefone(t)}
                value={telefone}
            />
            <View style={estilos.botao}>
                <Button
                    title="Adicionar Contato"
                    onPress={() => {
                        props.onAdicionarContato(nome, telefone);
                        setNome('');
                        setTelefone('');
                    }}
                    />
            </View>
            <View style={estilos.botao}>
                <Button
                    title="Limpar Contatos"
                    onPress={() => { props.onApagarTudo() }}
                    />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    contactTextInput: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
    },

    contactView: {
        marginBottom: 8,
        alignItems: 'center'

    },

    botao: {
        width: '100%',
        marginTop: 8
    }
});

export default ContactInput;