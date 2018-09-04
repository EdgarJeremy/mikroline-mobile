import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    homeHeaderImage: {
        flex: 1,
        width: 50,
        height: 50
    },
    homeTitle: {
        color: '#ffffff',
        fontSize: 30,
        textAlign: 'center'
    },
    homeSubtitle: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff',
        paddingBottom: 40
    },
    homeUpperContainer: {
        padding: 5,
        backgroundColor: '#222222'
    },
    homeInputContainer: {
        position: 'absolute',
        top: 65,
        right: 30,
        left: 30,
        backgroundColor: '#ffffff',
        borderRadius: 5
    },
    homeInput: {
        paddingTop: 3,
        paddingRight: 15,
        paddingBottom: 3,
        paddingLeft: 3,
        borderColor: '#ededed',
        borderWidth: 0.1
    },
    homePanelContainer: {
        flex: 1,
        position: 'relative'
    },
    homePanelHeader: {
        height: 50,
        backgroundColor: '#2ecc71',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: '#27ae60',
        borderTopWidth: 3
    },
    homePanelContent: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    locatorFloatContainer: {
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        opacity: 0.5,
        right: 20,
        left: 20,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flex: 1
    },
    locatorFloatText: {
        color: '#222222'
    },
    p10: {
        padding: 10
    },
    w100: {
        width: '100%'
    },
    cwhite: {
        color: '#ffffff'
    },
    cblack: {
        color: '#222222'
    }
});