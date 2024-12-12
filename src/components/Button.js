import { StyleSheet, View,Text, Pressable } from 'react-native'
import { color } from '../Global/colors'
import Entypo from '@expo/vector-icons/Entypo';

const Button = ({ }) => {
    return (
        <View>
            <Pressable style={styles.container}>
                <Text>
                    <Entypo name="menu" size={30} color="negro" />
                </Text>
            </Pressable>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        Color:color.button,
        margin:10
    }
})