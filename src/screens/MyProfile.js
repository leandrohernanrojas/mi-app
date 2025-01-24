import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useGetUserQuery } from '../seervices/user'
import { useSelector } from 'react-redux'


const MyProfile = () => {
    const navigation = useNavigation ()
    const localId = useSelector(state => state.user.localId)
    const {data:user,isLoading} = useGetUserQuery ({localId})

    if(isLoading) return <View><Text>Cargando...</Text></View>
    
    return (
        <View style={styles.container}>
            <Image 
            source={user?.image ? {uri:user.image} : require("../../assets/img/imageProfileDefault.jpeg")}
                resizeMode='cover'
                style={styles.image} />
            <SubmitButton title="agregar imagen de perfil" on onPress={() => navigation.navigate("ImageSelector")}/>
            <SubmitButton title="agregar localizacion" on onPress={() => navigation.navigate("LocationSelector")} />
        <View>
            <Text>{user?.address}</Text>
        </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },

})