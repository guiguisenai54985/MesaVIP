import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

   titleWorkout: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10
   },
   exerciciosInput: {
      width: '80%',

   },

   workoutType: {
      marginVertical: 15,
   },

   workoutFrequency: {
      marginVertical: 20,
   },

   mensagem: {

      fontWeight: 'bold',
      color: 'red',
      marginTop: 10,
   },


   avatar: {
      marginVertical: 15,
      alignItems: 'center',
   },
   avatarView: {
      alignItems: 'center',
   },

   viewProfPic: {
      flexDirection: 'row'
   },

   UserInfoView: {
      marginTop: 20,
      alignItems: 'center',
      width: '100%'
   },

   userInfo: {
      marginVertical: 3,
      width: '60%'
   },


   Title: {
      alignItems: 'center',
      marginVertical: 20
   },

   TitleText: {
      fontWeight: 'bold'
   },

   container: {
      flex: 1,
      backgroundColor: '#EDE6DB',
   },
   scrollView: {
      flex: 1,
   },
   cardList: {
      marginVertical: 10,
   },
   card: {
      backgroundColor: '#EDE6DB',
      borderRadius: 10,
      marginHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
   },
   cardImage: {
      width: 250,
      height: 250,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   tabela: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 50,
   },
   roundBackground: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#E3CFAF',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
   },
   logo: {
      width: 100,
      height: 100,
      borderRadius: 50,
   },

});

export default styles;