// Import library
import React from 'react';
import ReactNative from 'react-native';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
	<Header />
);

// Render
ReactNative.AppRegistry.registerComponent('albums', () => App);

// Note: only the root component uses 'AppRegistry'