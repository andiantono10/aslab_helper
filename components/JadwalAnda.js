import React, { Component } from 'react';
import { Container, Tab, Tabs, ListItem, List } from 'native-base';
import { Stylesheet, Text, View, AsyncStorage, ImageBackground, ScrollView } from 'react-native';

export default class JadwalAnda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            npm: '',
            data: [],
            data2: []
        };
    }
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('npm');
            if (value !== null) {
                // We have data!!
                this.setState({ npm: value });
                fetch('http://aslabhelper.net/jadwalpj.php', {
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
                            data: responseJson
                        });
                        //console.log("NPM : " + this.state.npm);
                        console.log(this.state.data);
                    }).catch(error => {
                        console.error(error);
                    });

                fetch('http://aslabhelper.net/jadwaljg.php', {
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
                            data2: responseJson
                        });
                        //console.log("NPM : " + this.state.npm);
                        console.log(this.state.data2);
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
            <ImageBackground source={require('../assets/bg.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView>
                    <Tabs>
                        <Tab heading="PJ">
                            {
                                this.state.data.map((items, i) => {
                                    return (
                                        <View key={i} style={{ marginTop: 5 }}>
                                            <List>
                                                <ListItem itemDivider>
                                                    <Text>{items.hari} (Shift : {items.shift})</Text>
                                                </ListItem>
                                                <ListItem>
                                                    <Text>Nama Praktikum : {items.nm_matprak}</Text>
                                                </ListItem>
                                                <ListItem>
                                                    <Text>Kelas PJ : {items.kls_ajar}</Text>
                                                </ListItem>
                                                <ListItem>
                                                    <Text>Lokasi : {items.lokasi}</Text>
                                                </ListItem>
                                            </List>
                                        </View>
                                    );
                                })
                            }
                        </Tab>

                        <Tab heading="Asisten Baris">
                            {
                                this.state.data2.map((items, i) => {
                                    return (
                                        <View key={i} style={{ marginTop: 5 }}>
                                            <List>
                                                <ListItem itemDivider>
                                                    <Text>{items.hari} (Shift : {items.shift})</Text>
                                                </ListItem>
                                                <ListItem>
                                                    <Text>Nama Praktikum : {items.nm_matprak}</Text>
                                                </ListItem>
                                                <ListItem>
                                                    <Text>Kelas PJ : {items.kls_jaga}</Text>
                                                </ListItem>
                                                <ListItem>
                                                    <Text>Lokasi : {items.lokasi}</Text>
                                                </ListItem>
                                            </List>
                                        </View>
                                    );
                                })
                            }
                        </Tab>
                    </Tabs>
                </ScrollView>
            </ImageBackground>
        );
    }
}