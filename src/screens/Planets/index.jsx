import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import planets from '../../data/Words';
import Title from '../../components/Title';
import CardPlanet from '../../components/CardPlanet';


import styles from './styles';

export default function Planets() {
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
          planets.map((planet) => (
            <CardPlanet
              key={planet.id}
              name={planet.name}
              desc={planet.desc}
              population={planet.population}
              color1={planet.color1}
              color2={planet.color2}
            />
          ))
        }
      </ScrollView>
    </LinearGradient>

  )
}