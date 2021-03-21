import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import Router from './app/router';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const store = configureStore({});
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
