import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { color} from "../Global/colors"
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useLoginMutation } from '../seervices/auth'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validation/loginSchema'
import { setUser } from '../features/userSlice'
import { deleteSesion, insertSession } from '../config/dbSqlite'



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigation = useNavigation()
    const [triggerLogin] = useLoginMutation()
    const dispatch = useDispatch()

    

    const onSubmit = async () => {
        try {
                loginSchema.validateSync({email,password})
                const response = await triggerLogin({email,password})
                const user = {
                    email:response.data.email,
                    idToken:response.data.idToken,
                    localId:response.data.localId
                }
                dispatch(setUser(user))
                await deleteSesion()
                await insertSession(user.localId,user.email,user.idToken)
                } catch (error) {
                    switch (error.path) {
                        case "email":
                            setEmailError(error.message)
                            setPasswordError("")
                            break;
                        case "password":
                            setPasswordError(error.message)
                            setEmailError("")
                            break;
                    }
                }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Ingresar</Text>
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
                <SubmitButton style={styles.button} onPress={onSubmit} title="Ingresar" />
                <Text style={styles.sub}>No tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.subLink}>Signup</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

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
        margin:10,
        textAlign: "center",
        fontFamily: "Nunito"
    },
    subLink: {
        textAlign: "center",
        fontFamily: "Nunito"
    },
})