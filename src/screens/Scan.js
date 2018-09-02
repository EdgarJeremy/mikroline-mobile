import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Button } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';

export default class Scan extends Component {
    static navigationOptions = {
        header: null
    }

    _onBarCodeRead(e) {
        console.log(e);
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    defaultOnFocusComponent={true}
                    onFocusChanged={alert}
                    onBarCodeRead={this._onBarCodeRead.bind(this)}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    permissionDialogTitle={''}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{ flex: 0, justifyContent: 'center',padding: 20 }}>
                    <Text style={{paddingBottom: 10, justifyContent: 'center'}}>Login di Mikroline web dan arahkan kamera ke arah QR Code untuk memulai menggunakan perangkat ini sebagai GPS Locator</Text>
                    <Button onPress={() => this.props.navigation.goBack()} title="Kembali" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fefefe'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});