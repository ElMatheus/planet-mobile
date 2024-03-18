
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ButtonNav = ({ txt, route }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => route()}>
        <Text style={styles.text}>{txt}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonNav