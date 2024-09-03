import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        backgroundColor: '#EDE6DB',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:30,
        color:'black',
    },
    input:{
        width:'100%',
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        padding:10,
        marginBottom:20,
        color:'white',
    },

    EmailStyle: {
        marginTop: 15,
        backgroundColor: '#E3CFAF',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 10,
        fontSize: 11,
        color: '#000000',
        fontWeight: 'bold',
    
    
      },
      senhaStyle: {
        marginVertical: -5,
        backgroundColor: '#A8FB8A',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 10,
        fontSize: 11,
        color: '#000000',
        fontWeight: 'bold',
    
    
      },

      button2Styles: {
        width: 140,
        height: 40,
        backgroundColor: '#E3CFAF',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 15,
        marginVertical: 10,
      },
});
export default styles;