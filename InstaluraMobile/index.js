import { AppRegistry } from 'react-native';
import App from './App';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
const width = Dimensions.get('screen').width;

expoert default class InstaluraMobile extends Component {
	render(){
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Alexandre
			</Text>
			<Image source={required('./resources/img/alura.png')} style={{width: width, height: width}} />
		</View>
	}
}

Const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#292929'
	}
});

AppRegistry.registerComponent('InstaluraMobile', () => App);