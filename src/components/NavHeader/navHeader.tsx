import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface Props {
    title: string;
}
const NavHeader: React.FC<Props> = ({title}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Icon name="ios-menu" size={24} color="#fafafa" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button}>
                <Icon name="ios-search" size={24} color="#fafafa" />
            </TouchableOpacity>
        </View>
    );
};

export default NavHeader;
