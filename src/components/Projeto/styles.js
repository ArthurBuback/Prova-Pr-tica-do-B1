import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    },
    viewImg: {
        width: '30%',
        height: 400,
        backgroundColor: 'yellow'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        backgroundColor: '#190033',
        padding: 10,
        width: '70%',
        height: '100%',
    },
    nome: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    descricao: {
        fontSize: 20,
        color: 'white',
        marginBottom: 5
    }, 
    btn: {
        padding: 10,
        backgroundColor: 'yellow',
    }
});

export default styles;