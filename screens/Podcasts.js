import React from "react";
import { StyleSheet, Text, View,SafeAreaView ,Image,Button,ScrollView, TouchableOpacity} from "react-native";
import { icons, images, SIZES, COLORS, FONTS} from '../constants';
import { OrderDelivery } from ".";
import { useNavigation } from '@react-navigation/native';
const Podcasts = ({navigation}) => {

    
  return (
   
    <SafeAreaView style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
  
  <View style={{ flex: 1.5, backgroundColor: "#3399FF" }} >
<View style={{ flex: 1, backgroundColor:"#3399FF",paddingHorizontal:10,justifyContent:"center",color:"white"}} ><TouchableOpacity onPress={() => navigation.push('Tabs')
      }><Text style={{fontSize:12,color:"white"}}>Back</Text></TouchableOpacity></View>
      
      
      <View style={{ flex: 3, backgroundColor: "#3399FF",flexDirection:"row"}}>
        <View style={{ flex: 1, backgroundColor: "#3399FF"}}></View>
        <View style={{ flex: 2.6, backgroundColor: "#3399FF",justifyContent:"flex-start"}}><Image 
                        source={images.gma}
                        resizeMode="contain"
                        style={{
                            width: 220,
                            height: 170,
                            borderRadius:10
                        }} /></View>
        <View style={{ flex: 1, backgroundColor: "#3399FF"}}></View>
      </View>
      


      <View style={{ flex: 1, flexDirection:"row", backgroundColor: "#3399FF"}}>
       <View style={{ flex: 2, backgroundColor: "#3399FF"}} ><Image 
                        source={images.option}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius:10,
                            paddingHorizontal:50
                        }} /></View>
       <View style={{ flex: 3, backgroundColor: "#3399FF",justifyContent:"center",paddingHorizontal:25}} ><Text style={{fontSize:13,color:"white"}}> Good Morning America</Text><Text style={{fontSize:9,paddingHorizontal:40,margin:"2%",color:"white"}}> Mike o conel</Text></View>
        <View style={{ flex: 2, backgroundColor: "#3399FF",justifyContent:"center"}} ><Image 
                        source={images.play}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius:10,
                            paddingHorizontal:50
                        }} /></View>
      </View>
      
      <View style={{ flex: 1, backgroundColor: "#3399FF"}} ></View> 
      </View>

      <View style={{ flex: 1.3, backgroundColor: "#3399FF" }} >
          <View style={{ flex: 1, backgroundColor: "#F5F5F5",borderTopLeftRadius:20, borderTopRightRadius:20}} >
          <OrderDelivery/>    
          </View> 
      
       </View>
                

     
     



      
      </SafeAreaView>
    
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor:"white",
  },
});

export default Podcasts;