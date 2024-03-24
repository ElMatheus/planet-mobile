import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInfo: {
        maxWidth: '60%',
        marginLeft: 20,
        marginTop: 40,
        gap: 3,
    },
    title: {
        fontSize: 26,
        color: '#a79fae',
    },
    txt: {
        color: '#8b8295',
    },
    button: {
        backgroundColor: '#4cc0c0',
        padding: 12,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
        marginRight: '40%',
    },
    buttonTxt: {
        color: '#e5fdfd',
        fontWeight: 'bold',
        fontSize: 16,
    },
    containerInserts: {
        flex: 1,
        marginTop: '15%',
        backgroundColor: '#f6ede4',
        borderTopLeftRadius: 70,
        padding: 20,
    },
    containerInfoWorld: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 30,
    },
    cardInput: {
        backgroundColor: '#fdf6ee',
        padding: 20,
        borderRadius: 30,
        elevation: 10,
        width: '40%',
    },
    cardInputColor: {
        backgroundColor: '#fdf6ee',
        padding: 20,
        borderRadius: 30,
        elevation: 10,
        gap: 10,
        alignItems: 'center',
    },
    txtInp: {
        color: '#9d9893',
    },
    titleInserts: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        color: '#a39892',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inpColor: {
        width: '80%',
        height: 200,
    },
    error: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
    },

});

export default styles;