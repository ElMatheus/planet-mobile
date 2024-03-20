import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
      <View style={styles.planetsCatalog}>
        <CardPlanet txt={'Marte'} desc={'Planeta vermelho'} date={'10/02/2003'} color1={'#ff0000'} color2={'#ff4d4d'} />
      </View>
    </LinearGradient>

  )
}