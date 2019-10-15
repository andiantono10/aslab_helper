import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator, DrawerItems } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Beranda from '../Beranda';
import CariBackup from '../CariBackup';
import EditProfile from '../EditProfile';
import JadwalAnda from '../JadwalAnda';
import Auth from '../Auth';
import PJ from '../Rules/PJ';
import PJL from '../Rules/PJL';
import AsistBar from '../Rules/AsistBar';
import HasilCari from '../HasilCari';
import Login from '../Login';
import { Button, Drawer, Icon, Container, Body, Content, Header } from 'native-base';
import Labj1 from '../LabTI/Labj1';
import Labj2 from '../LabTI/Labj2';
import Labj3a from '../LabTI/Labj3a';
import Labj3b from '../LabTI/Labj3b';

const Home = createBottomTabNavigator({
    Beranda: { screen: Beranda },
    'Jadwal Anda': { screen: JadwalAnda },
    'Edit Profile': { screen: EditProfile }
}, {
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];

        return {
            headerTitle: routeName,
            headerStyle: {
                backgroundColor: '#2D4262'
            }, headerTintColor: '#fff'
        };
    }, tabBarOptions: {
        inactiveTintColor: 'white',
        activeTintColor: '#00FFFF',
        tabStyle: {
            paddingBottom: 15
        },
        style: {
            backgroundColor: '#2D4262',
            color: 'white'
        }
    }
});

const JadwalPrak = createBottomTabNavigator({
    'Lab J1': { screen: Labj1 },
    'Lab J2': { screen: Labj2 },
    'Lab J3A': { screen: Labj3a },
    'Lab J3B': { screen: Labj3b }
}, {
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName,
            headerStyle: {
                backgroundColor: '#2D4262'
            }, headerTintColor: '#fff'
        };
    }, tabBarOptions: {
        inactiveTintColor: 'white',
        activeTintColor: '#00FFFF',
        tabStyle: {
            paddingBottom: 15
        },
        style: {
            backgroundColor: '#2D4262',
            color: 'white'
        }
    }
});

const RulesNavigator = createBottomTabNavigator({
    PJ,
    'Asisten Baris': { screen: AsistBar },
    PJL
}, {
    navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName,
            headerStyle: {
                backgroundColor: '#2D4262'
            }, headerTintColor: '#fff'
        };
    }, tabBarOptions: {
        inactiveTintColor: 'white',
        activeTintColor: '#00FFFF',
        tabStyle: {
            paddingBottom: 15
        },
        style: {
            backgroundColor: '#2D4262',
            color: 'white'
        }
    }
});

const JadwalPrakStack = createStackNavigator({
    JadwalPraktikum: JadwalPrak
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.openDrawer()}
                    name="md-menu" size={30} />
            )
        };
    }
});

const CariBackupStack = createStackNavigator({
    CariBackup: CariBackup,
    HasilCari: HasilCari
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.openDrawer()}
                    name="md-menu" size={30} />
            ),
            headerTitle: 'Cari Backup Asisten',
            headerStyle: {
                backgroundColor: '#2D4262'
            }, headerTintColor: '#fff'
        };
    }
}, {
    initialRouteName: 'CariBackup'
});

const BerandaStack = createStackNavigator({
    Beranda: Home
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.openDrawer()}
                        name="md-menu" size={30} />
                )
            };
        }
    }, {
    initialRouteName: 'Beranda'
}
);

const RulesStack = createStackNavigator({
    RulesAsisten: RulesNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon style={{ paddingLeft: 10, color: 'white' }} onPress={() => navigation.openDrawer()}
                    name="md-menu" size={30} />
            )
        };
    }
});

const AppDrawer = createDrawerNavigator({
    Beranda: {
        screen: BerandaStack
    },
    'Jadwal Pratikum': {
        screen: JadwalPrakStack
    },
    'Cari Backup': {
        screen: CariBackupStack
    },
    Rules: {
        screen: RulesStack
    }
}, {
    drawerBackgroundColor: 'skyblue',
}
);

export default Main = createAppContainer(createSwitchNavigator({
    Auth: { screen: Auth },
    Beranda1: { screen: AppDrawer },
    Login1: { screen: Login }
},
    {
        initialRouteName: 'Auth'
    }
));