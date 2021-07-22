import React from "react";
import { StyleSheet, Text, View,SafeAreaView ,Image,Button,ScrollView,Switch} from "react-native";
import { icons, images, SIZES, COLORS, FONTS} from '../constants';
const Restaurant = () => {
  return (
   
   
   
    <SafeAreaView style={[styles.container, {
      flexDirection: "column"
    }]}>
    
    
      <View style={{ flex: 1, Color: "#F5F5F5",margin:"5%"}}><Text>  Back </Text></View>

            <View style={{ flex: 2, backgroundColor: "#F5F5F5",margin:4,borderRadius:100,flexDirection: "row" }} >
            
            <View style={{ flex: 1, backgroundColor: "#F5F5F5",borderRadius:5,justifyContent:"center",paddingHorizontal:10}}><Image 
                        source={images.pimage}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                       
                        }} /></View>
            <View style={{ flex: 3, backgroundColor: "#F5F5F5",justifyContent:"center"}}><Text style={{fontWeight:"bold"}}> Charan </Text><Text style={{fontSize:10}}> @91Charan </Text></View>
            <View style={{ flex: 2, borderRadius:5,backgroundColor: "#F5F5F5",direction:"rtl",justifyContent:"center",paddingHorizontal:30}}><Image 
                        source={images.edit}
                        resizeMode="contain"
                        style={{
                            width: 60,
                            height: 60,
                       
                        }} /></View> 
            
      </View>   


      <View style={{ flex: 7, backgroundColor: "#F5F5F5",margin:4,borderRadius:100  }}>

        <View style={{ flex: 2, backgroundColor: "#F5F5F5",justifyContent:"center",borderRadius:5 ,paddingHorizontal:25 }}><Text style={{fontWeight: "bold",fontSize:15}}>    Most Listened </Text></View>

        <View style={{ flex: 6, backgroundColor: "#F5F5F5",margin:1,borderRadius:0 }}>
                        
             <ScrollView horizontal={true}>
               <View style={{height:80,width:80,marginLeft:30,marginTop:10}}>
                    <View style={{flex:2}}>
                         <Image source={images.gma} style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:15}}/> 
                    </View>
               </View>

               <View style={{height:80,width:80,marginLeft:20,marginTop:10}}>
                    <View style={{flex:2}}>
                         <Image source={images.univer} style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:15}}/> 
                    </View>
               </View>

               <View style={{height:80,width:80,marginLeft:20,marginTop:10}}>
                    <View style={{flex:2}}>
                         <Image source={images.daily} style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:15}}/> 
                    </View>
               </View>



               



               

             </ScrollView>           

        </View>

        <View style={{ flex: 6, backgroundColor: "#F5F5F5",margin:0,borderRadius:0 }}>
                        
                        <ScrollView horizontal={true}>
                          <View style={{height:80,width:80,marginLeft:30,marginTop:10}}>
                               <View style={{flex:2}}>
                                    <Image source={images.baloons} style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:15}}/> 
                               </View>
                          </View>
           
                          <View style={{height:80,width:80,marginLeft:20,marginTop:10}}>
                               <View style={{flex:2}}>
                                    <Image source={images.diver} style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:15}}/> 
                               </View>
                              
                          </View>
           
                          <View style={{height:80,width:80,marginLeft:20,marginTop:10}}>
                               <View style={{flex:2}}>
                                    <Image source={images.stories} style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:15}}/> 
                               </View>
                          </View>
           
                          
           
                          
           
                        </ScrollView>           
           
                   </View>
    </View>




    <View style={{ flex: 6, backgroundColor: "#DCDCDC" , margin:4 , borderRadius:10,justifyContent:"center"  }}>
 
        <View style={{ flex: 1, backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center"   }}><Text style={{fontWeight: "bold"}}>    Notifications </Text></View>
        
     <View style={{ flex: 1,flexDirection:"row", backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center" }}>
          <View style={{flex:1,justifyContent:"center",paddingHorizontal:20}}><Text>New Episodes</Text></View><View style={{flex:1,direction:"rtl",justifyContent:"center",paddingHorizontal:20}}><Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
          
        ios_backgroundColor="#3e3e3e"
      /></View>
          </View>

      <View style={{ flex: 1,flexDirection:"row", backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center"  }}><View style={{flex:1,justifyContent:"center",paddingHorizontal:20}}><Text>Follow requests</Text></View><View style={{flex:1,direction:"rtl",justifyContent:"center",paddingHorizontal:20}}><Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
      /></View></View>

      <View style={{ flex: 1, flexDirection:"row",backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center"   }}><View style={{flex:1,justifyContent:"center",paddingHorizontal:20}}><Text>New app features</Text></View><View style={{flex:1,direction:"rtl",justifyContent:"center",paddingHorizontal:20}}><Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
      /></View></View>


   </View>   
      

    </SafeAreaView>
    
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin:10,
    backgroundColor:"white",
  },
});

export default Restaurant;