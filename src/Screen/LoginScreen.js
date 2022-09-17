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
  const [text, onChangeText] = useState();

  return (
    <View>
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
              onChangeText={onChangeText}
              value={text}
              placeholder="Email giriniz "
            />
          </View>
          <View style={styles.loginContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Password giriniz"
            />
          </View>
        </View>
      </View>
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
    color: '#fbe7e5',
  },
  loginContainer: {
    backgroundColor: '#fbe7e5',
    margin: 18,
    borderRadius: 9,
  },
  genelContainer: {
    paddingTop: 40,
  },

  textHeader: {
    color: '#fbe7e5',
    fontSize: 40,
    fontWeight: 'bold',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 95,
  },
});
