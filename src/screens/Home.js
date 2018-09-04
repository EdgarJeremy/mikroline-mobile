import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, Dimensions, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../styles';
import config from '../config';

Mapbox.setAccessToken(config.map.token);

export default class Home extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: () => (
            <Image resizeMode="contain" style={styles.homeHeaderImage} source={require('../assets/logo.png')} />
        ),
        headerStyle: {
            backgroundColor: '#222222'
        },
        headerTintColor: '#ffffff',
        headerCenter: <Text>Test</Text>,
        headerRight: (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => navigation.navigate('scan')}>
                <View style={styles.p10}>
                    <Icon size={30} name="qrcode" style={styles.cwhite} />
                </View>
            </TouchableNativeFeedback>
        ),
        headerLeft: <View></View>
    });

    state = {
        mode: null,
        from: [],
        to: [],
        success: null
    }

    _handleInputFocus(mode) {
        this.setState({ mode });
    }

    async _handleConfirm() {
        this.map.getCenter().then((d) => console.log(d));
        this.setState({ mode: null });
    }

    _handleScanClick() {
        this.props.navigation.navigate('scan');
    }

    render() {
        let { mode, success } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                {(mode === null) &&
                    <View style={styles.homeUpperContainer}>
                        <Text style={styles.homeTitle}>Mikroline</Text>
                        <Text style={styles.homeSubtitle}>Pencarian jalur mikrolet kota Manado</Text>
                    </View>}

                {/* Map container */}
                <Mapbox.MapView
                    ref={(map) => this.map = map}
                    compassEnabled={false}
                    style={{ flex: 1 }}
                    styleURL="mapbox://styles/edgarjeremy/cjl437z2s57vh2ql8zpw6r2vw"
                    zoomLevel={13}
                    centerCoordinate={config.map.center}
                    showUserLocation={true}>
                </Mapbox.MapView>

                {/* Inputs */}
                {(mode === null) &&
                    <View style={styles.homeInputContainer}>
                        <TouchableOpacity onPress={() => this._handleInputFocus('from')}>
                            <Input editable={false} placeholder="Titik Awal" inputContainerStyle={styles.homeInput} containerStyle={styles.w100} rightIcon={<Icon name="map-marker" size={30} />} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._handleInputFocus('to')}>
                            <Input editable={false} placeholder="Tujuan" inputContainerStyle={[styles.homeInput, { borderColor: 'transparent' }]} containerStyle={styles.w100} rightIcon={<Icon name="map-marker" size={30} />} />
                        </TouchableOpacity>
                    </View>}

                {/* Pointer target */}
                {(mode !== null) && (
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}>
                        <Image resizeMode="contain" style={{
                            width: 40,
                            height: 40
                        }} source={require('../assets/target.png')} />
                        {/* <Button title="Konfirmasi" iconLeft={<Icon name="check-circle" />} /> */}
                    </View>
                )}

                {/* Pointer controls */}
                {(mode !== null) && (
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 20,
                        left: 0
                    }}>
                        <Button onPress={this._handleConfirm.bind(this)} title="Konfirmasi" iconLeft={<Icon name="check-circle" />} />
                    </View>
                )}

                {/* Sliding panel */}
                {(success === null) && (
                    (success === true) ?
                        <SlidingUpPanel
                            visible
                            startCollapsed
                            showBackdrop={false}
                            ref={c => this._panel = c}
                            draggableRange={{
                                top: Dimensions.get('window').height / 1.5,
                                bottom: 130
                            }}>
                            <View style={styles.homePanelContainer}>
                                <View style={styles.homePanelHeader}>
                                    <Text style={[styles.cwhite, { fontWeight: 'bold' }]}>Jalur ditemukan. Slide up untuk detailnya</Text>
                                </View>
                                <View style={styles.homePanelContent}>
                                    <Text>Bottom Sheet Content</Text>
                                </View>
                            </View>
                        </SlidingUpPanel> : null)}
            </View>
        );
    }

};