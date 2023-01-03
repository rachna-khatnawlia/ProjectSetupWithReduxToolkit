//import liraries
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

// create a component
const Routes = () => {
  const loginStatus = useSelector(state => state?.auth?.userLoginStatus);
  console.log(loginStatus, 'loginStatus on routes');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loginStatus ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Routes;
