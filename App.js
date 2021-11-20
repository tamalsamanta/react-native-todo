import React, { useState } from 'react'
import { View, StatusBar, FlatList, Button, Text, StyleSheet } from 'react-native'
import styled from 'styled-components'
import AddInput from './Components/AddInput'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Empty from './Components/Empty'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const getFonts = () =>
  Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
  })

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key)
    })
  }

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Radhe Radhe' }}
          />
          <Stack.Screen name="Welcome" component={AddInput} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true)
        }}
        onError={console.warn}
      />
    )
  }
}

const HomeScreen = ({ navigation }) => {
  return(
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#d6eadf" />
      </View>
      <View>
        <Empty/>
      </View>
      <Pressable style = {styles.button} onPress = {() => {navigation.navigate('Welcome')}}>
        <Text>Get Started</Text>
      </Pressable>
    </ComponentContainer>
  )
}

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const ComponentContainer = styled.View`
  background-color: #d6eadf;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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