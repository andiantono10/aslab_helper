import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';
import { Text, View, Image, ImageBackground } from 'react-native';

export default class Labj3a extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/back3.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Content>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Jadwal Praktikum Lab J3A</Text>
                        <Image source={require('./gambar/J3A.jpg')} style={{ width: 355, height: 300, resizeMode: 'contain' }} />
                        <View style={{ flex: 1, backgroundColor: 'skyblue', width: 350, height: 170, borderRadius: 15 }}>
                            <Text style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>Untuk Membuka Kunci Ruangan Lab. J3 Ruang A :</Text>
                            <Text style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>1. Temui Penjaga yang bertugas di Kampus J3 dan Ambil kuncinya di meja depan ATM Bank DKI, Laci sebelah atas</Text>
                            <Text style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>2. Tunggu dan temui Asisten Tetap yang berjaga di hari praktikum berlangsung</Text>
                        </View>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}