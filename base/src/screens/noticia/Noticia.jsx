import React, {useState, useEffect} from "react";
import {StatusBar, SafeAreaView, View, ScrollView, FlatList } from "react-native";
import Styles from './Styles';
import axios from 'axios';
import { Avatar, PaperProvider, Button, Card, Text, LeftContent, RightContent,ProgressBar,MD3Colors,TextInput,SegmentedButtons,Modal, Portal,} from 'react-native-paper';
import newsimgg5 from '../../../res/img/newsimg5.jpg'
export default function Noticia({navigation, route}) {

    const [data, setData] = useState([]);
    const [mostrarNews, setMostrarNews] = useState(false);
    
        useEffect(()=>{
            axios.get(`http://10.0.2.2:8085/api/readNews`)
            .then(response =>{
                //Ordenar os dados pelo id em ordem crescente
                const sortData= response.data.sort((a,b) => a.id - b.id);
                setData(sortData);
    
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });
            console.log(data)
        },[]);

        const handleVizualizar = (id) =>{
            navigation.navigate('Noticia', {id})
        };

        const renderItem = ({item})=> (
           
            <View style={Styles.item}> 
             <PaperProvider>
                 <Card style={Styles.newsCard}>
                    
                      <Card.Content style={Styles.newsTitle}>
                        <Text variant="titleLarge" style={{fontWeight: 'bold'}}>{item.titulo}</Text>
                        <Text variant="bodyMedium">{item.subtitulo}</Text>
                      </Card.Content>
                      <Card.Actions>
                        <Button color='green' mode='outilined' textColor='green' onPress={()=> handleVizualizar(item.id)}>Ler noticia</Button>
                      </Card.Actions>
                  </Card>
                
                  
                       
                    </PaperProvider>
            </View>
            
        );


       

    return(
        <SafeAreaView>
            

          
               
                   <FlatList
                   data={data}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   />

           
        </SafeAreaView>
    );
    
}

