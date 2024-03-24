import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { TriangleColorPicker, toHsv } from 'react-native-color-picker';

import Planet from '../../models/planet/Planet';
import repository from '../../models/planet/PlanetsRepository';


import styles from './styles';

export default function Management() {
    // info inputs
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [population, setPopulation] = useState('');
    // localização inputs
    const [galaxy, setGalaxy] = useState('');
    const [solarSystem, setSolarSystem] = useState('');
    const [coordinates, setCoordinates] = useState('');
    // governante inputs
    const [rulerName, setRulerName] = useState('');
    const [rulerTitle, setRulerTitle] = useState('');
    // cores inputs
    const [color1, setColor1] = useState('#000000');
    const [color2, setColor2] = useState('#000000');


    

    
    const handleAddPlanet = () => {
        const newPlanet = new Planet(name, description, date, population, galaxy, solarSystem, coordinates, rulerName, rulerTitle, color1, color2);
        repository.addPlanet(newPlanet);
        setName('');
        setDescription('');
        setDate('');
        setPopulation('');
        setGalaxy('');
        setSolarSystem('');
        setCoordinates('');
        setRulerName('');
        setRulerTitle('');
        setColor1('#000000');
        setColor2('#000000');
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
                        <Text onPress={handleAddPlanet} style={styles.buttonTxt}>Adicionar Mundo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView >
                <View style={styles.containerInserts}>

                    <Text style={styles.titleInserts}>Informações sobre o Mundo</Text>
                    <View style={styles.containerInfoWorld}>
                        <TextInput onChangeText={setName} value={name} style={styles.cardInput} placeholder="Nome do Mundo" />
                        <TextInput onChangeText={setDescription} value={description} style={styles.cardInput} placeholder="Descrição do Mundo" />
                        <TextInput
                            style={styles.cardInput}
                            keyboardType='numeric'
                            placeholder="Data de Conquista"
                            onChangeText={setDate}
                            value={date}
                        />
                        <TextInput
                            style={styles.cardInput}
                            keyboardType='numeric'
                            placeholder="População do Planeta"
                            onChangeText={setPopulation}
                            value={population}
                        />
                    </View>
                    <Text style={styles.titleInserts}>Localização do Mundo</Text>
                    <View style={styles.containerInfoWorld}>
                        <TextInput onChangeText={setGalaxy} value={galaxy} style={styles.cardInput} placeholder="Galáxia" />
                        <TextInput onChangeText={setSolarSystem} value={solarSystem} style={styles.cardInput} placeholder="Sistema Solar" />
                        <TextInput onChangeText={setCoordinates} value={coordinates} style={styles.cardInput} placeholder="Coordenadas Espaciais" />
                    </View>
                    <Text style={styles.titleInserts}>Governante do Planeta</Text>
                    <View style={styles.containerInfoWorld}>
                        <TextInput onChangeText={setRulerName} value={rulerName} style={styles.cardInput} placeholder="Nome" />
                        <TextInput onChangeText={setRulerTitle} value={rulerTitle} style={styles.cardInput} placeholder="Título" />
                    </View>
                    <Text style={styles.titleInserts}>Cores do Planeta</Text>
                    <View style={styles.containerInfoWorld}>
                        <View style={styles.cardInputColor}>
                            <Text style={styles.txtInp}>
                                Selecione a cor primária do Mundo
                            </Text>
                            <TriangleColorPicker
                                oldColor="purple"
                                color={color1}
                                onColorChange={setColor1}
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
                                color={color2}
                                onColorChange={setColor2}
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