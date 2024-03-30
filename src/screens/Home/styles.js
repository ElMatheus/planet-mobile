import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerTitle: {
    marginTop: 50,
    marginLeft: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 40,
    color: '#a79fae',
  },
  title2: {
    fontSize: 40,
    color: '#a79fae',
    fontWeight: 'bold',
  },
  titlePlanets: {
    fontSize: 26,
    color: '#a79fae',
    fontWeight: 'bold',
  },
  discoveryWorld: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#322c49',
    borderRadius: 50,
    elevation: 10,
  },
  containerDesc: {
    marginTop: 11,
  },
  desc: {
    color: '#8b8295',
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 16,
  },
  containerButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#322c49',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    padding: 10,
  },
  buttonNav: {
    width: "90%",
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonTxt: {
    color: '#8b8295',
    fontSize: 15,
    fontWeight: 'normal',
  },
  iconRoutes: {
    backgroundColor: '#8b8295',
    padding: 7,
    borderRadius: 50,
  },
  descRoute: {
    width: "80%",
  },
  border: {
    position: 'relative',
    top: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(139, 130, 149, 0.20)',
  },
});

export default styles;