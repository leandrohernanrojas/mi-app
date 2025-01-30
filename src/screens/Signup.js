import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { color } from "../Global/colors"
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useSignUpMutation } from '../seervices/auth'
import { useDispatch } from 'react-redux'
import { signupSchema } from '../validation/signupSchema'
import { setUser } from '../features/userSlice'
import { deleteSesion, insertSession } from '../config/dbSqlite'


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmarPassword, setConfirmarPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState("")
    const [confirmarPasswordError, setConfirmarPasswordError] = useState('')
    const navigation = useNavigation()
    const [triggerSignUp] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
        try {
            signupSchema.validateSync({ email, password, confirmarPassword })
            const response = await triggerSignUp({ email, password, confirmarPassword })
            const user = {
                email: response.data.email,
                idToken: response.data.idToken,
                localId: response.data.localId
            }
            dispatch(setUser(user))
            await deleteSesion()
            await insertSession(user.localId, user.email, user.idToken)
        } catch (error) {
            switch (error.path) {
                case "email":
                    setEmailError(error.message)
                    setPasswordError("")
                    setConfirmarPasswordError("")
                    break;
                case "password":
                    setPasswordError(error.message)
                    setEmailError("")
                    setConfirmarPasswordError("")
                    break;
                case "confirmarPassword":
                    setConfirmarPasswordError(error.message)
                    setEmailError("")
                    setPasswordError("")
                    break;
            }
        }
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
        flex:1,
justifyContent:"center"
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
        fontFamily: "Nunito"
    },
    subLink: {
        marginTop: 15,
        textAlign: "center",
        fontFamily: "Nunito"
    },
})