import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: 35,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 17.5,
    },
    temperature: {
        fontSize: 57,
        fontWeight: '200',
        marginLeft: 35,
    },
    center: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 15,
    },
    city: {
        fontSize: 16,
        fontWeight: '500',
    },
    status: {
        fontSize: 16,
        fontWeight: '400',
    },
    iconWrapper: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 35,
    },
    shadow: {
        overflow: 'visible',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
});

export default styles;
