import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../components/Title';

import styles from './styles';

export default function Planets() {
  return (
      <LinearGradient
        style={styles.container}
        colors={[ '#0f0d23','#171836']}
        start={[1, 1]}
        end={[0, 0]}
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

      </View>
      </LinearGradient>

  )
}