import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home , OrderDelivery , Restaurant,Podcast} from "../screens"


import { COLORS, icons } from "../constants"
import Podcasts from '../screens/Podcasts';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return(

        <Tab.Navigator>



        <Tab.Screen
               name="Playlist"
               component={OrderDelivery}
               options={{

                     
                    tabBarIcon:({focused}) =>(
                        <Image 
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.black : COLORS.secondary
                        }}
                    
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
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.black : COLORS.secondary
                        }}
                    
                    />   )
               }} 
            />
            
           

            <Tab.Screen
               name="Profile"
               component={Restaurant}
               options={{
                    tabBarIcon:({focused}) =>(
                        <Image 
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.black : COLORS.secondary
                        }}
                    
                    />   )
               }} 
            />





        </Tab.Navigator>


      




    )
}

export default Tabs;

