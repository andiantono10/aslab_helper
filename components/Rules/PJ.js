import React, { Component } from 'react';
import { Container, header, Content } from 'native-base';
import { View, Text, ImageBackground } from 'react-native';

export default class PJ extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/back2.png')} style={{ flex: 1 }}>
                <Content>
                    <View style={{
                        flex: 1, marginLeft: 10, marginTop: 10, width: 350, marginRight: 10,
                        height: 400, backgroundColor: 'skyblue', borderRadius: 10,
                        justifyContent: 'center', alignSelf: 'center'
                    }}>
                        <Text style={{ fontSize: 15, justifyContent: 'center', alignSelf: 'center' }}>Rules PJ</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>1. Memberikan soal TP kepada Praktikan di awal praktikum</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>2. Memberikan soal LP pertemuan berikutnya kepada praktikan di akhir praktikum</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>3. Memberikan tugas LA kepada praktikan</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>4. Menagajarkan materi praktikum sesuai dengan modul dari LAB TI kepada para praktikan</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>5. Memberikan nilai tambah kepada praktikan jika dibutuhkan</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>6. Memastikan para praktikan mengerti materi yang disampaikan oleh PJ</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>7. mengecek kembali kelengkapan dan kevalidan nilai yang diinput asisten di lembar nilai, serta kelengkapan isi Map Praktikum</Text>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}