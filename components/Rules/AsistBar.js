import React, { Component } from 'react';
import { Container, header, Content } from 'native-base';
import { View, Text, ImageBackground } from 'react-native';

export default class AsistBar extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/back2.png')} style={{ flex: 1 }}>
                <Content>
                    <View style={{
                        flex: 1, marginLeft: 10, marginTop: 10, width: 350,
                        height: 790, backgroundColor: 'skyblue', borderRadius: 10, marginRight: 10,
                        justifyContent: 'center', alignSelf: 'center'
                    }}>
                        <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center' }}>Rules Asisten baris</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>1. asisten memastikan semua komputer client dapat digunakan untuk praktikum</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>2. Asisten memastikan semua praktikan menempati temptanya sesuai dengan posisi duduk praktikan yang tercantum</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>3. Mengambil semua berkas praktikum para praktikan yang terdiri dari:</Text>
                        <Text style={{ marginLeft: 20 }}>a. Map praktikum</Text>
                        <Text style={{ marginLeft: 20 }}>b. Buku Laporan Pendahuluan (LP)</Text>
                        <Text style={{ marginLeft: 20 }}>c. Kartu Praktikum</Text>
                        <Text style={{ marginLeft: 20 }}>d. Laporan Akhir (LA)</Text>
                        <Text style={{ marginLeft: 20 }}>e. Memo Pengulangan/ tidak hadir</Text>
                        <Text style={{ marginLeft: 20 }}>f. Blangko pengulangan</Text>
                        <Text style={{ marginLeft: 16 }}>Note:</Text>
                        <Text style={{ marginLeft: 20 }}>- Untuk pertemuan 1 hanya poin a dan b.</Text>
                        <Text style={{ marginLeft: 20 }}>- Pertemuan 2 s/d terakhir poin a sampai d.</Text>
                        <Text style={{ marginLeft: 20 }}>- Poin e jika praktikum tidak hadir mengulang praktikum</Text>
                        <Text style={{ marginLeft: 20 }}>- Poin f dibawa saat pertemuan pengulangan dan diserahkan ke PJL</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>4. Memberikan stempel/ cap pada buku LP(saat pertemuan 1) dan LA (mulai pertemua 2 s/d ujian), lalu mengoreksi/ memeriksa LA, LP, TP Praktikan di baris asisten tersebut jaga dan catat nilai para praktikan distampel/ cap dan dilembar nilai praktikan=> jangan lupa cantumkan tanggal, nama asisten, PJL serta ttd asisten di cap dan lembar nilai praktikum.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>5. Periksa kelengkapan nilai praktikan(LA, LP, TP, dan K) termasuk nilai plus yang didapatkan praktikan selama praktikum berlangsung => semua kolom nilai diinput hari itu juga dan harus lengkap, sesuai batasan masing - masing nilai.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>6. Asisten jaga dibaris jaganya, agar praktikan mudah mengakses asisten jika mengalami kesulitan selama praktikum.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>7. Selesai praktikum asisten periksa kembali kelengkapan komputer di lab.</Text>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}