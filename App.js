import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root, Spinner } from 'native-base';
// import Login from './Component/Auth/Login';
import AppContainer from './Navigations/index';

class App extends Component {
	state = { loading: true };
	async componentDidMount() {
		await Expo.Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
		});
		this.setState({ loading: false });
	}

	render() {
		if (this.state.loading) {
			return (
				<Root>
					<Spinner color="white" />
				</Root>
			);
		}
		return (
			<Root>
				<AppContainer />
			</Root>
		);
	}
}
export default App;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
