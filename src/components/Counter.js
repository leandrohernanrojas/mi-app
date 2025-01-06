import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice, decrement, increment,incrementByAmount } from '../features/counterSlice'

const Counter = () => {
    const [input,setInput] = useState (0)
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View>
            <Button title="-" onPress={() => dispatch(decrement())} />
            <Text>{counter}</Text>
            <Button title="+" onPress={() => dispatch(increment())} />
            <TextInput value={input} onChangeText={(t)=> setInput(parseInt(t))}/>
            <Button title="cambiar" onPress={()=> dispatch(incrementByAmount(input))}/>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({})