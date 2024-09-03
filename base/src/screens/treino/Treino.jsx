import React, {useEffect, useState} from "react";
import {StatusBar, SafeAreaView, Text,View, FlatList, Alert } from "react-native";
import { Button } from "react-native-paper";
import Styles from './Styles';
import axios from "axios";

    const ListarTreino = ({navigation, route}) => {
        const id = route.params.id
        const [data, setData] = useState([]);
    
        useEffect(()=>{
            axios.get(`http://10.0.2.2:8085/api/readTreino/${id}`)
            .then(response =>{
                //Ordenar os dados pelo id em ordem crescente
                const sortData= response.data.sort((a,b) => a.id - b.id);
                setData(sortData);
    
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });
        },[]);


        const handleDelete = async (id) => {
            try {
        
        
                const response = await axios.delete(`http://10.0.2.2:8085/api/deleteWorkout/${id}`, );
        
                //Verificar se o login foi efetuado com sucesso
        
                if (response.status === 200) {
                 Alert.alert('Treino deletado com sucesso')
                }
                else {
                    Alert.alert('Erro ao remover treino')
                }
        
            }
            catch (error) {
               console.log(error)
            };
        }
    
        const renderItem = ({item})=> (
            <View>
            <View style={Styles.item}> 
            <Text style={Styles.itemText}>{item.tipoTreino}</Text>
            <Text style={Styles.itemText}>{item.exercicios}</Text>
            <Text style={Styles.itemText}>{item.frequencia}</Text>
            </View>
            <View>
                <Button onPress={()=> handleDelete(item.id) } textColor='black'>Deletar</Button>
            </View>
            </View>
           
            
           
        );
    return(
        <View style={Styles.container}>
            <View style={Styles.tableHeader}>
                <Text style={Styles.headerText}>Restaurantes</Text>
                <Text style={Styles.headerText}>Data</Text>
                <Text style={Styles.headerText}>Horário</Text>
            </View>

        <FlatList
        data={data}
         renderItem={renderItem}
          keyExtractor={item => String(item.id)}
           style={Styles.list}
        />
        </View>
    
    );
    
}

export default ListarTreino;
