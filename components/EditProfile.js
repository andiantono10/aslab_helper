import React, { Component } from 'react';
import { Container, Content, Header, Form, Item, Input, Button, Left, Right, Icon, Body } from 'native-base';
import { Stylesheet, Text, View, AsyncStorage, ImageBackground } from 'react-native';
import { Notifications, Permissions } from 'expo'

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            npm: '',
            nama: '',
            kelas: '',
            no_tlp: ''
        };
    }

    askPermissions = async () => {
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            return false;
        }
        return true;
    };

    scheduleNotification = async () => {
        let notificationId = Notifications.scheduleLocalNotificationAsync(
            {
                title: "Aslab Helper",
                body: "Apa Kamu Punya Jadwal Hari ini? Yuk cek Jadwalmu di Aplikasi sekarang!"
            },
            {
                repeat: "day",
                time: new Date().setHours(5, 0, 0),
            }
        );
        console.log(notificationId);
    };

    _retrieveData = async () => {
        try {

            const value = await AsyncStorage.getItem('npm');
            if (value !== null) {
                // We have data!!
                this.setState({ npm: value });
                fetch('http://aslabhelper.net/tampiledit.php?status=tampil', {
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
                        });
                        //console.log("NPM : " + this.state.npm);
                        console.log(this.state.no_telp);
                        console.log(responseJson);
                    }).catch(error => {
                        console.error(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    _UpdateData = async () => {
        try {
            const { nama, kelas, no_tlp } = this.state;
            const value = await AsyncStorage.getItem('npm');
            if (value !== null) {
                // We have data!!
                this.setState({ npm: value });
                fetch('http://aslabhelper.net/tampiledit.php?status=edit', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        npm: value,
                        nama: nama,
                        kelas: kelas,
                        no_tlp: no_tlp
                    }),
                }).then(response => response.json())
                    .then(responseJson => {
                        //console.log("NPM : " + this.state.npm);
                        //console.log(this.state.no_telp);
                        console.log(responseJson);
                    }).catch(error => {
                        console.error(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount = () => {
        this._retrieveData();
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg.png')} style={{ flex: 1 }}>
                <Content>
                    <Form>
                        <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 25, color: "white", marginTop: 20 }}>Ubah Profile</Text>
                        <Text style={{ marginTop: 20, marginLeft: 15, color: "white" }}>Nama Anda</Text>
                        <Item rounded>
                            <Input placeholder="Nama Anda" placeholderTextColor='white' value={this.state.nama} onChangeText={nama => this.setState({ nama })} style={{ color: 'white' }} />
                        </Item>
                        <Text style={{ marginLeft: 15, marginTop: 10, color: "white" }}>Kelas Anda</Text>
                        <Item rounded>
                            <Input placeholder="Kelas Anda" placeholderTextColor='white' value={this.state.kelas} onChangeText={kelas => this.setState({ kelas })} style={{ color: 'white' }} />
                        </Item>
                        <Text style={{ marginLeft: 15, marginTop: 10, color: "white" }}>Nomor Telepon Anda</Text>
                        <Item rounded>
                            <Input placeholder="No Telepon" placeholderTextColor='white' value={this.state.no_tlp} onChangeText={no_tlp => this.setState({ no_tlp })} style={{ color: 'white' }} />
                        </Item>
                        <Button rounded style={{ marginTop: 15, height: 50, width: 150, justifyContent: 'center', alignSelf: 'center' }}
                            onPress={this._UpdateData}>
                            <Text style={{ color: 'white' }}>Edit Profile</Text>
                        </Button>
                        <Button rounded style={{ marginTop: 15, height: 50, width: 250, justifyContent: 'center', alignSelf: 'center' }}
                            onPress={() => this.scheduleNotification()}>
                            <Text style={{ color: 'white' }}>Aktifkan Notifikasi Pengingat</Text>
                        </Button>
                        <Button rounded style={{ marginTop: 15, height: 50, width: 250, justifyContent: 'center', alignSelf: 'center' }}
                            onPress={() => Notifications.cancelAllScheduledNotificationsAsync()}>
                            <Text style={{ color: 'white' }}>Matikan Notifikasi Pengingat</Text>
                        </Button>
                    </Form>
                </Content>
            </ImageBackground>
        );
    }
}