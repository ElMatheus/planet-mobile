import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const CardPlanet = ({ planet }) => {
  const navigation = useNavigation()
  return (
      <TouchableOpacity  style={styles.card}onPress={() => navigation.navigate("Planet", {planet})}>

        <View>

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
        <View style={styles.containerCard}>
          <View style={styles.infoCard}>
            <Text style={{ color: '#a79fae', fontWeight: 'bold', fontSize: 18 }}>{planet.name}</Text>
            <Text style={{ color: '#a79fae', }}>{planet.desc}</Text>
          </View>
          <View style={styles.date}>
            <Text style={{ color: '#8b8295', }}>{planet.population} hab</Text>
          </View>
        </View>
      </TouchableOpacity>
  )
}

export default CardPlanet