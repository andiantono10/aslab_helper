import React, { Component } from 'react';
import { Container, Content, Thumbnail, Item, Input, Button } from 'native-base';
import MarqueeText from 'react-native-marquee';
import { Text, View, Modal, Alert, Dimensions, StyleSheet, AsyncStorage, TouchableHighlight, Platform, ImageBackground, Image } from 'react-native';

var { height, width } = Dimensions.get('window');

export default class Beranda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            npm: '',
            nama: '',
            kelas: '',
            no_tlp: '',
            tgl_lhr: '',
            email: '',
            foto: '',
            ModalVisibleStatus: false,
            ModalVisibleStatus2: false,

            password_pertama: '',
            password_kedua: '',
            password_konfirmasi: '',
            password_baru: '',
            pass: ''
        };
    }

    ShowModalFunction(visible) {
        this.setState({ ModalVisibleStatus: visible });
    }

    ShowModalFunction2(visible) {
        this.setState({ ModalVisibleStatus2: visible });
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('npm');
            if (value !== null) {
                // We have data!!
                this.setState({ npm: value });
                fetch('http://aslabhelper.net/beranda.php', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        npm: value
                    }),
                }).then(response => response.json())
                    .then(responseJson => {
                        this.setState({
                            npm: responseJson[0].npm,
                            nama: responseJson[0].nama,
                            kelas: responseJson[0].kelas,
                            no_tlp: responseJson[0].no_tlp,
                            email: responseJson[0].email,
                            foto: responseJson[0].foto
                        });
                        //console.log("NPM : " + this.state.npm);
                        console.log(responseJson);
                        console.log("Foto : " + this.state.foto);
                    }).catch(error => {
                        console.error(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };


    _ChangePassword = () => {
        AsyncStorage.getItem('pass').then((value) => {
            this.setState({
                password_pertama: value
            })

        });
        const { npm, password_pertama, password_kedua, password_konfirmasi, password_baru } = this.state;
        var benar = 0;
        if (password_kedua !== '') {
            benar += 1
        }
        if (password_pertama === password_kedua) {
            benar += 1
        }
        if (password_baru !== '') {
            benar += 1
        }
        if (password_konfirmasi !== '') {
            benar += 1
        }
        if (password_baru === password_konfirmasi) {
            benar += 1
        }
        if (benar == 5) {
            fetch('http://aslabhelper.net/EditPass.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    npm: npm,
                    pass: password_baru
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson === 'Password Berhasil Diganti') {
                        Alert.alert(responseJson)
                        this._signOutAsync();
                    } else {
                        Alert.alert('Galat terjadi');
                    }
                })
        }
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login1');
    }

    componentDidMount = () => {
        this._retrieveData();
    }

    render() {
        const uri1 = "https://facebook.github.io/react-native/docs/assets/favicon.png";

        console.log(this.state.foto);

        return (
            <ImageBackground source={require('../assets/bg.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Content>
                    <View style={styles.container}>
                        <MarqueeText
                            style={{ fontSize: 24, justifyContent: 'center', marginTop: 20, alignSelf: 'center', color: 'white' }}
                            duration={3000}
                            loop
                            marqueeDelay={1000}
                        >
                            Selamat Datang {this.state.nama} di Aplikasi Aslab Helper
                    </MarqueeText>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Modal
                            transparent={false}
                            animationType="slide"
                            visible={this.state.ModalVisibleStatus}
                            onRequestClose={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus) }}>

                            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                                <Text style={{ fontSize: 25, alignSelf: 'center' }}>Ubah Password</Text>
                                <Item rounded style={{ width: 300, marginTop: 15 }} >
                                    <Input placeholder="Password lama Anda..." secureTextEntry={true}
                                        onChangeText={password_kedua => this.setState({ password_kedua })} />
                                </Item>
                                <Item rounded style={{ width: 300, marginTop: 15 }} >
                                    <Input placeholder="Password Baru Anda..." secureTextEntry={true}
                                        onChangeText={password_baru => this.setState({ password_baru })} />
                                </Item>
                                <Item rounded style={{ width: 300, marginTop: 15 }} >
                                    <Input placeholder="Konfirmasi Password Baru.." secureTextEntry={true}
                                        onChangeText={password_konfirmasi => this.setState({ password_konfirmasi })} />
                                </Item>
                                <Button style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: 200, height: 50, borderRadius: 20 }}
                                    onPress={this._ChangePassword}>
                                    <Text style={{ color: 'white' }}>Konfirmasi</Text>
                                </Button>
                                <Button style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: 200, height: 50, borderRadius: 20 }}
                                    onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus) }}>
                                    <Text style={{ color: 'white' }}>Kembali</Text>
                                </Button>
                            </View>
                        </Modal>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Modal
                            transparent={false}
                            animationType="slide"
                            visible={this.state.ModalVisibleStatus2}
                            onRequestClose={() => { this.ShowModalFunction2(!this.state.ModalVisibleStatus2) }}>

                            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                                <Image style={{ width: 600, height: 450, resizeMode: 'contain' }} source={{ uri: this.state.foto }} />
                                <Button style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: 200, height: 50, borderRadius: 20 }}
                                    onPress={() => { this.ShowModalFunction2(!this.state.ModalVisibleStatus2) }}>
                                    <Text style={{ color: 'white' }}>Kembali</Text>
                                </Button>
                            </View>
                        </Modal>
                    </View>

                    <TouchableHighlight onPress={() => { this.ShowModalFunction2(!this.state.ModalVisibleStatus2) }}>
                        <Thumbnail square large style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 25, borderRadius: 10 }}
                            source={this.state.foto ? { uri: this.state.foto } : { uri: this.state.uri1 }} resizeMode="stretch" />
                    </TouchableHighlight>

                    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ width: 270, height: 250, backgroundColor: 'skyblue', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>{this.state.npm}</Text>
                            <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>{this.state.nama}</Text>
                            <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>{this.state.kelas}</Text>
                            <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>{this.state.no_tlp}</Text>
                            <Button style={{ marginTop: 15, justifyContent: 'center', alignSelf: 'center', width: 200, height: 50, borderRadius: 20 }}
                                onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus) }}>
                                <Text style={{ color: "white" }}>Ubah Password</Text>
                            </Button>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>

                            <Button style={{ justifyContent: 'center', width: 120, height: 40, borderRadius: 20 }}
                                onPress={this._retrieveData}>
                                <Text style={{ color: "white" }}>Refresh</Text>
                            </Button>
                            <Button style={{ justifyContent: 'center', width: 120, height: 40, borderRadius: 20 }}
                                onPress={this._signOutAsync}>
                                <Text style={{ color: "white" }}>Log Out</Text>
                            </Button>

                        </View>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Platform.OS == 'ios') ? 20 : 0

    },

    ModalInsideView: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00BCD4",
        height: 300,
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'

    },

    TextStyle: {

        fontSize: 20,
        marginBottom: 20,
        color: "#fff",
        padding: 20,
        textAlign: 'center'

    },

    container: {
        flex: 1,
        justifyContent: 'center',
    }

});