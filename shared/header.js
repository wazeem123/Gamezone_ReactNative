import React from 'react';
import { StyleSheet,Text,View,Image, ImageBackground } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function header({navigation,title}){

    const openMenu = () => {
        navigation.openDrawer()
    }

    return(
        <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <MaterialIcons style={styles.icon} name="menu" size={28} onPress={openMenu}  />
            <View style={styles.headerTitle}>
                <Image source={require("../assets/heart_logo.png")} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        fontWeight:"bold",
        fontSize:20,
        color:"#333",
        letterSpacing:1
    },
    icon:{
        position:"absolute",
        left:16
    },
    headerTitle:{
        flexDirection:"row"
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    }
})