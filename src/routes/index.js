import React from 'react'
import {SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'bootstrap/dist/css/bootstrap.min.css';

import Tab from './Tab'

const Routes = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            
            <Tab />
          
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Routes