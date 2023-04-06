import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import {Provider} from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import EditScreen from './src/screens/EditScreen';


const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Blog">
        <Stack.Screen
        name="Blog" 
        component={IndexScreen}
        options={({ navigation, route }) => ({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={26}  />
                </TouchableOpacity>
                ),
          })}
      />
        <Stack.Screen 
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit',{id: route.params.id})}>
                <EvilIcons name="pencil" size={34} color="black" />
                </TouchableOpacity>
                ),
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default () => {
    return(
        <Provider>
            <App/>
        </Provider>
    );
};