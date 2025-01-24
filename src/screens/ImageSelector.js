import { Image, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import * as ImagePicker from 'expo-image-picker'
import { usePatchImageProfileMutation } from '../seervices/user'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'



const ImageSelector = () => {
    const localId = useSelector(state => state.user.localId)
    const [image, setImage] = useState("")
    const [triggerAddImageProfile]= usePatchImageProfileMutation()
    const navigation = useNavigation()


    const pickImage = async (method) => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    
        if(!granted)return
    
        const config ={
        aspect:[1,1],
        quality:0.2,
        base64:true,
        allowsEditing:true,
    }
    const result = method == "Camera" ? 
    await ImagePicker.launchCameraAsync(config) 
    :
    await ImagePicker.launchImageLibraryAsync(config)
    
    if(result.canceled) return
    setImage("data:image/jpg;base64," + result.assets[0].base64)
    }

    const confirmImage = () => {
        triggerAddImageProfile({localId,image})
        navigation.navigate("MyProfile")
    }

    return (
        <View style={styles.container}>
            <Image
                source={image ? 
                { uri: image} : 
                require("../../assets/img/imageProfileDefault.jpeg")}
                resizeMode='cover'
                style={styles.image} />
            <SubmitButton title="Tomar Imagen con camara" onPress={() => pickImage("Camera")} />
            <SubmitButton title="Agregar Imagen de galeria" onPress={() =>pickImage("")} />
            <SubmitButton title="Confirmar Imagen" onPress={confirmImage} />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        alignItems: 'center',
        gap: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
})