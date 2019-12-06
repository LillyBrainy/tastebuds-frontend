import jwt_decode from 'jwt-decode';
import { decorate, observable } from 'mobx';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Toast } from 'native-base';

//172.20.10.7
class AuthStore {
	user = null;
	userProfileId = null;
	userInfoPost = null;

	signupUser = async (userData, navigation) => {
		try {
			const res = await axios.post('http://192.168.43.215:8000/signup/', userData);
			const data = res.data;
			this.setUser(data.token);
			// navigation.navigate('Dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	loginUser = async (userData, navigation) => {
		try {
			const res = await axios.post('http://192.168.43.215:8000/login/', userData);
			const user = res.data;
			this.setUser(user.token);
			navigation.navigate('Dashboard');
		} catch (error) {
			console.log(error);
		}
	};
	logoutUser = async (navigation) => {
		this.setUser();
		navigation.navigate('welcome');
	};

	setUser = async (token) => {
		if (token) {
			axios.defaults.headers.common.Authorization = `JWT ${token}`;

			// axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
			const decodedUser = jwt_decode(token);
			this.user = decodedUser;
			await this.getUserProfileID(this.user.user_id);

			await AsyncStorage.setItem('myToken', token);
		} else {
			delete axios.defaults.headers.common.Authorization;
			await AsyncStorage.removeItem('myToken');
			this.user = null;
		}
	};

	getUserProfileID = async (UserID) => {
		try {
			const res = await axios.get(`http://172.20.10.7:8000/getUserinfo/${UserID}/`);
			const data = res.data;
			this.userProfileId = data;
		} catch (error) {
			console.log(error);
		}
	};

	checkForToken = async () => {
		const token = await AsyncStorage.getItem('myToken');
		if (token) {
			const currentTime = Date.now() / 1000;
			const user = jwt_decode(token);
			if (user.exp >= currentTime) {
				this.setUser(token);
			} else {
				this.setUser();
			}
		}
	};
}

decorate(AuthStore, {
	user: observable,
	userInfoPost: observable,
	userProfileId: observable
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
