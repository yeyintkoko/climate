import React, {useState, useRef} from 'react';
import {View, Button, Text, ImageBackground, Image, ScrollView, Animated} from 'react-native';
import {RootState} from '../../../store';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {decrement, increment} from '../weatherSlice';
import NavHeader from '../../../components/NavHeader/navHeader';
import styles from './styles';
import budapest from '../../../assets/images/budapest.jpg';
import newyork from '../../../assets/images/newyork.jpg';
import tokyo from '../../../assets/images/tokyo.jpg';
import miami from '../../../assets/images/miami.jpg';

const Weather: React.FC = () => {
    const count = useSelector((state: RootState) => state.weather.value);
    const dispatch = useDispatch();
    const scrollX = useRef(new Animated.Value(0)).current;
    const indicator1Translate = scrollX.interpolate({
        inputRange: [0, 300],
        outputRange: [0, 15],
        extrapolate: 'clamp',
    });
    const indicator2Translate = scrollX.interpolate({
        inputRange: [0, 300],
        outputRange: [5, -15],
        extrapolate: 'clamp',
    });

    const page1 = () => {
        return (
            <View style={styles.page}>
                <View style={styles.content}>
                    <Icon name="ios-thunderstorm-outline" size={45} color="#000" />
                    <View style={styles.temperature}>
                        <Text style={styles.degree}>35</Text>
                        <Text style={styles.symbol}>°F</Text>
                    </View>
                    <Text style={styles.status}>Snow Showers</Text>
                    <Text style={styles.fromTempr}>
                        35° <Text style={styles.toTempr}>24°</Text>
                    </Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.item}>
                        <Icon name="ios-umbrella-outline" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={styles.itemText}>100%</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="ios-water-outline" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={styles.itemText}>77%</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="ios-leaf-outline" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={styles.itemText}>5 mph</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.header} source={newyork} blurRadius={25}>
                <View style={styles.overlay} />
                <NavHeader title="cliMate" />
            </ImageBackground>
            <View style={styles.shadow}>
                <Image source={newyork} style={styles.image} />
            </View>
            <Text style={styles.title}>New York</Text>
            <View style={styles.indicator}>
                <Animated.View
                    style={[
                        {
                            transform: [{translateX: indicator1Translate}],
                        },
                    ]}>
                    <Text style={styles.dot}>--</Text>
                </Animated.View>
                <Animated.View
                    style={[
                        {
                            transform: [{translateX: indicator2Translate}],
                        },
                    ]}>
                    <Text style={styles.dot}>-</Text>
                </Animated.View>
            </View>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX,
                                },
                            },
                        },
                    ],
                    {useNativeDriver: true},
                )}>
                {page1()}
                {page1()}
            </Animated.ScrollView>
            {
                // <Button title="Increment value" onPress={() => dispatch(increment())} />
                // <Text>{count}</Text>
                // <Button title="Decrement value" onPress={() => dispatch(decrement())} />
            }
        </View>
    );
};

export default Weather;
