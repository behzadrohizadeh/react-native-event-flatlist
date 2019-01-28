/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,Dimensions} from 'react-native';
widthd = Dimensions.get("window").width;
heightd=Dimensions.get("window").height;






export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:
  {
      minHeight:10,
      flexDirection:"row" ,
      justifyContent: "flex-start" ,
      alignItems:"stretch" ,
      width:"100%"
  }
  ,
  center:
  {
      minHeight:10,
      flexDirection:"row" ,
      justifyContent: "center" ,
      alignItems:"stretch" ,
      width:"100%"
  }
 , 
 column:{
    justifyContent:"flex-start" ,
    flexDirection:"column",
    alignItems:"stretch" ,
 },
 half:
 {

 
  width:"70%",
  height:200


 },
 subdata:
 {
   justifyContent:"flex-start" ,
    flexDirection:"column",
    alignItems:"stretch" ,
    height:120


 },
   dates:{
     

      height:120,
      justifyContent: "center" ,
      textAlign:"center" ,
      width:90,
      color:"#ffffff",
      fontSize:33,
      padding:2

   },
   
   lists:
   {
    marginTop:2 ,
    width:widthd,
    height:120,
    backgroundColor:"#ffffff",
    borderWidth:2,
    borderColor:"#cccccc" , 
    flexDirection:"row" ,
    justifyContent: "flex-start" ,
    alignItems:"stretch" ,

   },
  childimage:
  {
      height:120,
      width:120,
     
  },
title:
{

fontSize:20  ,
paddingLeft:2,
fontWeight: 'bold'
},

desciption:
  {
    color:"#9E9E9E",
    fontSize:15
  },

    
 
});