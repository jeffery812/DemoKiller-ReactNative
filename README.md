# Demo Killer for React-Native
## How to run it
* Make sure **package.json** has correct **react-native** dependency:

>"react-native": "0.47.2",
>
>"~~react-native~~": "~~https://github.com/expo/react-native/archive/sdk-20.0.0.tar.gz~~"


```json
{
	"name": "DemoKiller",
	"version": "0.0.1",
	"private": true,
	"scripts": {
		"start": "node node_modules/react-native/local-cli/cli.js start",
		"test": "jest"
	},
	"dependencies": {
		"react-native": "0.47.2",
		"react": "16.0.0-alpha.12",
		"react-native-vector-icons": "^4.3.0",
		"react-navigation": "^1.0.0-beta.11",
		"react-redux": "^5.0.6",
		"redux": "^3.7.2"
	},
	"devDependencies": {
		"babel-jest": "20.0.3",
		"babel-preset-react-native": "3.0.1",
		"jest": "20.0.4",
		"react-test-renderer": "16.0.0-alpha.12"
	},
	"jest": {
		"preset": "react-native"
	},
}
```

* Remove **node_modules** and reinstall it

``` 
$: rm -rf node_modules/
$: yarn
```

* Run it 

```
$: react-native run-ios
```

## How to run/publish it in Expo

* Make sure package.json has correct react-native dependency:

>"~~react-native~~": "~~0.47.2~~",
>
>"react-native": "https://github.com/expo/react-native/archive/sdk-20.0.0.tar.gz"
>

```json
{
	"name": "DemoKiller",
	"version": "0.0.1",
	"private": true,	
	"dependencies": {
		"expo": "^20.0.0",
		"react-native": "https://github.com/expo/react-native/archive/sdk-20.0.0.tar.gz",
		"react": "16.0.0-alpha.12",
		"react-native-vector-icons": "^4.3.0",
		"react-navigation": "^1.0.0-beta.11",
		"react-redux": "^5.0.6",
		"redux": "^3.7.2"
	},	
	"description": "Hello Expo!",
	"author": "Zhihui Tang",
	"main": "node_modules/expo/AppEntry.js"

}
```

* Remove **node_modules** and reinstall it

``` 
$: rm -rf node_modules/
$: yarn
```

* Run it from Expo: 
 https://expo.io/@zhihuitang/demo-killer

or scan it from Expo

 ![expo-qr-code](./resources/expo.png?raw=true "Title")


## So the combined configuration is as follows

```json
{
	"name": "DemoKiller",
	"version": "0.0.1",
	"private": true,
	"scripts": {
		"start": "node node_modules/react-native/local-cli/cli.js start",
		"test": "jest"
	},
	"dependencies": {
		"expo": "^20.0.0",
		
		/** Keep one react-native ONLY when run it **/
		"react-native": "0.47.2",
		"react-native": "https://github.com/expo/react-native/archive/sdk-20.0.0.tar.gz",
		/** Keep one react-native ONLY when run it **/
		"react": "16.0.0-alpha.12",
		"react-native-vector-icons": "^4.3.0",
		"react-navigation": "^1.0.0-beta.11",
		"react-redux": "^5.0.6",
		"redux": "^3.7.2"
	},
	"devDependencies": {
		"babel-jest": "20.0.3",
		"babel-preset-react-native": "3.0.1",
		"jest": "20.0.4",
		"react-test-renderer": "16.0.0-alpha.12"
	},
	"jest": {
		"preset": "react-native"
	},

	"description": "Hello Expo!",
	"author": "Zhihui Tang",
	"main": "node_modules/expo/AppEntry.js"

}
```


