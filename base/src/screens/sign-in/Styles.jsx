import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  //fundo
  container: {
    height: 500,
    flex: 1,
    backgroundColor: '#EDE6DB',
  },
  //registrese
  h1Style: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 25,
    color: 'black',
  },

  title: {
    marginVertical: 10,
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
    marginVertical: 50,
    marginHorizontal: 20,
  },
  //form
  nomeStyle: {
    marginVertical: 10,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',


  },
  sobrenomeStyle: {
    marginVertical: -10,
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
    marginHorizontal: 80,
    height: 60,
    width: 220,
    marginVertical: 10,
  },

  buttonStyle: {
    alignItens: 'center',
    backgroundColor: '#E3CFAF',
    borderRadius: 14,
  },


  btmTextView: {
    marginHorizontal: 70,
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBottom: {
    position: '',
    color: 'black',
    fontWeight: 'bold'
  },

  textBTM: {
    backgroundColor: 'black',
  },

  emailStyle: {
    marginVertical: 10,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
  },
  senhaStyle: {
    marginVertical: -10,
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 10,
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',


  },

  mensagem: {

    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },

  btmTextView: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //já tem uma conta
  textBottom: {
    color: 'black',
    fontWeight: 'bold'
  },

  textBTM: {
    backgroundColor: '#EDE6DB',
  }
});

export default Styles;