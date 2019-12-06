import React, { Component } from 'react';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Components/Auth/Login';
import Signup from '../Components/Auth/Signup';

const LoginStackNavigation = createStackNavigator(
	{
		Login: Login,
		Signup: Signup
	},
	{
		initialRouteName: 'Login',
		defaultNavigationOptions: ({ navigation }) => ({
			gesturesEnabled: true,
			headerStyle: {
				// backgroundColor: 'red',
				elevation: 0,
				borderBottomWidth: 0
			}
		})
	}
);

export default LoginStackNavigation;
