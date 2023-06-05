import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../param/Firebase';



export default function Login({ navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const signUp = () => {
    if (password !== passwordVerification) {
      setPasswordError("Passwords don't match");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            navigation.navigate('Home');
          })
          .catch((error) => {
            console.log(error);
            alert(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.content}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Password Verification"
          style={[styles.input, passwordError ? styles.inputError : null]}
          value={passwordVerification}
          onChangeText={(text) => setPasswordVerification(text)}
          secureTextEntry={true}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={2}
        onPress={signUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.other}>
        <TouchableOpacity
          style={styles.socialButton}
          activeOpacity={2}
        >
          <AntDesign name="google" size={24} color="#181D31" />
          <Text style={styles.socialButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          activeOpacity={2}
          onPress={() => {}}
        >
          <AntDesign name="apple1" size={27} color="#181D31" />
          <Text style={styles.socialButtonText}>Sign Up with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: 50,
    alignSelf: 'center',
  },
  content: {
    width: '100%',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
  },
  input: {
    borderColor: '#181D31',
    borderWidth: 2,
    padding: 12,
    width: 300,
    fontSize: 22,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#181D31',
    padding: 10,
    width: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  other: {
    marginTop: 50,
  },
  socialButton: {
    borderColor: '#181D31',
    borderWidth: 2,
    padding: 12,
    width: 300,
    fontSize: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 12,
  },
  socialButtonText: {
    color: '#181D31',
  },
});
