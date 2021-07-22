import React from "react";
import 'react-native-gesture-handler';
import  {createStackNavigator} from "@react-navigation/stack";
import  {NavigationContainer} from "@react-navigation/native";
import { Home,Profile,Playlist} from "./";
import Tabs from "../navigation/tabs";
import Podcasts from "./Podcasts";


const Stack = createStackNavigator();

const Navigation = () =>{
    return(
      
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
           headerShown:false
         }}
         initialRouteName={"Tabs"}
        >
          
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Playlist" component={Playlist}/>
          <Stack.Screen name="Podcasts" component={Podcasts}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigation;