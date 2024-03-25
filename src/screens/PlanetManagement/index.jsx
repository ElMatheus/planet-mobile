import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { TriangleColorPicker, toHsv } from 'react-native-color-picker';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import tinycolor from 'tinycolor2';

import Planet from '../../models/planet/Planet';
import repository from '../../models/planet/PlanetsRepository';


import styles from './styles';

export default function Management({ route }) {
    let { planet, edit } = route.params;
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
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');

    const [styleColor1, setStyleColor1] = useState('');

    const [isUpdate, setIsUpdate] = useState(false);

    const [verificationsInp, setVerificationsInp] = useState([]);
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    useEffect(() => {
        if (edit) {
            console.log("blz");
            setName(planet.name);
            setDescription(planet.desc);
            setDate(planet.dataConquista);
            setPopulation(planet.population);
            setGalaxy(planet.localizacao.galaxy);
            setSolarSystem(planet.localizacao.solarSystem);
            setCoordinates(planet.localizacao.coordinates);
            setRulerName(planet.governante.name);
            setRulerTitle(planet.governante.title);
            setColor1(planet.cores.color1);
            setColor2(planet.cores.color2);
            setIsUpdate(true);
        } else {
            clearFields();
        }
    }, [planet, edit]);


    // resolver bug do color picker
    useEffect(() => {
        if (isFocused) {
            setStyleColor1('')
            setTimeout(() => {
                setStyleColor1('inpColor')
            }, 1);
        }
    }, [isFocused]);



    const handleAddPlanet = () => {

        if (verifications().length > 0) {
            setVerificationsInp(verifications);
        } else {
            if (isUpdate) {
                repository.updatePlanet(planet.id, name, description, date, population, galaxy, solarSystem, coordinates, rulerName, rulerTitle, color1, color2);
                clearFields();
                setVerificationsInp([]);
            } else {
                const newPlanet = new Planet(name, description, date, population, galaxy, solarSystem, coordinates, rulerName, rulerTitle, color1, color2);
                repository.addPlanet(newPlanet);
                clearFields();
                setVerificationsInp([]);
            }
            navigation.navigate("Planets");
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
        setIsUpdate(false);
        edit = false;
        setName('');
        setDescription('');
        setDate('');
        setPopulation('');
        setGalaxy('');
        setSolarSystem('');
        setCoordinates('');
        setRulerName('');
        setRulerTitle('');
        setColor1('#000');
        setColor2('#000');
    }


    return (
        <LinearGradient
            colors={['#1a1733', '#201841']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <ScrollView>

                <View style={styles.pageDetails}>
                    <View style={styles.containerInfo}>
                        <Text style={styles.title}>Gerenciamento de Mundos</Text>
                        <Text style={styles.txt}>Bem-vindo ao centro de controle intergaláctico! Aqui, você tem o poder de moldar o universo ao seu gosto.</Text>
                        <TouchableOpacity style={styles.button}>
                            {
                                isUpdate ? <Text onPress={handleAddPlanet} style={styles.buttonTxt}>Editar Mundo</Text> : <Text onPress={handleAddPlanet} style={styles.buttonTxt}>Adicionar Mundo</Text>
                            }
                        </TouchableOpacity>
                            {isUpdate && (
                                <TouchableOpacity style={styles.buttonRed} onPress={clearFields}>
                                    <Text style={styles.buttonTxt}>Cancelar Edição</Text>
                                </TouchableOpacity>
                            )}
                    </View>
                </View>
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
                                onColorChange={(color) => setColor1(tinycolor(color).toHexString())}
                                onColorSelected={(color) => alert(`Color selected: ${color1}`)}
                                onOldColorSelected={(color) => alert(`Old color selected: ${color1}`)}
                                style={styles[styleColor1]}
                            />
                        </View>
                        <View style={styles.cardInputColor}>
                            <Text style={styles.txtInp}>
                                Selecione a cor secundária do Mundo
                            </Text>
                            <TriangleColorPicker
                                oldColor="purple"
                                color={color2}
                                onColorChange={(color) => setColor2(tinycolor(color).toHexString())}
                                onColorSelected={(color) => alert(`Color selected: ${color}`)}
                                onOldColorSelected={(color) => alert(`Old color selected: ${color}`)}
                                style={styles[styleColor1]}
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>

        </LinearGradient>
    )
}