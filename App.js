import React from "react";
import 'react-native-gesture-handler';
import  {createStackNavigator} from "@react-navigation/stack";
import  {NavigationContainer} from "@react-navigation/native";
import { Home,Restaurant,OrderDelivery} from "./screens";
import Tabs from "./navigation/tabs";
import Podcasts from "./screens/Podcasts";


const Stack = createStackNavigator();

const App = () =>{
    return(
      
      <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
           headerShown:false
         }}
         initialRouteName={"Tabs"}
        >
          
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
          <Stack.Screen name="Podcasts" component={Podcasts}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;