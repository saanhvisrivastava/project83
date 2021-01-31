import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js'

export default class MyDonationScreen extends Component {
  constructor(){
    super()
    this.state={
      donorId:firebase.auth().currentUser.email,
      donorName:'',
      allDonations:[]

    }
  }
  getDonorDetails=(donorId)=>{
    db.collection('users').where('email_id','==',donorId).get()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        this.setState({
          donorName:doc.data().first_name+""+doc.data().last_name
    
        })
      })
    })
    }
  render(){
    return(
      <View>
        <Text> This is MyDonationScreen</Text>
      </View>
    )
  }
}
  

   

   


   
    

const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  },
  subtitle :{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  }
})
