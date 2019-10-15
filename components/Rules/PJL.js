import React, { Component } from 'react';
import { Container, header, Content } from 'native-base';
import { View, Text, ImageBackground } from 'react-native';

export default class PJL extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/back2.png')} style={{ flex: 1 }}>
                <Content>
                    <View style={{
                        flex: 1, marginLeft: 10, marginTop: 10, width: 350,
                        height: 710, backgroundColor: 'skyblue', borderRadius: 10, marginRight: 10,
                        justifyContent: 'center', alignSelf: 'center'
                    }}>
                        <Text style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center' }}>Rules PJL</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>1. PJL wajib memeriksa tiap praktikan saat masuk lab, apakah para praktikan mengenakan pakaian yang sesuai dengan peraturan praktikum Lab TI atau tidak => Posisi standby di pintu.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>2. PJL mengabsen para praktikan=> tanyakan memo bila ada praktikan yang pernah tidak hadir praktikum dan atau yang mengulang praktikum.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>3. PJL membantu asisten yang menjaga baris dan memastikan praktikum berjalan dengan lancar.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>4. PJL menyimpan data nilai TP+ dan K+ praktikan dan menyerahkannya kepada asisten untuk diinput ke lembar nilai praktikum.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>5. Pada pertemuan terakhir (sebelum pertemua pengulangan dan ujian) PJL membuat daftar praktikum yang terkena pembayaran blangko pengulangan dan menyerahkan blangko tersebut kepada perwakilan peraktikan yang bersangkutan.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>6. Saat pertemuan pengulangan, PJL mengecek blangko(warna merah) yang diberikan praktikan dan mentraplesnya di Map Praktikum=>nama, kelas, dan mata praktikum + jumlah pertemuan tidak hadir.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>7. Jika ada hambatan/kendala serta kejadian - kejadian khusus, catat di lembar BAP.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>8. Setelah praktikum berakhir, cek kembali nilai - nilai praktikan di lembar nilai praktikum dan kelengkapan isi map praktikum.</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>9. PJL mengingatkan asisten untuk mengecek map praktikum yang diterima oleh asisten sesuai atau tidak dengan lembar absensi(penyesuaian data praktikan yang hadir antara map praktikum dengan absensi).</Text>
                        <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>10.PJL bersama asisten memeriksa kembali kelengkapan komputer di LAB.</Text>
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}