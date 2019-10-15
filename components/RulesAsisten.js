import React, {Component} from 'react';
import {Container, Content, Header, Accordion, Left, Right, Icon, Button} from 'native-base';
import {Stylesheet, Text, View} from 'react-native';

const dataArr = [
    {title: "Peraturan Asisten", content: "lorem ipsum"},
    {title: "Peraturan PJ", content: "lorem ipsum"},
    {title: "Peraturan PJL", content: "lorem ipsum"}
];

export default class RulesAsisten extends Component{
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
                <Content padder>
                    <Accordion dataArray={dataArr} expanded={0}/>
                </Content>
            </Container>
        );
    }
}