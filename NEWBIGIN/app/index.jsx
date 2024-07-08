import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet ,Text ,View,Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from '../constants'

export default function App(){


  return(
 <SafeAreaView className = "bg-primary h-full">
  <ScrollView contentContainerStyle = {{height:"100%"}}>
    <View className = "w-full justify-center items-center h-full px-4">

      <Image
      source={images.logo}
      className ="w-[130px] h-[84px]"
      resizeMode="contain"
         />

    <Image
    source={images.cards}
    className="max-w-[380px] w-full h-[300px]"
    resizeMode="contain"

    />

<View className="relative mt-5">
<Text className = "text-2xl text-white font-bold text-center">
Discover Great Possibilities with {''}
<Text className = "text-secondary-200">MUTUKU</Text>
</Text>
<Image
source={images.path}
className="w-[136px] h-[15px] absolute -bottom-2  right-12"
resizeMode="contain"/>
 
</View>

<Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
  Where Creativity meets Innovation:embark on endless journey
</Text>
    </View>

  </ScrollView>

 </SafeAreaView>
  );
}
