import { StyleSheet } from 'react-native'
import React from 'react'
import SignIn from './Screen/SignIn'
import SignUp from './Screen/SignUp'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/store'
const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='signUp' component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name='signIn' component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})