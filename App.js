import  React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen/index'
import ResultShow from './src/screens/ResultShow'
const Stack = createStackNavigator();
export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer >
        <Stack.Navigator >
        <Stack.Screen name= "Search" component ={SearchScreen} options={{headerTitleAlign:"center"}}/>
        <Stack.Screen name= "ResultShow" component ={ResultShow} options={{headerTitleAlign:"center"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}