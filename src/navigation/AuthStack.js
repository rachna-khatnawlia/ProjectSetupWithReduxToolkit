//import liraries
import React from 'react';
import {Login} from '../Screens';
import navigationStrings from './navigationStrings';

// create a component
const AuthStack = Stack => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </>
  );
};

//make this component available to the app
export default AuthStack;