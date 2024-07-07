import { StatusBar } from "expo-status-bar";
import { StyleSheet ,Text ,View } from "react-native";
import { Link } from "expo-router";

export default function App(){


  return(
    <View className="flex-1 items-center justify-center bg-white">
      <Text className ="text-3xl font-pblack">HOME</Text>

      <StatusBar style="auto"/>
      <Link href="/home" style ={{color:'blue'}}>Home</Link>
    </View>
  );
}
// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     backgroundColor:'#fff',
//     alignItems:'center',
//     justifyContent:"center"
//   }
// })