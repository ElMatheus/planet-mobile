import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import repository from '../../models/planet/PlanetsRepository';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Home() {
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../../../assets/backgroundPlanet.jpg')} >

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Planet</Text>
        <Text style={styles.title2}>Mobile</Text>
      </View>

      <View style={styles.containerDesc}>
        <Text style={styles.desc}>
          Bem Vindo ao Planet Mobile, um aplicativo para você descobrir novos mundos e aprender mais sobre o universo.
        </Text>
      </View>

      <View style={styles.discoveryWorld}>
        <Ionicons name="planet" size={56} color="#a79fae" />
        <Text style={styles.titlePlanets} >{repository.getLengthPlanets()} mundos descobertos</Text>
      </View>

    </ImageBackground>
  )
}