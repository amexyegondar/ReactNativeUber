import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import {Link} from '@react-navigation/native';
import NavFavorite from './NavFavorite';
import { Icon } from 'react-native-elements';
const NavigateCard = () => {
    const dispatch=useDispatch();
    const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`bg-white  flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, codeGhost</Text>
      <View style={tw`border-t border-gray-200 flex-shrink` }>
     <View>
     {/* <Link to='/RideOptionsCard'> */}
     <GooglePlacesAutocomplete
        styles={{
          container:{
            paddingTop:20,
            backgroundColor:'white',
            flex:0,
          },
          textInput:{
        fontSize:18,
        backgroundColor:'#dddddf',
        borderRadius:0,
        

          },
        }}
        enablePoweredByContainer={false}
        minLength={2}
        returnKeyType={'search'}
        onPress={(data,detail)=>{
           dispatch(setDestination({
            location:detail.geometry.location
           }))
        }}
        fetchDetails={true}

        query={{
         key:"AIzaSyAJ4g-drGeLzM0J00XQIOPlVbdOCJcely8",
          language:'en',
        }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder='Where To?'
        />
        {/* </Link> */}
     </View>
     <NavFavorite/>
      </View>
      <View style={tw`flex-row bg-white justify-evenly mb-1 border-t border-gray-100`}>
        <TouchableOpacity style={tw`flex flex-row bg-black 
        justify-between w-24 px-4 py-3 rounded-full`}
        onPress={()=>navigation.navigate('RideOptionsCard')}>

          <Icon name='car' type='font-awesome' color='white' size={16}/>

          <Text style={tw`text-white text-center`}>Ride</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between px-4 py-3 `}>

          <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})