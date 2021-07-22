import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home , Playlist, Profile} from "../screens"


import { COLORS, icons } from "../constants"
import Podcasts from '../screens/Podcasts';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return(

        <Tab.Navigator>



        <Tab.Screen
               name="Playlist"
               component={Playlist}
               options={{

                     
                    tabBarIcon:({focused}) =>(
                        <Image 
                        source={icons.list}
                        resizeMode="contain"
                        style={[styles.container,{tintColor: focused ? COLORS.black : COLORS.secondary}]}
                    
                    />   )
               }} 
            />

            <Tab.Screen
               name="Discover"
               component={Home}
               options={{
                    tabBarIcon:({focused}) =>(
                        <Image 
                        source={icons.search}
                        resizeMode="contain"
                        style={[styles.container,{tintColor: focused ? COLORS.black : COLORS.secondary}]}
                    
                    />   )
               }} 
            />
            
           

            <Tab.Screen
               name="Profile"
               component={Profile}
               options={{
                    tabBarIcon:({focused}) =>(
                        <Image 
                        source={icons.user}
                        resizeMode="contain"
                        style={[styles.container,{tintColor: focused ? COLORS.black : COLORS.secondary}]}
                    
                    />   )
               }} 
            />





        </Tab.Navigator>


      




    )
}


const styles = StyleSheet.create({
    container: {
        width: 25,
        height: 25
    },
  });

export default Tabs;

