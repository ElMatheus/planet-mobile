import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

export default function Management() {
    return (
        <LinearGradient
            colors={['#1a1733', '#201841']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <View style={styles.pageDetails}>
                <View style={styles.containerInfo}>
                    <Text style={styles.title}>Gerenciamento de Mundos</Text>
                    <Text style={styles.txt}>Bem-vindo ao centro de controle intergaláctico! Aqui, você tem o poder de moldar o universo ao seu gosto.</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTxt}>Adicionar Mundo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerInserts}>
                <TextInput style={styles.cardInput} placeholder="Nome do Mundo" />
                <TextInput
                    style={styles.cardInput}
                    keyboardType='numeric'
                    placeholder="Data de Conquista"
                />
                <TextInput style={styles.cardInput} placeholder="Nome do Mundo" />
            </View>
            
        </LinearGradient>
    )
}