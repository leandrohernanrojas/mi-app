import { StyleSheet, Text, View } from 'react-native'
import Categories from '../components/Categories'
import Login from './Login'
import Signup from './Signup'




const Home = () => {

    return (
        <View style={styles.container}>
            <Signup></Signup>
            {/* <Login></Login> */}
            {/* <Categories /> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     backgroundColor:"red"
    //   }
})