import {  StatusBar, StyleSheet, View} from 'react-native';
import { color } from './src/Global/colors';
import { useFonts } from 'expo-font';
import { fonts } from './src/Global/fonts';
import Navegator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import {store} from "./src/store"



export default function App() {
  
  const [fontsloaded] = useFonts(fonts)
  
  if (!fontsloaded) {
    return null
  }

  return (
    <>
      <Provider store={store}>
        <Navegator />
      </Provider>
      <StatusBar backgroundColor={color.secundario} />
    </>
  );
}


const styles = StyleSheet.create({
});
