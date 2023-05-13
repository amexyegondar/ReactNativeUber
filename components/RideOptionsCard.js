import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const RideOptionsCard = () => {
  const[selected,setSelected]=useState(null);
  const data=[
    {
      id:'100',
      title:'Uber  X',
      multiplier:1,
      image:'https://links.papareact.com/3pn'
    },{
      id:'101',
      title:'Uber XL',
      multiplier:1.2,
      image:'https://links.papareact.com/5w8'
    },{
      id:'102',
      title:'Uber LUX',
      multiplier:1.75,
      image:'https://links.papareact.com/7pf'
    }
  ]
  const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
    <View style={{marginTop:-15}}>
      <TouchableOpacity style={[tw`absolute top-1 z-50 left-5 p-3 rounded-full`]}
      onPress={()=>navigation.navigate('NavigateCard')}
      
      >
      
        <Icon name='chevron-left' type='fontawesome'/>
      </TouchableOpacity>
    <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
    </View>
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
  renderItem={({item:{id,title,multiplier,image,},item})=>(
 <TouchableOpacity style={[tw`flex-row items-center justify-between px-10 
 ${id===selected?.id && 'bg-gray-200'}`,{height:80}]}
 
 onPress={()=>setSelected(item)}
 >
 <Image
  style={{
    width:100,
    height:100,
    resizeMode:'contain',
  }}
  source={{
    uri:image

  }}
 />
 <View style={tw`-ml-6`}>
  <Text style={tw`text-xl font-semibold`}>
  {title}
  </Text>
  <Text>
Travel Time...
  </Text>
 </View>
 <Text style={tw`text-xl`}>$9</Text>
 </TouchableOpacity> 
  )}
    />
     <View>
      <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}` }>
        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})