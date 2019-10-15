import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';
import { Text, View, Image, ImageBackground } from 'react-native';

export default class Labj1 extends Component {
    render() {
        const uri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==";
        return (
            <ImageBackground source={require('../../assets/back1.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Content>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Jadwal Praktikum Lab J1</Text>
                        <Image source={require('./gambar/J1.jpg')} style={{ width: 355, height: 300, resizeMode: 'contain' }} />
                        <View style={{ flex: 1, backgroundColor: 'skyblue', width: 350, height: 170, borderRadius: 15 }}>
                            <Text style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>Untuk Membuka Kunci Ruangan Lab. J1 (J125), harus kalian bisa ambil Kunci dari ruang staff terlebih dahulu di J1222. Bisa menemui : </Text>
                            <Text style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>1. Temui OB memakai Baju Seragam Gunadarma di Kantin Dosen atau Ruang Kesehatan</Text>
                            <Text style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>2. Tunggu dan temui Asisten Tetap yang berjaga di hari praktikum berlangsung</Text>
                        </View>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}