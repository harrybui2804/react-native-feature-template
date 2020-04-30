import React from 'react';
import TestScreen from '../features/test/containers';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

function NavigationStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'Test'}
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {<Stack.Screen name={'Test'} component={TestScreen} />}
    </Stack.Navigator>
  );
}

export default NavigationStack;
