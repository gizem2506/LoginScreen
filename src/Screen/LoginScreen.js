import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import bg1 from '../assets/Image/bg1.jpg';
import {Dimensions} from 'react-native';
import {stringify} from 'querystring';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageContainer}
          source={bg1}
          resizeMode="cover"
          alt="background"></ImageBackground>
      </View>
      <View style={styles.fullContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>Travel to Space</Text>
        </View>
        <View style={styles.genelContainer}>
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.input}
              onChangeText={email => setEmail(email)}
              placeholder="Email giriniz "
            />
          </View>
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              placeholder="Password giriniz"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.forgotButton} onPress={null}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={null}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    height: height,
    width: width,
  },
  fullContainer: {
    paddingTop: 65,
  },
  button: {
    backgroundColor: '#eb7269',
    width: 90,
    height: 50,
    borderRadius: 19,
    alignSelf: 'center',
    padding: 13,
    margin: 20,
  },

  loginText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fddfda',
  },
  loginContainer: {
    backgroundColor: '#fddfda',
    borderRadius: 9,
    height: 50,
    marginBottom: 20,
  },
  genelContainer: {
    paddingTop: 40,
  },

  textHeader: {
    color: '#eb7269',
    fontSize: 40,
    fontWeight: 'bold',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
  },
  forgotButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotText: {
    //textAlign: 'flex-end',
    color: '#eb7269',
    fontSize: 15,
    marginTop: 15,
  },
});
