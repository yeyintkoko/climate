import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 200,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    shadow: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: -40,
        overflow: 'visible',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 35,
        marginBottom: 25,
        textAlign: 'center',
    },
    temperature: {
        marginTop: 10,
        flexDirection: 'row',
    },
    degree: {
        fontSize: 65,
        fontWeight: '200',
    },
    symbol: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '300',
    },
    status: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'rgba(0,0,0,0.6)',
    },
    fromTempr: {
        fontSize: 20,
        fontWeight: '500',
    },
    toTempr: {
        fontSize: 20,
        fontWeight: '300',
    },
    footer: {
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
        marginBottom: Platform.OS === 'ios' ? 80 : 50,
    },
    page: {
        flex: 1,
        width: window.width,
    },
    indicator: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        fontSize: 18,
        fontWeight: '500',
    },
});

export default styles;
