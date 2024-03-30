import { View, Text, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
import { profile } from '../../data/Profile';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

export default function AboutMe() {
  return (
    <LinearGradient
      colors={['#1a1733', '#201841']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.backgroundImage}
    >
      <View style={styles.InfoApp}>
        <Text style={styles.titleInfoApp}>Planet Mobile</Text>
        <Text style={styles.textInfoApp}>Versão 1.0</Text>
        <Text style={styles.descApp}>Planet Mobile foi desenvolvido vizando o aprendizado sobre routes e CRUD no mobile. É um aplicativo interativo que permite aos usuários explorar um catálogo de planetas descobertos.</Text>
      </View>
      <View style={styles.develop}>
        <Text style={styles.titleDevelop}>Desenvolvido por:</Text>
        <View style={styles.containerDevelop}>
          <Image source={require('../../../assets/profileMatheus.jpeg')} style={styles.profilePicture} />
          <View style={styles.myInfos}>
            <Text style={styles.titleInfo}>
              {profile.name}
            </Text>
            <Text>
              {profile.age} anos
            </Text>
            <View style={styles.infos}>

              <TouchableOpacity style={styles.linkInfo} onPress={() => Linking.openURL(profile.social.github)}>
                <AntDesign name="github" size={24} color="#080808" />
                <Text>
                  ElMatheus
                </Text>
              </TouchableOpacity >

              <TouchableOpacity style={styles.linkInfo} onPress={() => Linking.openURL(profile.social.linkedin)}>
                <AntDesign name="linkedin-square" size={24} color="#0a78b5" />
                <Text>
                  Matheus Gomes
                </Text>
              </TouchableOpacity >

              <TouchableOpacity style={styles.linkInfo} onPress={() => Linking.openURL(`mailto:${profile.social.gmail}`)}>
                <MaterialCommunityIcons name="gmail" size={24} color="#d23f35" />
                <Text>
                  {profile.social.gmail}
                </Text>
              </TouchableOpacity >
            </View>

          </View>
        </View>
        <View style={styles.containerDescription}>
          <Text>
            {profile.description}
          </Text>
          <View style={styles.skills}>
            <Text style={styles.titleSkills}>Ferramentas:</Text>

            <View style={styles.containerSkills}>
              {profile.skills.map((skill, index) => (
                <MaterialCommunityIcons style={styles.iconSkills} name={skill} size={28} color="#f6ede4" key={index} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}