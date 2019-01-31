# React Native 101

Repositório dedicado aos estudos de React Native.

Lista de apps:
* Albums
* Auth
* Tech Stack
* Manager
* Rocket Uber
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

**Rules of State**
* Definition of state: a plain js object used to record and respond to user-trigged events;
* When we need to update what a component shows, call `this.setState`;
* Only change state with *setState*

## Auth

Projeto com objetivo de testar a integração com Firebase para autenticar o usuário via formulário de Login.

## Tech Stack

Projeto com objetivo de estudar Redux.

Tool: https://stephengrider.github.io/JSPlaygrounds/

Redux:
* Action: an object that tells the reducer how to change irs data;
* Store: an object that holds the application's data
	* Reducer: a function that returns some data
	* State: data for our app to use


## Manager

Projeto com objetivo de utilizar a navegação entre telas, autenticação via Firebase

### Anotações:

**Key interpolation**

```
const newState = {};
newState[action.payload.prop] = action.payload.value

```

No ES6
```
return { ...state, [action.payload.prop]: action.payload.value }
```

**Components**

* [Picker](https://facebook.github.io/react-native/docs/picker)
* [Modal](https://facebook.github.io/react-native/docs/modal)

**Database**

```
{
  "rules": {
		"users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid
      }
    }
  }
}
```

## Rocket Uber

Projeto de estudo desenvolvido com base no [vídeo](https://youtu.be/bg-U0xZwcRk).

## Referências

* [NPM JS](https://www.npmjs.com/)
* [React Native Communications](https://www.npmjs.com/package/react-native-communications)
* [React Native Maps](https://github.com/react-native-community/react-native-maps)