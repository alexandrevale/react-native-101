# react-native-101
Repositório dedicado aos estudos de React Native.
Lista de apps:
* Albums
* InstaluraMobile


## Albums

API: http://rallycoding.herokuapp.com/api/music_albums

### Anotações:
**Functional Component**
* Used for presenting static data
* Can't handle fetching data

```
const Header = () => {
	return <Text>  Functional Component </Text>
}
```

**Class Component**
* Used for dynamic sources fo data
* Handles any data that might change, for example *fetching data, user event, etc*
* Knows when it gets erendered to the device (useful for data fetching)

```
class Header extends Component {
	render() {
		return <Text> Class Component </Text>
	}
}
```