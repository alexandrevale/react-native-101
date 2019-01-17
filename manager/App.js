import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

export default class App extends Component<Props> {
  componentWillMount() {

    // Initialize Firebase
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };

    firebase.initializeApp(config);
  };
  

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Olá Mundo</Text>
        </View>
      </Provider>
    );
  }
}
