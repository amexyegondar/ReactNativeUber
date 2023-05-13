import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {setDestinaiton,setOrigin} from  '../slices/navSlice'
import NavFavorite from '../components/NavFavorite';
const Homescreen = () => {
  const dispatch = useDispatch()  
  return (
    <SafeAreaView style={[tw`bg-white h-full`,{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }]}>
     
     <View style={tw`p-5`}>
     <Image
        style={{width:120,height:120,resizeMode:'contain'}}
        source={{
            uri: "https://links.papareact.com/gzs"
        }}/>
        <GooglePlacesAutocomplete
        styles={{
          container:{
            flex:0,
          },
          textInput:{
        fontSize:20,
          },
        }}
        enablePoweredByContainer={false}
        minLength={2}
        returnKeyType={'search'}
        onPress={(data,detail)=>{
           dispatch(setOrigin({
            location:detail.geometry.location
           }))
           dispatch(setDestinaiton(null))
        }}
        fetchDetails={true}

        query={{
         key:"AIzaSyAJ4g-drGeLzM0J00XQIOPlVbdOCJcely8",
          language:'en',
        }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder='Where From?'
        />
        <NavOptions/>
        <NavFavorite/>
     </View>
     
    </SafeAreaView>
  )
}
export default Homescreen;

const styles = StyleSheet.create({})