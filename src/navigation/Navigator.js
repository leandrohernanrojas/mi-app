import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSession, init } from '../config/dbSqlite';
import { deleteUser, setUser } from '../features/userSlice';

const Tab = createBottomTabNavigator()

const Navigator = () => {
  const idToken = useSelector(state => state.user.idToken)

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        await init()
        dispatch(deleteUser())
        const sessionUser = await fetchSession()
        if (sessionUser) {
          dispatch(setUser(sessionUser))
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({})

export default Navigator
