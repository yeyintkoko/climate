import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 50 : undefined,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
