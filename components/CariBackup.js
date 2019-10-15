import React, { Component } from 'react';
import { Button } from 'native-base';
import { StyleSheet, View, Picker, Text, Alert, AsyncStorage, ImageBackground } from 'react-native';

export default class CariBackup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            PickerValueHolder: '',
            PickerValueHolder2: '',
            PickerValueHolder3: '',
            PickerValueHolder4: '',
            data: [],
            data2: [],
            npm: ''
        }
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

            }
        } catch (error) {
            console.log(error);
        }
    };
    componentDidMount = () => {
        this._retrieveData();

    }

    NilaiTerpilih = () => {
        //Alert.alert(this.state.PickerValueHolder);
        this.props.navigation.navigate('HasilCari', {
            hariobj: this.state.PickerValueHolder,
            kelasobj: this.state.PickerValueHolder3,
            shiftobj: this.state.PickerValueHolder2,
            lokasiobj: this.state.PickerValueHolder4
        });
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg2.png')} style={{ flex: 1 }}>
                <View style={styles.MainContainer}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center' }}>Mau Cari Asisten Backup?</Text>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Untuk Hari Apa?</Text>
                    <Picker
                        style={{ border: 20 }}
                        selectedValue={this.state.PickerValueHolder}
                        onValueChange={(itemValue, ItemIndex) => this.setState({ PickerValueHolder: itemValue })}>
                        {this.state.data.map((item, key) => (
                            <Picker.Item label={item.hari} value={item.hari} key={key} />)
                        )}
                    </Picker>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Untuk di Kelas Mana?</Text>
                    <Picker
                        selectedValue={this.state.PickerValueHolder3}
                        onValueChange={(itemValue, ItemIndex) => this.setState({ PickerValueHolder3: itemValue })}>
                        {this.state.data.map((item, key) => (
                            <Picker.Item label={item.kls_ajar} value={item.kls_ajar} key={key} />)
                        )}
                    </Picker>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Untuk Shift Berapa?</Text>
                    <Picker
                        selectedValue={this.state.PickerValueHolder2}
                        onValueChange={(itemValue, ItemIndex) => this.setState({ PickerValueHolder2: itemValue })}>
                        {this.state.data.map((item, key) => (
                            <Picker.Item label={item.shift} value={item.shift} key={key} />)
                        )}
                    </Picker>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Untuk di Lab Mana?</Text>
                    <Picker
                        selectedValue={this.state.PickerValueHolder4}
                        onValueChange={(itemValue, ItemIndex) => this.setState({ PickerValueHolder4: itemValue })}>
                        {this.state.data.map((item, key) => (
                            <Picker.Item label={item.lokasi} value={item.lokasi} key={key} />)
                        )}
                    </Picker>

                    <Button style={{ justifyContent: 'center', width: 200, height: 50, borderRadius: 20, alignSelf: 'center' }}
                        onPress={this.NilaiTerpilih}>
                        <Text style={{ color: "white" }}>Konfirmasi</Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        width: 300,
        height: 500,
        marginTop: 35,
        backgroundColor: 'skyblue',
        alignSelf: 'center',
        borderRadius: 10
    }

});