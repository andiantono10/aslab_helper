import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { StyleSheet, Text, View, AsyncStorage, Alert, ImageBackground, Image, KeyboardAvoidingView } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            npm: '',
            pass: ''
        }
    }

    UserLoginFunction = () => {
        const { npm } = this.state;
        const { pass } = this.state;

        fetch('http://aslabhelper.net/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                npm: npm,
                pass: pass
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'Logged In') {
                    this._signInAsync();
                    this.props.navigation.navigate('Beranda', { npm: npm });

                } else {
                    Alert.alert(
                        'Login',
                        'NPM atau Password Anda Salah',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false },
                    );
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('npm', this.state.npm);
        await AsyncStorage.setItem('pass', this.state.pass);
    }


    render() {
        return (
            <ImageBackground source={require('../assets/bg.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}>
                <KeyboardAvoidingView style={{ width: '100%', height: '100%' }} behavior="padding" enabled>
                    <Content>
                        <Image source={require('../assets/aslab.png')} style={{ justifyContent: 'center', alignSelf: 'center', width: 350, height: 350, resizeMode: 'contain' }} />
                        <Form>
                            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 25, color: 'white' }}>Selamat Datang !</Text>
                            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 18, color: 'white' }}>Silahkan Login :)</Text>
                            <Item rounded style={{ marginTop: 10 }}>
                                <Input placeholder="Username" placeholderTextColor='white' style={{ color: 'white' }}
                                    onChangeText={npm => this.setState({ npm })} />
                            </Item>
                            <Item rounded style={{ marginTop: 10 }}>
                                <Input placeholder="Password" style={{ color: 'white' }} placeholderTextColor='white'
                                    onChangeText={pass => this.setState({ pass })}
                                    secureTextEntry={true} />
                            </Item>
                            <Button style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: 200, height: 50, borderRadius: 20 }} onPress={this.UserLoginFunction}>
                                <Text style={{ color: 'white' }}>Log In</Text>
                            </Button>
                        </Form>
                    </Content>
                </KeyboardAvoidingView>
            </ImageBackground>

        );
    }
}