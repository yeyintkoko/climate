import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface Props {
    title: string;
    onMenuPress?: () => void;
    onSearchPress?: () => void;
    color?: string;
    position?: 'absolute' | 'relative';
}
const NavHeader: React.FC<Props> = ({title, onMenuPress, onSearchPress, color, position}) => {
    return (
        <View style={[styles.container, {position}]}>
            <TouchableOpacity style={styles.button} onPress={onMenuPress}>
                <Icon name="ios-menu" size={24} color={color || '#fafafa'} />
            </TouchableOpacity>
            <Text style={[styles.title, {color: color || '#fafafa'}]}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={onSearchPress}>
                <Icon name="ios-search" size={24} color={color || '#fafafa'} />
            </TouchableOpacity>
        </View>
    );
};

export default NavHeader;
