import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EDE6DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  h1Style: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '800',
    fontSize: 35,
    color: 'black',
  },

  buttonStyles: {
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 40,
  },
  button2Styles: {
    backgroundColor: '#E3CFAF',
    borderWidth: 2,
    borderColor: '#E3CFAF',
    borderRadius: 30,
    marginVertical: 10,
  },

  containerStyle: {
    position: 'absolute',
    bottom: 0,
    width: 275,
    marginHorizontal: 50,

  },

});

export default Styles;