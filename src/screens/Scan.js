import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class Scan extends React.Component {

    render() {
        return (
            <View>
                <RNCamera
                    type={RNCamera.Constants.Type.back}
                />
            </View>
        );
    }

}