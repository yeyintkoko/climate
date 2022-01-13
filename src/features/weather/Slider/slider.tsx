import React, {useState, useRef, useEffect} from 'react';
import {View, Text, ScrollView, Animated, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderItemType} from '../weatherSlice';
import NavHeader from '../../../components/NavHeader/navHeader';
import styles from './styles';

interface Props {
    onPressItem: (item: SliderItemType) => void;
}

const Slider: React.FC<Props> = ({onPressItem}) => {
    const [cities] = useState<SliderItemType[]>([
        {
            city: 'New York',
            icon: 'ios-thunderstorm-outline',
            temperature: 35,
            status: 'Snow Showers',
            shadow: '#33C7FF',
            motionAnim: useRef(new Animated.Value(-400)).current,
        },
        {
            city: 'Budapest',
            icon: 'ios-rainy-outline',
            temperature: 42,
            status: 'Light Rain Showers',
            shadow: '#33C7FF',
            motionAnim: useRef(new Animated.Value(-400)).current,
        },
        {
            city: 'Tokyo',
            icon: 'ios-sunny-outline',
            temperature: 50,
            status: 'Clear',
            shadow: '#FFDA33',
            motionAnim: useRef(new Animated.Value(-400)).current,
        },
        {
            city: 'Miami',
            icon: 'ios-cloud-outline',
            temperature: 66,
            status: 'Partly cloudy',
            shadow: '#FFDA33',
            motionAnim: useRef(new Animated.Value(-400)).current,
        },
    ]);

    const startAnimate = () => {
        cities.map((it: SliderItemType, index: number) => {
            Animated.timing(it.motionAnim, {
                toValue: 0,
                duration: 300 * (index + 1),
                useNativeDriver: true,
            }).start();
            return it;
        });
    };

    useEffect(() => {
        startAnimate();
    }, []);

    const renderItem = ({city, icon, temperature, status, shadow, motionAnim}: SliderItemType) => {
        return (
            <Animated.View
                style={{
                    transform: [{translateX: motionAnim}],
                }}
                key={city}>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => onPressItem({city, icon, temperature, status, shadow})}>
                    <Text style={styles.temperature}>{temperature}°</Text>
                    <View style={styles.center}>
                        <Text style={styles.city}>{city}</Text>
                        <Text style={styles.status}>{status}</Text>
                    </View>
                    <View style={[styles.iconWrapper, styles.shadow, {shadowColor: shadow}]}>
                        <Icon name={icon} size={26} />
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <NavHeader title="cliMate" color="#000" />
            <ScrollView contentContainerStyle={styles.content}>{cities.map(renderItem)}</ScrollView>
        </View>
    );
};

export default Slider;
