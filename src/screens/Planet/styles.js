import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    title: {
        fontSize: 42,
        color: '#a79fae',
        fontWeight: 'bold',
    },
    text: {
        color: '#8b8295',
        fontSize: 17,
    },
    containerInfo: {
        marginTop: 50,
        marginLeft: 25,
        maxWidth: 300,
    },
    texture: {
        position: 'absolute',
        width: 170,
        height: 170,
        borderRadius: 100,
        zIndex: 1,
    },
    iconPlanet: {
        width: 170,
        height: 170,
        borderRadius: 100,
    },
    containerPlanet: {
        marginTop: "5%",
        marginLeft: 50,
    },
    containerInfoPlanet: {
        marginTop: "10%",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        backgroundColor: '#e7a54f',
        padding: 14,
        borderRadius: 100,
    },
    icon2: {
        backgroundColor: '#506489',
        padding: 14,
        borderRadius: 100,
    },
    icon3: {
        backgroundColor: '#b05c49',
        padding: 14,
        borderRadius: 100,
    },
    icon4: {
        backgroundColor: '#b05c49',
        padding: 14,
        borderRadius: 100,
        marginBottom: "auto",
    },
    cardInformation: {
        maxWidth: 100,
        alignItems: 'center',
        gap: 2,
    },
    txtIcon: {
        color: '#8b8295',
        fontSize: 15,
    },
    containerLocation: {
        backgroundColor: '#1a1733',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        width: '100%',
        marginTop: "auto",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtIcon2: {
        color: '#4cc0c0',
        fontSize: 15,
        fontWeight: 'bold',
    },
    txtIcon3: {
        color: '#8b8295',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleLocation: {
        color: '#a79fae',
        fontSize: 25,
    },
    location: {
        gap: 3,
    }
});

export default styles;