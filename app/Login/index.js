import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginView from './view/index';
import { fetchUser } from './action';

const  LoginScreen = ({navigation}) => {
  const dispatch = useDispatch;
  const login = useSelector((state) => state.login);
  const onLogin = (userData) => {
    dispatch(fetchUser(userData));
  };
  return (
    <LoginView
      navigation={navigation}
      onLoginEvent={onLogin}
      login={login}/>
  );
};

export default LoginScreen;
