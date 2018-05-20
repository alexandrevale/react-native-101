import { AppRegistry } from 'react-native';
import App from './App';

expoert default class InstaluraMobile extends Component {
	render(){
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Olá Mundo
			</Text>
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