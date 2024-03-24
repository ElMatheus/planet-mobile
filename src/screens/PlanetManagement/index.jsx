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

    const [verificationsInp, setVerificationsInp] = useState([]);



    const handleAddPlanet = () => {

        if (verifications().length > 0) {
            setVerificationsInp(verifications);
        } else {
            const newPlanet = new Planet(name, description, date, population, galaxy, solarSystem, coordinates, rulerName, rulerTitle, color1, color2);
            repository.addPlanet(newPlanet);
            clearFields();
        }
    }

    const verifications = () => {
        const verifications = [];
        if (name == '') {
            verifications.push('nome');
        } else {
            verificationsInp.filter((element) => element != 'nome');
        }
        if (description == '') {
            verifications.push('desc');
        } else {
            verificationsInp.filter((element) => element != 'desc');
        }
        if (date == '') {
            verifications.push('date');
        } else {
            verificationsInp.filter((element) => element != 'date');
        }
        const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!datePattern.test(date) && date != '') {
            verifications.push('date2');
        } else {
            verificationsInp.filter((element) => element != 'date2');
        }
        if (population == '' || population < 0 || isNaN(population)) {
            verifications.push('pop');
        } else {
            verificationsInp.filter((element) => element != 'pop');
        }
        if (galaxy == '') {
            verifications.push('galaxy');
        } else {
            verificationsInp.filter((element) => element != 'galaxy');
        }
        if (solarSystem == '') {
            verifications.push('solarSystem');
        } else {
            verificationsInp.filter((element) => element != 'solarSystem');
        }
        if (coordinates == '') {
            verifications.push('coordinates');
        } else {
            verificationsInp.filter((element) => element != 'coordinates');
        }
        if (rulerName == '') {
            verifications.push('rulerName');
        } else {
            verificationsInp.filter((element) => element != 'rulerName');
        }
        if (rulerTitle == '') {
            verifications.push('rulerTitle');
        } else {
            verificationsInp.filter((element) => element != 'rulerTitle');
        }
        return verifications;
    }

    const clearFields = () => {
        setName('');
        setDescription('');
        setDate('');
        setPopulation('');
        setGalaxy('');
        setSolarSystem('');
        setCoordinates('');
        setRulerName('');
        setRulerTitle('');
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
                        <View style={styles.cardInput}>

                            <TextInput onChangeText={setName} value={name} placeholder="Nome do Mundo" />
                            {
                                verificationsInp.some((element) => element == 'nome') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput onChangeText={setDescription} value={description} placeholder="Descrição do Mundo" />
                            {
                                verificationsInp.some((element) => element == 'desc') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder="Data de Conquista"
                                onChangeText={setDate}
                                value={date}
                            />
                            {
                                verificationsInp.some((element) => element == 'date') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                            {
                                verificationsInp.some((element) => element == 'date2') && <Text style={styles.error}>Data inválida</Text>
                            }
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder="População do Planeta"
                                onChangeText={setPopulation}
                                value={population}
                            />
                            {
                                verificationsInp.some((element) => element == 'pop') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
                    </View>
                    <Text style={styles.titleInserts}>Localização do Mundo</Text>
                    <View style={styles.containerInfoWorld}>
                        <View style={styles.cardInput}>
                            <TextInput onChangeText={setGalaxy} value={galaxy} placeholder="Galáxia" />
                            {
                                verificationsInp.some((element) => element == 'galaxy') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput onChangeText={setSolarSystem} value={solarSystem} placeholder="Sistema Solar" />
                            {
                                verificationsInp.some((element) => element == 'solarSystem') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput onChangeText={setCoordinates} value={coordinates} placeholder="Coordenadas Espaciais" />
                            {
                                verificationsInp.some((element) => element == 'coordinates') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
                    </View>
                    <Text style={styles.titleInserts}>Governante do Planeta</Text>
                    <View style={styles.containerInfoWorld}>
                        <View style={styles.cardInput}>
                            <TextInput onChangeText={setRulerName} value={rulerName} placeholder="Nome" />
                            {
                                verificationsInp.some((element) => element == 'rulerName') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
                        <View style={styles.cardInput}>
                            <TextInput onChangeText={setRulerTitle} value={rulerTitle} placeholder="Título" />
                            {
                                verificationsInp.some((element) => element == 'rulerTitle') && <Text style={styles.error}>Preencha o campo corretamente</Text>
                            }
                        </View>
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