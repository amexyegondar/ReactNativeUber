import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker }  from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { setOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env';

const Map = () => {
    // const origin=useSelector(setOrigin);
    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};

   const MapRef=useRef(null);
   useEffect(()=>{
  MapRef.current.fitToSuppliedMarkers([origin,destination],{
    edgePadding:{top:50,right:50,bottom:50,left:50}
  });

   });
  return (
    <MapView
    ref={MapRef}
    style={tw`flex-1`}
  initialRegion={{
    latitude: 37.78825 ,//origin.location,lat,
    longitude: -122.4324,//origin.location.lng
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}

>
{/* <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeColor='black'
    strokeWidth={3}
  /> need developers account*/}


<Marker coordinate={{
  
    latitude:37.3318456,
    longitude: -122.0296002,
   
}}
title='Origin'
identifier='Origin'
/>
<Marker coordinate={{
  
    latitude:37.771707,
    longitude: -122.4053769,
    
}}
title='Destination'
identifier='Destination'
/>
</MapView>
  )
}

export default Map

const styles = StyleSheet.create({})