import React, {useContext, useEffect} from 'react';
import {Text,StyleSheet,View,FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
 

const IndexScreen = ({navigation}) => {
    
    const {state,deleteBlogPost,getBlogPost} = useContext(Context);

    useEffect(() => {
        getBlogPost();

        const listener = navigation.addListener('focus', () => {
            getBlogPost();
        });

        return () => {
            listener.remove();
        };
    }, [])

return(
    <View>
       <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {

        return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})} >
             <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather name="trash" style={styles.icon} />
            </TouchableOpacity> 
            </View>
            </TouchableOpacity>
            );
        }}
       
       />
      
    </View>



);
};


const styles = StyleSheet.create({

row: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10
},
title:{
    fontSize : 18,
},
icon:{
    fontSize: 24
},

});


export default IndexScreen;
