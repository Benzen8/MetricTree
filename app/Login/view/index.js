import React, { useState, createRef } from 'react';
import { View, Text, TextInput, Image, Keyboard, TouchableOpacity } from 'react-native';
import styles from './style';

const  LoginView = (navigation, props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const passwordInputRef = createRef();
  const { onLoginEvent } = props;

  console.log('LoginView', navigation, props);
  const handleSubmitPress = () => {
    console.log('LoginView', navigation, props);
    if (!userEmail) {
      // eslint-disable-next-line no-alert
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      // eslint-disable-next-line no-alert
      alert('Please fill Password');
      return;
    }
    let dataToSend = { email: userEmail, password: userPassword };
    if (!!userEmail && !!userPassword) {
      onLoginEvent(dataToSend);
      navigation.navigate('DashBoard');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://metrictreelabs.com/wp-content/uploads/2020/01/logogrey-3.png',
        }} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserEmail) =>
            setUserEmail(UserEmail)
          }
          placeholder="Enter Email" //dummy@abc.com
          placeholderTextColor="#8b9cb5"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current &&
            passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(UserPassword) =>
            setUserPassword(UserPassword)
          }
          placeholder="Enter Password" //12345
          placeholderTextColor="#8b9cb5"
          keyboardType="default"
          ref={passwordInputRef}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          secureTextEntry={true}
          underlineColorAndroid="#f000"
          returnKeyType="next"
        />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitPress}
      >
        <Text style={styles.buttonTextStyle}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginView;
