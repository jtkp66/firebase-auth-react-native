import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCNx4yXaGxfDInKk8qKxLXKChmTk5klLb8",
      authDomain: "one-time-password-56a7d.firebaseapp.com",
      databaseURL: "https://one-time-password-56a7d.firebaseio.com",
      projectId: "one-time-password-56a7d",
      storageBucket: "one-time-password-56a7d.appspot.com",
      messagingSenderId: "854401838397"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
