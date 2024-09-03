import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
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
        borderColor:'#E3CFAF',
        borderRadius:5,
        padding:10,
        marginBottom:20,
        color:'red',
    },

    EmailStyle: {
        width: '95%',
        marginTop: 15,
        backgroundColor: '#E3CFAF',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 10,
        fontSize: 11,
        color: '#E3CFAF',
        fontWeight: 'bold',
    
    
      },
      senhaStyle: {
        marginVertical: -5,
        backgroundColor: '#E3CFAF',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        borderRadius: 10,
        fontSize: 11,
        color: '#E3CFAF',
        fontWeight: 'bold',
    
    
      },

      button2Styles: {
        marginVertical: 30,
        width: 'auto',
        height: 'auto',
        borderWidth: 2,
        borderColor: '#E3CFAF',
        backgroundColor: '#E3CFAF',
        borderRadius: 15,
        marginVertical: 10,
      },

      containerBtn2: {
        marginVertical: 10,
      }
});
export default Styles;