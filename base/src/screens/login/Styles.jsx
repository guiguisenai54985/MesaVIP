import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EDE6DB',
  },

  h1Style: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 25,
    color: 'black',
  },

  title: {
    marginVertical: 20,
    alignItems: 'center',
  },

  text1: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 35,
    color: 'black',
  },
  text2: {
    marginHorizontal: 2,
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 14,
    color: 'black',
  },

  loginDiv: {
    marginVertical: 150,
    marginHorizontal: 20,
  },

  EmailStyle: {
    marginTop: 15,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: 'black',
    fontWeight: 'bold',


  },
  senhaStyle: {
    marginVertical: -5,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',


  },

  containerStyleBtn: {
    alignItens: 'center',
    marginHorizontal: 70,
    height: 70,
    width: 230,
    marginVertical: 10,
  },

  buttonStyle: {
    alignItens: 'center',
    backgroundColor: '#E3CFAF',
    borderRadius: 13,
  },


  btmTextView: {
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  textBottom: {
    color: 'black',
    fontWeight: 'bold'
  },

  textBTM: {
    backgroundColor: '#EDE6DB',
  },
  resetSenha: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },

});
export default Styles;