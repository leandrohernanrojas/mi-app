import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { color, colors } from "../Global/colors"
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'


const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmeilError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onSubmit = async () => {

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
        textAlign: "center",
        color: color.link,
        fontFamily: "Nunito"
    },
})