import React, { Component } from 'react';
// import Image from 'react-native-scalable-image';
import { Dimensions, ImageBackground, StyleSheet, KeyboardAvoidingView,ScrollView } from 'react-native';
// import background from '../../../assets/background.png'
import { Container, Content,Row, ListItem,Body,Item, Input, View, Button,Left, Text,CheckBox, Right,Header,Form } from 'native-base';
 import authStore from '../../Stores/authStore/AuthStore';
import { observer } from 'mobx-react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Signup extends Component {
	componentDidMount() {

		 const user = authStore.user;
		if (user) {
			this.props.navigation.navigate('Dashboard');
		}
	}

	state = {
		username: '',
        password: '',
        // checked:false,
	};
	// handleLogin = () => {
	// 	const navigation = this.props.navigation;
	// 	 authStore.loginUser(this.state, navigation);
    // };
    handleSignup = () => {
		const navigation = this.props.navigation;
        //  authStore.loginUser(this.state, navigation);
        // authStore.signupUser()
        navigation.navigate('Dashboard');
    };
	render() {
        // const {checked}=this.state;
		return (
            <Container>
        {/* <Header /> */}

       
            {/* <ScrollView style={{flex:1,justifyContent:'center', alignContent:'center'}}> */}
          <Content contentContainerStyle={{flex:1,justifyContent:'center'}} >
          <Form >
            <Item >
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Item last>
              <Input placeholder="Confirm Password" />
            </Item>
            {/* <ListItem style={{borderBottomColor: 0}}>
            <CheckBox checked={checked} onPress={()=>this.setState({checked:!checked})}/>
            <Body>
              <Text>Remember me</Text>
            </Body>
          </ListItem> */}
            {/* <Item style={{padding:20, borderBottomColor: 0}}>
            
            <Right> 
                <TouchableOpacity>
              <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </Right>

            </Item> */}
            
        
            <Item style={styles.Item}>
			 		<Button style={styles.Button} onPress={() => this.handleSignup()}>
			 			<Text style={styles.Text}>Signup</Text>
			 		</Button>
			 	</Item>
                 {/* <Item style={{marginTop:20, borderBottomColor: 0,alignSelf:'center'}}>
                <TouchableOpacity onPress={()=>this.handleSignup()}>
              <Text>Don't have an account? Sign up</Text>
              </TouchableOpacity>

            </Item> */}
           
          </Form>
        </Content>

          {/* </ScrollView> */}
      </Container>
			// <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
			// <KeyboardAvoidingView style={styles.View} behavior="height" enabled>
			// 	<Item style={styles.Item}>
			// 		<Input
			// 			placeholder="username "
			// 			style={styles.Input}
			// 			onChangeText={(username) => this.setState({ username })}
			// 		/>
			// 	</Item>
			// 	<Item style={styles.Item}>
			// 		<Input
			// 			placeholder="password"
			// 			style={styles.Input}
			// 			secureTextEntry={true}
			// 			onChangeText={(password) => this.setState({ password })}
			// 		/>
			// 	</Item>
            //     <Item style={styles.Item}>
                    
			// 			<Text style={styles.Text}>Forgot Password ?</Text>
					
			// 	</Item>
			// 	<Item style={styles.Item}>
			// 		<Button style={styles.Button} onPress={() => this.handleLogin()}>
			// 			<Text style={styles.Text}>Login</Text>
			// 		</Button>
			// 	</Item>
			// 	<Item Button style={styles.Item} onPress={() => this.props.navigation.navigate('Signup')}>
			// 		<Text note style={{ color: '#fff', alignSelf: 'flex-start' }}>
			// 			Don't have an account? Signup
			// 		</Text>
			// 	</Item>
			// </KeyboardAvoidingView>

			// </ImageBackground>
		);
	}
}

export default observer(Signup);
const styles = StyleSheet.create({
	View: {
		flex: 1,

		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
	Item: {
        alignSelf:'center',
		padding: 10,
        borderBottomColor: 0,
        borderWidth:1
	},
	Input: {
		backgroundColor: '#fff',
		borderRadius: 10,
		borderColor: 'red',
        fontSize: 15,
        borderWidth:1
	},
	Button: {
		backgroundColor: 'blue',
		borderRadius: 10,
		width: 153,

		justifyContent: 'center'
	},
	Text: {
		color: '#fff'
	}
});
