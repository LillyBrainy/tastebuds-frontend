import React, { Component } from 'react';
import { Icon } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import HomeStackNavigation from './HomeStack';
import LoginStackNavigation from './LoginStack';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Components/Home/index';
// import CalenderStackNavigation from './CalenderStack';
// import ProfiletackNavigation from './ProfileStack';
// import SearchStackNavigator from './SearchStack';
// import NotificationStackNavigation from './NotificationStack';
// import CameraSnap from '../Home/Camera';

// const BottomTabNavigator = createBottomTabNavigator(
// 	{
// 		Home: { screen: HomeStackNavigation },
// 		Search: { screen: SearchStackNavigator },
// 		Calender: { screen: CalenderStackNavigation },
// 		Notification: { screen: NotificationStackNavigation },
// 		Profile: { screen: ProfiletackNavigation }
// 	},
// 	{
// 		defaultNavigationOptions: ({ navigation }) => ({
// 			tabBarIcon: ({ tintColor }) => {
// 				const { routeName } = navigation.state;
// 				let iconName;
// 				if (routeName === 'Home') {
// 					iconName = 'ios-home';
// 					iconType = 'Ionicons';
// 				} else if (routeName === 'Calender') {
// 					iconName = 'calendar';
// 					iconType = 'FontAwesome';
// 				} else if (routeName === 'Profile') {
// 					iconName = 'ios-person';
// 					iconType = 'Ionicons';
// 				} else if (routeName === 'Search') {
// 					iconName = 'ios-search';
// 					iconType = 'Ionicons';
// 				} else if (routeName === 'Notification') {
// 					iconName = 'ios-notifications';
// 					iconType = 'Ionicons';
// 				}
// 				return <Icon name={iconName} style={{ color: tintColor, fontSize: 30 }} type={iconType} />;
// 			}
// 		}),
// 		tabBarOptions: {
// 			showLabel: false,
// 			activeTintColor: '#31CBC4',
// 			inactiveTintColor: '#707070',
// 			style: {
// 				backgroundColor: '#FFFFFF'
// 			},
// 			labelStyle: {
// 				fontSize: 12
// 			}
// 		}
// 	}
// );

const HomeNavigator = createStackNavigator(
    {
        Home:Home
    }
)
const SwitchNavigator = createSwitchNavigator({
	login: { screen: LoginStackNavigation },
     Dashboard:{screen:HomeNavigator},
	// Camera:{screen:CameraSnap},
});

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
