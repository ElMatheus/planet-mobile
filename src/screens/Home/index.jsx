import { View, Text, TouchableOpacity } from 'react-native';

import Title from '../../components/Title';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Planet</Text>
        <Text>Mobile</Text>
      </View>
      <View>
        <Text>(descricao do projeto)</Text>
      </View>
      <View>
        {/* IMAGEM MUNDOS */}
        <Text>150 mundos descobertos</Text>
      </View>
      <View>

      </View>
    </View>
  )
}