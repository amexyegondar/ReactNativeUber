
import { KeyboardAvoidingView, Platform} from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import {store} from './store'
import Homescreen from './screens/Homescreen'
import MapScreen from './screens/MapScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler'
 const App = () => {
  const Stack = createNativeStackNavigator();

  return (
   <Provider store={store}>
   <NavigationContainer>
   <SafeAreaProvider>
   <KeyboardAvoidingView
   behavior={Platform.OS=='ios' ? 'padding' : 'height'}
    style={{flex:1}}>
   <Stack.Navigator>
    <Stack.Screen
      name='Homescreen'
      component={Homescreen}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen
      name='MapScreen'
      component={MapScreen}
      options={{
        headerShown:false
      }}
    />
 
   </Stack.Navigator>
   </KeyboardAvoidingView>
   
   
   </SafeAreaProvider>
   </NavigationContainer>
   
      
    </Provider>
    
    
  )
}

export default App



