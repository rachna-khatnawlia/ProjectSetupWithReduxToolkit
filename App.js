//import liraries
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Routes from './src/navigation/Routes';
import { store } from './src/redux/store';

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

//make this component available to the app
export default App;