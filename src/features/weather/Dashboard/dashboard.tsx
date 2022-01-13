import React, {useState, useRef, useEffect} from 'react';
import {View, Text, ImageBackground, ScrollView, Animated, Modal, Platform} from 'react-native';
import {RootState} from '../../../store';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {CityProps, WeekDayProp, SliderItemType} from '../weatherSlice';
import {fetchWeatherStatus, fetchWeekDays} from '../../../utils/network';
import NavHeader from '../../../components/NavHeader/navHeader';
import Slider from '../Slider/slider';
import styles from './styles';

const THRESHOLD_HEIGHT = Platform.OS === 'ios' ? 644 : 524;

const Weather: React.FC = () => {
    const {cities: mcities, days: mdays} = useSelector((state: RootState) => state.weather);
    const scrollRef = useRef<ScrollView>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollY = useRef(new Animated.Value(0)).current;
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

    const [modalVisible, setModalVisible] = useState(false);
    const [cities, setCities] = useState<CityProps[]>([]);
    const [days, setDays] = useState<WeekDayProp[]>([]);

    const getWeatherData = async () => {
        await fetchWeatherStatus();
    };

    const getWeekData = async () => {
        await fetchWeekDays();
    };

    useEffect(() => {
        if (!mcities.length) {
            getWeatherData();
        } else {
            setCities(JSON.parse(JSON.stringify(mcities)));
        }
        if (!mdays.length) {
            getWeekData();
        } else {
            setDays(JSON.parse(JSON.stringify(mdays)));
        }
    }, [mcities, mdays]);

    const mapInterpolate = (it: CityProps, index: number) => {
        const threshold = index ? THRESHOLD_HEIGHT * index : THRESHOLD_HEIGHT;
        let imagePosition = -100 * index;
        let headerPosition = -200 * index;

        it.cityImageTranslate = scrollY.interpolate({
            inputRange: [0, threshold],
            outputRange: [0, imagePosition],
            extrapolate: 'clamp',
        });
        it.cityImageBgTranslate = scrollY.interpolate({
            inputRange: [0, threshold],
            outputRange: [0, headerPosition],
            extrapolate: 'clamp',
        });

        return it;
    };

    const weekDay = ({icon, day, date, from, to}: WeekDayProp) => {
        return (
            <View style={styles.weekDayItem} key={day}>
                <Icon name={icon} size={30} color="#000" />
                <View style={styles.day}>
                    <Text style={styles.weekDay}>{day}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.dayTempr}>
                    <Text style={styles.temprText}>{from}°</Text>
                    <Text style={styles.temprText}>{to}°</Text>
                </View>
            </View>
        );
    };

    const page2 = () => {
        return (
            <View style={styles.page}>
                <ScrollView style={styles.week}>{days.map(weekDay)}</ScrollView>
            </View>
        );
    };

    const page1 = (item: CityProps) => {
        return (
            <View style={styles.page}>
                <View style={styles.content}>
                    <Icon name="ios-thunderstorm-outline" size={42} color="#000" />
                    <View style={styles.temperature}>
                        <Text style={styles.degree}>{item.temperature}</Text>
                        <Text style={styles.symbol}>°F</Text>
                    </View>
                    <Text style={styles.status}>{item.status}</Text>
                    <Text style={styles.fromTempr}>
                        {item.from}° <Text style={styles.toTempr}>{item.to}°</Text>
                    </Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.item}>
                        <Icon name="ios-umbrella-outline" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={styles.itemText}>{item.rainy}%</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="ios-water-outline" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={styles.itemText}>{item.snowy}%</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="ios-leaf-outline" size={24} color="rgba(0,0,0,0.6)" />
                        <Text style={styles.itemText}>{item.windy} mph</Text>
                    </View>
                </View>
            </View>
        );
    };

    const city = (item: CityProps) => {
        return (
            <View style={styles.animatedContent} key={item.city}>
                <Text style={styles.title}>{item.city}</Text>
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
                    {page1(item)}
                    {page2()}
                </Animated.ScrollView>
            </View>
        );
    };

    const cityBackground = (item: CityProps) => {
        return (
            <Animated.View key={item.city} style={[{transform: [{translateY: item.cityImageBgTranslate}]}]}>
                <ImageBackground style={styles.header} source={item.image} blurRadius={25} />
            </Animated.View>
        );
    };

    const cityImage = (item: CityProps) => {
        return (
            <Animated.Image
                key={item.city}
                source={item.image}
                style={[
                    styles.image,
                    {
                        transform: [{translateY: item.cityImageTranslate}],
                    },
                ]}
            />
        );
    };

    const sliderModal = () => {
        return (
            <Modal animationType="slide" transparent={false} visible={modalVisible}>
                <Slider
                    onPressItem={(item: SliderItemType) => {
                        const index = cities.map(it => it.city).indexOf(item.city);
                        setModalVisible(!modalVisible);
                        setTimeout(() => {
                            scrollRef.current?.scrollTo({x: 0, y: index * THRESHOLD_HEIGHT});
                        }, 600);
                    }}
                />
            </Modal>
        );
    };

    return (
        <View style={styles.container}>
            {sliderModal()}
            <View style={styles.imageBgWrapper}>
                {cities.map(mapInterpolate).map(cityBackground)}
                <View style={styles.overlay} />
            </View>
            <NavHeader
                title="cliMate"
                onMenuPress={() => {
                    setModalVisible(!modalVisible);
                }}
                position="absolute"
            />
            <View style={styles.shadow}>
                <View style={styles.imageWrapper}>{cities.map(mapInterpolate).map(cityImage)}</View>
            </View>
            <Animated.ScrollView
                ref={scrollRef}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: scrollY,
                                },
                            },
                        },
                    ],
                    {useNativeDriver: true},
                )}>
                {cities.map(mapInterpolate).map(city)}
            </Animated.ScrollView>
        </View>
    );
};

export default Weather;
