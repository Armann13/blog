import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const CreateScreen = ({navigation,route}) => {
    
    const {addBlogPost} = useContext(Context);

    return (
    
    <BlogPostForm 
    onSubmit={(title,content) => {
        addBlogPost(title,content, () => navigation.navigate('Blog'))

    }}
    />
                
        
);
};





const styles = StyleSheet.create({

    

});


export default CreateScreen;