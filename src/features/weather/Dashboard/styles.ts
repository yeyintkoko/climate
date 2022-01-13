import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: window.height,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    animatedContent: {
        flex: 1,
        height: window.height - 200,
    },
    header: {
        height: 200,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    imageBgWrapper: {
        height: 200,
        overflow: 'hidden',
    },
    shadow: {
        zIndex: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -50,
        marginBottom: -50,
        alignSelf: 'center',
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
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'gray',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginTop: 85,
        textAlign: 'center',
    },
    temperature: {
        marginTop: 10,
        flexDirection: 'row',
    },
    degree: {
        fontSize: 75,
        fontWeight: '200',
    },
    symbol: {
        marginTop: 10,
        fontSize: 25,
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
        flex: 0.5,
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    itemText: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
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
    week: {
        paddingTop: 35,
        paddingBottom: 25,
    },
    weekDayItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingBottom: 35,
    },
    day: {
        flex: 1,
        paddingLeft: 40,
    },
    weekDay: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    date: {
        fontSize: 16,
        textTransform: 'uppercase',
    },
    dayTempr: {
        marginRight: 15,
    },
    temprText: {
        fontSize: 16,
    },
});

export default styles;
