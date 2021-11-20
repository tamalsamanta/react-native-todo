import React, { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import styled from 'styled-components'

import { Header } from '../Components/Header'

import { AntDesign } from '@expo/vector-icons'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const date = new Date().toDateString()

export default function AddInput() {

  return (
    <UserContainer>
      <Text>{date}</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hi, Sunita</Text>
      <HealthScore>
        <View style={{
          width: 50,
          height: 50,
          backgroundColor: '#96e3b7',
          borderRadius: 25,
          margin: 10,

          justifyContent: 'center'}}>
          <Text style={{fontSize: 20,textAlign: 'center'}}>84</Text>
        </View>
        <Timepass>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 7 }}>Health Score</Text>
          <Text style={{ fontSize: 18 }}>Based on your overall health test, your score is 84 and is considered pretty good...</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#96e3b7', marginTop: 5}}>Read More</Text>
        </Timepass>
      </HealthScore>
      <Text style={{ fontSize: 22, marginTop: 15, fontWeight: 'bold' }}>Metrics :</Text>

      <View style = {{height: 200, backgroundColor:'#a8dfff', marginTop:25, borderRadius: 20, flexDirection: 'row'}}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', margin: 20, marginTop: 10}}>DRINK WATER</Text>
        <Image style={{ width: 125, height: 125, margin: 20, marginTop: 0, borderRadius: 10 }} source={require('../assets/images/water.jpg')}/>
        </View>
        <Text style = {{width: 150, color: 'white', marginTop: 50}}>Getting enough water every day is important for your health. Drinking water can prevent dehydration, a condition that can cause unclear thinking</Text>
      </View>

      <View style={{marginTop: 25, flexDirection: 'row'}}>
        <Card1>
          <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold'}}>CALORIES</Text>
          <Image style={{ width: 125, height: 125, margin: 13 }} source={require('../assets/images/circle.png')}/>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>500 CAL</Text>
          <Text style={{fontSize: 12, color: 'white' }}>Checked : 20 mins ago</Text>
        </Card1>
        <Card2>
          <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold'}}>MEDITATION</Text>
          <Image style={{ width: 125, height: 125, margin: 13, borderRadius: 10 }} source={require('../assets/images/med.jpg')}/>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>30 MINS</Text>
          <Text style={{fontSize: 12, color: 'white' }}>Checked : 2 hr ago</Text>
        </Card2>
      </View>   
      
      

      <Text style={{ fontSize: 22, marginTop: 15, fontWeight: 'bold' }}>Insights :</Text>
      
      <View style={{marginTop:25}}>
        <Image style={{ width: 350, height: 520 }} source={require('../assets/images/mask.png')}/>
      </View>
      

    </UserContainer>
  )
}

const Card1 = styled.View`
  border-radius: 20px;
  padding: 10px;
  margin-right: 5px;
  height: 250px;
  width: 171px;
  background-color: #95edb3;
`

const Card2 = styled.View`
  border-radius: 20px;
  padding: 10px;
  margin-left: 5px;
  height: 250px;
  width: 171px;
  background-color: #95edca;
`

const Timepass = styled.View`
  width: 250px;
  margin: 20px;
`

const HealthScore = styled.View`
  background-color: white;
  margin-top: 20px
  border-radius: 20px;
  flex-direction: row;
`

const Circle = styled.View`
  border-radius : 50px;
  padding : 20px
  background-color : #b3deaf;
`

const UserContainer = styled.ScrollView`
  margin: 20px;
  flex-direction: column;
`

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 52,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  }
})