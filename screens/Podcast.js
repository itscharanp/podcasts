import React from "react";
import { StyleSheet, Text, View ,SafeAreaView} from "react-native";
import { icons, images, SIZES, COLORS, FONTS} from '../constants';

const Podcast = () => {
  return (
    <SafeAreaView style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>

      <View style={{ flex: 1.5, backgroundColor: "#3399FF" }} >
<View style={{ flex: 1, backgroundColor:"#3399FF",paddingHorizontal:10,justifyContent:"center",color:"white"}} ><Text style={{fontSize:12,color:"white"}}>Back</Text> </View>
      
      
      
      
      <View style={{ flex: 3, backgroundColor: "blue",flexDirection:"row"}} >
      
      <View style={{ flex: 1, backgroundColor: "#3399FF"}}> </View>
      
      <View style={{ flex: 2.3, backgroundColor: "#3399FF"}}> </View>
      <View style={{ flex: 1, backgroundColor: "#3399FF"}}> </View>
      
      </View>
      
      
      
      
      
      
      <View style={{ flex: 1, flexDirection:"row", backgroundColor: "#3399FF"}}>
       <View style={{ flex: 1, backgroundColor: "#3399FF"}} ></View>
       <View style={{ flex: 2, backgroundColor: "#3399FF",justifyContent:"center",paddingHorizontal:10}} ><Text style={{fontSize:11,color:"white"}}> Good Morning America</Text><Text style={{fontSize:9,paddingHorizontal:30,margin:"2%",color:"white"}}> Mike o conel</Text></View>
        <View style={{ flex: 1, backgroundColor: "#3399FF"}} ></View>
      </View>
      
      
      
      <View style={{ flex: 1, backgroundColor: "#3399FF"}} ></View> 
      </View>
      
      <View style={{ flex: 1.3, backgroundColor: "#3399FF" }} >
          <View style={{ flex: 1, backgroundColor: "#F5F5F5",borderTopLeftRadius:10, borderTopRightRadius:10}} >
      
      
       </View> 
      
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});

export default Podcast;