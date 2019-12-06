import React, { Component } from 'react'
import {  View,Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
const width= Dimensions.get('window').width
const height= Dimensions.get('window').height
export class index extends Component {
    render() {
        return (
            <Container>
            {/* <Header /> */}
            <Content contentContainerStyle={{marginTop:70}}>
                <TouchableOpacity onPress={()=>alert('OKay')}> 
                    <Card style={{width:'80%',height:width*0.3,alignSelf:'center'}} >
                <CardItem style={styles.CardStyle}>
                    <Text style={styles.TextStyle}>
                      Make
                    </Text>
               
                </CardItem>
              </Card></TouchableOpacity>
             
               <View style={{height:100 , borderColor:0, borderWidth:0}}/> 
              <Card style={{width:'80%',height:width*0.3,alignSelf:'center'}}>
                <CardItem style={styles.CardStyle}>
                
                    <Text style={styles.TextStyle}>
                      Test
                    </Text>
                </CardItem>
              </Card>
            </Content>
          </Container>
        )
    }
}

export default index

const styles = {
    CardStyle:{
        justifyContent:'center',flex:1,alignSelf:'center',alignContent:'center'
    },
    TextStyle:{
        alignSelf:'center'
    }
}