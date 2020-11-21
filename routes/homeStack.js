import { createStackNavigator, HeaderTitle } from "react-navigation-stack"
import ReviewDetails from "../screens/reviewDetails"
import Home from "../screens/home"
import Header from "../shared/header"
import React from 'react';


const screens={
Home:{
    screen:Home,
    navigationOptions:({navigation})=>{
        return{
            headerTitle:()=><Header navigation={navigation} title="GameZone"/>
        }
    }
},
ReviewDetails:{
    screen:ReviewDetails,
    navigationOptions:{
        title:"Review Details"
    }
},
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:"#444",
        headerStyle:{
            backgroundColor:"#eee",height:60
        }
    }
})

export default HomeStack