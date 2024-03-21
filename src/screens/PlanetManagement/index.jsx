import { View, Text, TouchableOpacity } from 'react-native'

export default function Management() {
    return (
        <View style={styles.container}>
            <View style={styles.pageDetails}>
                <Text>Gerenciamento de Mundos</Text>
                <Text>Bem-vindo ao centro de controle intergaláctico! Aqui, você tem o poder de moldar o universo ao seu gosto.
                    Adicione novos mundos exóticos com um toque, ou edite os existentes para refletir as mudanças cósmicas.</Text>
                <TouchableOpacity>
                    <Text>Adicionar Mundo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerInserts}>

            </View>
        </View>
    )
}