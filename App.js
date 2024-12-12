
import { StatusBar,Platform, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Header from './src/components/Header'
import Home from './src/screens/Home';
import ProductoCategory from "./src/screens/ProductCategory";
import ProductDetail from "./src/screens/ProductDetail"
import { color } from './src/Global/colors';
import { useFonts } from 'expo-font';
import { fonts } from './src/Global/fonts';
import { useEffect, useState } from 'react';

export default function App() {
  const [fontsloaded] = useFonts(fonts)
  const [portrait,setPortrait] = useState(false)
  const {width,height} = useWindowDimensions()
  
  useEffect(()=>{
    if(width > height){
      setPortrait(false)
    }else{
      setPortrait(true)
    }
  },[width,height])

  if(!fontsloaded){
    return null
  }

  const producto ={
    id : 1,
    nombre : "Almohada de Espuma Viscoelástica",
    precio: 25.99,
    imagen: "https://dormitienda.com/wp-content/uploads/ViscoFirme.jpg",
    descripcion : "Almohada ergonómica con tecnología de espuma viscoelástica para un descanso óptimo.",
    stock : 50,
    categoria : "Hogar"
}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.secundario}/>
      {/* <Home/> */}
      {/* <ProductoCategory categoria="Hogar"></ProductoCategory> */}
      <ProductDetail producto={producto}/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.secundario
    
  },
});
