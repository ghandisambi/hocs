import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import {MybottomTabs} from '../BottomTabNavigation/exportFunctionNav/MybottomTabs'

export function Navigation() {
  return (
    <NavigationContainer>
    <MybottomTabs/>
    </NavigationContainer>
  );
}