import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { color, colors } from "../Global/colors"
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useSignUpMutation } from '../seervices/auth'


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmarPassword, setConfirmarPassword] = useState('')
    const [emailError, setEmeilError] = useState('')
    const [passwordError, setPasswordError] = useState("")
    const [confirmarPasswordError, setConfirmarPasswordError] = useState('')
    const navigation = useNavigation()
    const [triggerSignUp] = useSignUpMutation()
 
    const onSubmit = async () => {
        const responder = await triggerSignUp({email,password})
        console.log(responder.error)
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Registrarse</Text>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={emailError}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={passwordError}
                />
                <InputForm
                    label="Confirmar Password"
                    value={confirmarPassword}
                    onChangeText={(t) => setConfirmarPassword(t)}
                    isSecure={true}
                    error={confirmarPasswordError}
                />
                <SubmitButton style={styles.button} onPress={onSubmit} title="Registrarme" />
                <Text style={styles.sub}>Tenes cuenta registrada?</Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.subLink}>login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    main: {
        marginTop: 100
    },
    container: {
        backgroundColor: color.card,
        padding: 20,
        margin: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        color: color.titulos,
        fontFamily: "Berkshire",
    },
    sub: {
        textAlign: "center",
        color: color.texto,
        fontFamily: "Nunito"
    },
    subLink: {
        marginTop: 15,
        textAlign: "center",
        color: color.link,
        fontFamily: "Nunito"
    },
})