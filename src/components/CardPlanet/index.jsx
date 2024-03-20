import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const CardPlanet = ({ name, desc, population, color1, color2 }) => {
  return (
    <View style={styles.card}>
      <View>

        <Image
          style={styles.texture}
          source={require('../../../assets/texture.jpg')}
        />

        <LinearGradient
          style={styles.iconPlanet}
          colors={[color1, color2]}
          start={[0, 1]}
          end={[0, 0]}
        />
      </View>
      <View style={styles.containerCard}>
        <View style={styles.infoCard}>
          <Text style={{ color: '#a79fae', fontWeight: 'bold', fontSize: 18 }}>{name}</Text>
          <Text style={{ color: '#a79fae', }}>{desc}</Text>
        </View>
        <View style={styles.date}>
          <Text style={{ color: '#8b8295', }}>{population} hab</Text>
        </View>
      </View>
    </View>
  )
}

export default CardPlanet