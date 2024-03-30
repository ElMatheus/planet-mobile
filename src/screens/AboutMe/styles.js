import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  InfoApp: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: "10%",
    gap: 7,
  },
  titleInfoApp: {
    fontSize: 20,
    color: '#a79fae',
  },
  textInfoApp: {
    fontSize: 17,
    color: '#4cc0c0',
    fontWeight: 'bold',
  },
  descApp: {
    fontSize: 17,
    color: '#8b8295',
  },
  develop: {
    marginTop: "50%",
    backgroundColor: '#f6ede4',
    padding: 10,
  },
  titleDevelop: {
    fontSize: 17,
    padding: 10,
    fontWeight: 'bold',
  },
  containerDevelop: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  myInfos: {
    borderTopColor: '#9d9893',
    borderTopWidth: 1,
    paddingRight: 10,
    maxWidth: '60%',
  },
  infos: {
    marginTop: 5,
    gap: 3,
  },
  titleInfo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  containerDescription: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  containerSkills: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',

  },
  titleSkills: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconSkills: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#4cc0c0',
  },
  skillScroll: {
    width: '100%',
  },
});

export default styles;