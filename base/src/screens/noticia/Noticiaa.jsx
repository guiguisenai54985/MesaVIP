import React, {useState, useEffect} from "react";
import {StatusBar, SafeAreaView, View, ScrollView, FlatList } from "react-native";
import Styles from './Styles';
import axios from 'axios';
import { Avatar, PaperProvider, Button, Card, Text, LeftContent, RightContent,ProgressBar,MD3Colors,TextInput,SegmentedButtons,Modal, Portal,} from 'react-native-paper';
import newsimgg5 from '../../../res/img/newsimg5.jpg'
export default function Noticiaa({navigation, route}) {

    const [data, setData] = useState([]);
    const [mostrarNews, setMostrarNews] = useState(false);
    const id = route.params.id
    
        useEffect(()=>{
            axios.get(`http://10.0.2.2:8085/api/readNewsID/${id}`)
           
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

        const renderItem = ({item})=> (
           
            <View style={Styles.itemNew}> 
             <PaperProvider>
                 <Card style={Styles.newsCard}>
                      <Card.Content style={Styles.newsTitle}>
                        <Text style={{fontWeight: 'bold', fontSize: 30, marginVertical: 10}}>{item.titulo}</Text>
                        <Text style={{fontSize: 20, marginVertical: 10}}>{item.subtitulo}</Text>
                        <Text style={{fontSize: 15, marginVertical: 10}}>{item.conteudo}</Text>
                      </Card.Content>
                      <Card.Actions>
                     
                      </Card.Actions>
                  </Card>
                
                  
                       
                    </PaperProvider>
            </View>
            
        );


       

    return(
        <SafeAreaView>
        

                <View style={Styles.containerStyle}>
               
                   <FlatList
                   data={data}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   />
                </View>
            
        </SafeAreaView>
    );
    
}

