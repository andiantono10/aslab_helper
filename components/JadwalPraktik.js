import React, {Component} from 'react';
import {Container, Header, Content, Left, Right, Icon, Button} from 'native-base';
import {Text, View} from 'react-native';

export default class JadwalPraktik extends Component{
    render(){
        return(
            <Container>
                <Header style={{paddingTop: 25, paddingBottom: 10}}>
                    <Left>
                        <Button transparent >
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <Content>
                    <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize: 25}}>Jadwal Praktikum</Text>
                    <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize: 20}}>Laboratorium Teknik Informatika</Text>
                    <Text style={{marginTop: 15, marginLeft: 7, fontSize: 15}}>LAB J1</Text>
                    <View style={{flex: 1, flexDirection: "column"}}>
                        <View style={{height: 100, backgroundColor: 'skyblue', justifyContent:'center', alignItems: 'stretch'}}></View>
                    </View>
                    <Text style={{marginTop: 15, marginLeft: 7, fontSize: 15}}>LAB J2</Text>
                    <View style={{flex: 1, flexDirection: "column"}}>
                        <View style={{height: 100, backgroundColor: 'skyblue', justifyContent:'center', alignItems: 'stretch'}}></View>
                    </View>
                    <Text style={{marginTop: 15, marginLeft: 7, fontSize: 15}}>LAB J3A</Text>
                    <View style={{flex: 1, flexDirection: "column"}}>
                        <View style={{height: 100, backgroundColor: 'skyblue', justifyContent:'center', alignItems: 'stretch'}}></View>
                    </View>
                    <Text style={{marginTop: 15, marginLeft: 7, fontSize: 15}}>LAB J3B</Text>
                    <View style={{flex: 1, flexDirection: "column"}}>
                        <View style={{height: 100, backgroundColor: 'skyblue', justifyContent:'center', alignItems: 'stretch', marginBottom: 15}}></View>
                    </View>
                </Content>
            </Container>
        );
    }
}