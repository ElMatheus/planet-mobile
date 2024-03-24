import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

export default function Planet({ route }) {
  const { planet } = route.params
  return (
    <LinearGradient
      colors={['#1a1733', '#201841']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{planet.name}</Text>
        <Text style={styles.text}>{planet.desc}</Text>
      </View>
      <View style={styles.containerPlanet}>

        <Image
          style={styles.texture}
          source={require('../../../assets/texture.png')}
        />

        <LinearGradient
          style={styles.iconPlanet}
          colors={[planet.cores.color1, planet.cores.color2]}
          start={[0, 1]}
          end={[0, 0]}
        />
      </View>
      <View style={styles.containerInfoPlanet}>
        <View style={styles.cardInformation}>
          <Ionicons style={styles.icon} size={20} color={"#d8d5db"} name='people-sharp' />
          <Text style={styles.txtIcon3}>População:</Text>
          <Text style={styles.txtIcon}>{planet.population}</Text>
        </View>
        <View style={styles.cardInformation}>
          <Ionicons style={styles.icon2} size={20} color={"#d8d5db"} name='calendar-sharp' />
          <Text style={styles.txtIcon3}>Data de conquista:</Text>
          <Text style={styles.txtIcon}>{planet.dataConquista}</Text>
        </View>
        <View style={styles.cardInformation}>
          <FontAwesome5 style={styles.icon3} size={20} color={"#d8d5db"} name='crown' />
          <Text style={styles.txtIcon3}>Governante:</Text>
          <Text style={styles.txtIcon}>{planet.governante.name}</Text>
          <Text style={styles.txtIcon2}>{planet.governante.title}</Text>
        </View>
      </View>

      <LinearGradient
        style={styles.containerLocation}
        colors={['#1c1438', '#1e1a29']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1.5 }}
      >
        <View style={styles.locationWorld}>
          <Text style={styles.titleLocation}>Localização do Mundo</Text>
          <View style={styles.location}>
            <Text style={styles.txtIcon}>Galáxia: {planet.localizacao.galaxy}</Text>
            <Text style={styles.txtIcon}>Sistema Solar: {planet.localizacao.solarSystem}</Text>
            <Text style={styles.txtIcon2}>{planet.localizacao.coordinates}</Text>
          </View>
        </View>
        <FontAwesome5 style={styles.icon4} size={27} color={"#d8d5db"} name='map-marker-alt' />
      </LinearGradient>


    </LinearGradient>
  )
}