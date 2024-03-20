import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    gap: 10,
  },
  iconPlanet: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  containerCard: {
    backgroundColor: '#1f1a37',
    borderRadius: 25,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,


  },

  infoCard: {
    flexDirection: 'column',
    gap: 4,
  },
  date: {
    marginLeft: "auto",
  }
});

export default styles;