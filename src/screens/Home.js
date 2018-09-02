import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, ScrollView } from 'react-native';
import { Card, Input, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

export default class Home extends React.Component {

    static navigationOptions = {
        headerTitle: () => (
            <Image resizeMode="contain" style={styles.homeHeaderImage} source={require('../assets/logo.png')} />
        ),
        headerStyle: {
            backgroundColor: '#222222'
        },
        headerTintColor: '#ffffff',
        headerCenter: <Text>Test</Text>,
        headerRight: <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => alert('under development')}>
            <View style={styles.p10}>
                <Icon size={30} name="qrcode" style={styles.textWhite} />
            </View>
        </TouchableNativeFeedback>,
        headerLeft: <View></View>
    };

    render() {
        const menuButtons = [{
            element: () =>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="certificate" size={40} />
                    <Text>Kontribusi</Text>
                </View>
        }, {
            element: () =>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="globe" size={40} />
                    <Text>Website</Text>
                </View>
        }, {
            element: () =>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="map" size={40} />
                    <Text>Peta</Text>
                </View>
        }, {
            element: () =>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="sign-out" size={40} />
                    <Text>Keluar</Text>
                </View>
        }]
        return (
            <View>
                <ScrollView>
                    <Card containerStyle={[styles.homeCard, { marginTop: 0, marginLeft: 0, marginRight: 0 }]}>
                        <View style={styles.homeUpperContainer}>
                            <Text style={styles.homeTitle}>Mikroline</Text>
                            <Text style={styles.homeSubtitle}>Pencarian jalur mikrolet kota Manado</Text>
                        </View>
                    </Card>
                    <ButtonGroup
                        containerStyle={{ marginTop: 0, marginLeft: 0, marginRight: 0, height: 80 }}
                        buttons={menuButtons}
                    />
                    <Card title={<Text style={styles.homeSectionText}><Icon name="search" size={20} /> Cari Data</Text>}>
                        <View>
                            <Input disabled onFocus={() => alert('under development')} inputContainerStyle={styles.homeInput} placeholder="Cari Trayek" containerStyle={[styles.w100]} rightIcon={<Icon name="search" size={25} />} />
                        </View>
                    </Card>
                    <Card title={<Text style={styles.homeSectionText}><Icon name="map-marker" size={20} /> Set Rute</Text>} style={styles.homeCard}>
                        <View>
                            <Input placeholder="Titik Awal" inputContainerStyle={styles.homeInput} containerStyle={styles.w100} rightIcon={<Icon name="map-marker" size={30} />} />
                            <Input placeholder="Tujuan" inputContainerStyle={styles.homeInput} containerStyle={styles.w100} rightIcon={<Icon name="map-marker" size={30} />} />
                        </View>
                    </Card>
                    <Card title={<Text style={styles.homeSectionText}><Icon name="align-center" size={20} /> Detail Rute</Text>} style={styles.homeCard}>
                        <View>

                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }

};