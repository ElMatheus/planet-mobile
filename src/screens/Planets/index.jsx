import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";
import CardPlanet from '../../components/CardPlanet';

import repository from '../../models/planet/PlanetsRepository';

import styles from './styles';

export default function Planets() {
  const isFocused = useIsFocused();
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = repository.getAll();
      setAllPlanets(planets);
    }
  }, [isFocused]);

  return (
    <LinearGradient
      colors={['#1a1733', '#201841']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >

      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          Bem vindo explorador!
        </Text>
        <Text style={styles.txt}>
          Aqui você encontrará
          os catálogos de planetas descobertos.
        </Text>
      </View>
      <ScrollView style={styles.planetsCatalog}>
        {
          allPlanets.map((planet) => (
            <CardPlanet
              planet={planet}
              key={planet.id}
            />
          ))
        }
      </ScrollView>
    </LinearGradient>

  )
}