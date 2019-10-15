import React, { Component } from 'react';
import { Container, Content, Header, List, ListItem, Left, Thumbnail, Body, Right, Button } from 'native-base';
import { Stylesheet, Text, View, Linking, ImageBackground } from 'react-native';

export default class HasilCari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hari: '',
            kls_jaga: '',
            shift: '',
            lokasi: '',
            data: []
        }
    }

    HasilBackup = () => {
        const nil1 = this.props.navigation.state.params.hariobj;
        const nil2 = this.props.navigation.state.params.kelasobj;
        const nil3 = this.props.navigation.state.params.shiftobj;
        const nil4 = this.props.navigation.state.params.lokasiobj;

        this.setState({ hari: nil1, kls_jaga: nil2, shift: nil3, lokasi: nil4 })
        fetch('http://aslabhelper.net/hasilcari.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hari: nil1,
                shift: nil3,
                kls_jaga: nil2,
                lokasi: nil4
            })
        }).then(response => response.json())
            .then(responseJson => {
                this.setState({
                    data: responseJson
                });
                console.log(this.state.data);
            }).catch((error) => {
                console.log(error);
            });
    }

    componentDidMount = () => {
        this.HasilBackup();
    }

    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const kontak = "https://api.whatsapp.com/send?phone=";
        //const hari = this.props.navigation.state.params.hariobj;
        //const { hari, kelas, shift } = this.state;
        return (
            <ImageBackground source={require('../assets/bg2.png')} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.state.data.map((items, i) => {
                        const kontak = "https://api.whatsapp.com/send?phone=" + items.no_tlp;
                        return (
                            <View key={i}>
                                <List>
                                    <ListItem avatar>
                                        <Left>
                                            <Thumbnail source={{ uri: items.foto }} style={{ resizeMode: 'stretch' }} />
                                        </Left>
                                        <Body>
                                            <Text style={{ fontSize: 18 }}>{items.nama}</Text>
                                        </Body>
                                        <Right>
                                            <Text onPress={() => Linking.openURL(kontak)}>Chat Now!</Text>
                                        </Right>
                                    </ListItem>
                                </List>
                            </View>
                        );
                    })}
                </View>
            </ImageBackground>
        );
    }
}
