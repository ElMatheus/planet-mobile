import { View, Text } from 'react-native';

import styles from './styles';

const CardPlanet = ({ txt, desc }) => {
  return (
    <View>
      <Text>{txt}</Text>
      <Text>{desc}</Text>
    </View>
  )
}

export default CardPlanet