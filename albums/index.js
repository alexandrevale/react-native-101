// Import library
import React from 'react';
import ReactNative from 'react-native';
import { Text, AppRegistry } from 'react-native';
// 
// Create a component
const App = () => (
	<Text>Teste</Text>
);

// Render
ReactNative.AppRegistry.registerComponent('albums', () => App);

// Note: only the root component uses 'AppRegistry'