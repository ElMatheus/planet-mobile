import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import repository from '../../models/planet/PlanetsRepository';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Home() {
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../../../assets/backgroundPlanet.jpg')} >

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Planet</Text>
        <Text style={styles.title2}>Mobile</Text>
        <View style={styles.containerDesc}>
          <Text style={styles.desc}>
            Bem Vindo ao Planet Mobile, um aplicativo para você descobrir novos mundos e aprender mais sobre o universo.
          </Text>
        </View>
      </View>

      <View style={styles.discoveryWorld} >
        <Ionicons name="planet" size={56} color="#a79fae" />
        <Text style={styles.titlePlanets} >{repository.getLengthPlanets()} mundos descobertos</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttonNav}>
          <Ionicons style={styles.iconRoutes} name="add" size={23} color="#d8d5db" />
          <View style={styles.descRoute}>
            <Text style={styles.buttonTxt}>Gerenciar Mundos</Text>
            <View style={styles.border}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNav}>
          <Ionicons style={styles.iconRoutes} name="list" size={23} color="#d8d5db" />
          <View style={styles.descRoute}>
            <Text style={styles.buttonTxt}>Catálogo de Mundos</Text>
            <View style={styles.border}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNav}>
          <Ionicons style={styles.iconRoutes} name="person" size={23} color="#d8d5db" />
          <View style={styles.descRoute}>
            <Text style={styles.buttonTxt}>Criador</Text>
            <View style={styles.border}></View>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  )
}