import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        paddingVertical: 8,

    },

    headerText: {
        color: 'black',
        flex:1,
        textAlign: 'center',
        fontWeight: 'bold',

    },

    list: {
        width: '100%',

    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fffff',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        alignItems: 'center',
    },
    itemText: {
        color: 'black',
        flex: 1,
        textAlign: 'center',
    },

    updateButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,

    },

    updateButtonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',

    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
    }
    
    
    });

    export default Styles;