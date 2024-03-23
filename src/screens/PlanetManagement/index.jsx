import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { TriangleColorPicker, toHsv } from 'react-native-color-picker';
import styles from './styles';

export default function Management() {
    const [color, setColor] = useState(toHsv('red'));

    const onColorChange = (color) => {
        setColor(color);
    }

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
            <ScrollView >
                <View style={styles.containerInserts}>

                    <Text style={styles.titleInserts}>Informações sobre o Mundo</Text>
                    <View style={styles.containerInfoWorld}>
                        <TextInput style={styles.cardInput} placeholder="Nome do Mundo" />
                        <TextInput
                            style={styles.cardInput}
                            keyboardType='numeric'
                            placeholder="Data de Conquista"
                        />
                        <TextInput
                            style={styles.cardInput}
                            keyboardType='numeric'
                            placeholder="População do Planeta"
                        />
                    </View>
                    <Text style={styles.titleInserts}>Localização do Mundo</Text>
                    <View style={styles.containerInfoWorld}>
                        <TextInput style={styles.cardInput} placeholder="Galáxia" />
                        <TextInput style={styles.cardInput} placeholder="Sistema Solar" />
                        <TextInput style={styles.cardInput} placeholder="Coordenadas Espaciais" />
                    </View>
                    <Text style={styles.titleInserts}>Governante do Planeta</Text>
                    <View style={styles.containerInfoWorld}>
                        <TextInput style={styles.cardInput} placeholder="Nome" />
                        <TextInput style={styles.cardInput} placeholder="Título" />
                    </View>
                    <Text style={styles.titleInserts}>Cores do Planeta</Text>
                    <View style={styles.containerInfoWorld}>
                        <View style={styles.cardInputColor}>
                            <Text style={styles.txtInp}>
                                Selecione a cor primária do Mundo
                            </Text>
                            <TriangleColorPicker
                                oldColor="purple"
                                color={color}
                                onColorChange={onColorChange}
                                onColorSelected={(color) => alert(`Color selected: ${color}`)}
                                onOldColorSelected={(color) => alert(`Old color selected: ${color}`)}
                                style={styles.inpColor}
                            />
                        </View>
                        <View style={styles.cardInputColor}>
                            <Text style={styles.txtInp}>
                            Selecione a cor secundária do Mundo
                            </Text>
                            <TriangleColorPicker
                                oldColor="purple"
                                color={color}
                                onColorChange={onColorChange}
                                onColorSelected={(color) => alert(`Color selected: ${color}`)}
                                onOldColorSelected={(color) => alert(`Old color selected: ${color}`)}
                                style={styles.inpColor}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>


        </LinearGradient>
    )
}