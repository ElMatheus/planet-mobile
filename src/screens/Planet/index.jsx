import { View, Text } from 'react-native'

export default function Planet({ route }) {
  const { planet } = route.params
  return (
    <View>
        <Text>{planet.name}</Text>
    </View>
  )
}