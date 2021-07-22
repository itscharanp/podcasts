import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput
} from "react-native";




import { icons, images, SIZES, COLORS, FONTS } from '../constants'



const DATA = [
    
    {
      id: '1',
      title: 'Good Morning America',
    },
    {
      id: '2',
      title: 'Air Ballons with Kooen Book',
    },
    {
      id: '3',
      title: 'Market Analytics',
    },
    {
        id: '4',
        title: 'The Venice Killer',
    }, 
    {
        id: '5',
        title: 'Up all Night',
      }, {
        id: '6',
        title: 'Quiet Town of Tokyo',
      }, {
        id: '7',
        title: 'Bitcoin Bull Market',
      }, {
        id: '8',
        title: 'Bootstrapping Your Ideas',
      }, {
        id: '9',
        title: 'Air Balloons with Jorn van Dijk',
      },
      {
        id: '10',
        title: 'When Were home',
      },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image 
                        source={icons.add}
                        resizeMode="contain"
                        style={{
                            width: 10,
                            height: 10,
                            alignSelf: 'flex-end'
                        }}
                    
                    /> 
    </View>
  );




function renderHeader() {
    return (
        <View style={styles.header1}>
            <View style={styles.header2}>
                <TextInput
                    placeholder="Search..."
                    placeholderTextColor={COLORS.black}
                    style={styles.header3}
                />
            </View>
        </View>

    )
}












function renderMainCategories() {
    return (
        <View style={styles.main1}>
            <Text style={styles.main2}>Podcasts</Text>
            <Text style={styles.main3}>Discover</Text>
        </View>
    )
}    







const Playlist = () => {

     const renderItem = ({ item }) => (
    <Item title={item.title} />
    
  );
  


    return(
        <SafeAreaView>
                

                
            <FlatList style={styles.flist} nestedScrollEnabled
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },

    item: {
        fontSize:20,
        padding: 4,
        marginVertical: 8,
        marginHorizontal: 16,
      },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    header1:{
      flexDirection: 'row', 
      height: 50
    },
    header2:{
      flex: 1,
       alignItems: 'center',
      justifyContent: 'center' 
    },
    header3:{
      width: '90%',
      height: "80%",
      backgroundColor: COLORS.thrid,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      borderRadius: SIZES.radius
    },
    main1:{
      padding: SIZES.padding * 2 
    },
    main2:{
      ...FONTS.h1
    },
    main3:{
      ...FONTS.h1 , color:COLORS.blue,marginTop:5
    },
    flist:{
      marginTop:20,fontSize:20
    }
    

})


export default Playlist;