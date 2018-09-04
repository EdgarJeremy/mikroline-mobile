import React from 'react';
import { View, Text } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import styles from '../styles';
import config from '../config';

Mapbox.setAccessToken(config.map.token);


export default class Locator extends React.Component {
    static navigationOptions = {
        title: `Locator`,
        headerStyle: {
            backgroundColor: '#222222'
        },
        headerTintColor: '#ffffff'
    }

    state = {
        userCoordinate: [],
        centerCoordinate: config.map.center
    }

    _onUpdateUserLocation(center) {
        this.setState({ centerCoordinate: [center.longitude, center.latitude], userCoordinate: center });
    }

    render() {
        let { centerCoordinate, userCoordinate } = this.state;
        return (
            <View style={{ flex: 1, alignContent: 'center' }}>
                <Mapbox.MapView
                    // onRegionIsChanging={this._onRegionIsChanging.bind(this)}
                    style={{ flex: 1 }}
                    styleURL="mapbox://styles/edgarjeremy/cjl437z2s57vh2ql8zpw6r2vw"
                    zoomLevel={13}
                    centerCoordinate={centerCoordinate}
                    onUpdateUserLocation={this._onUpdateUserLocation.bind(this)}
                    showUserLocation={true}>
                </Mapbox.MapView>
                <View style={styles.locatorFloatContainer}>
                    <Text style={styles.locatorFloatText}>1.3142355, 124.3456457</Text>
                </View>
            </View>
        )
    }

}