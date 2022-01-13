import budapest from '../assets/images/budapest.jpg';
import newyork from '../assets/images/newyork.jpg';
import tokyo from '../assets/images/tokyo.jpg';
import miami from '../assets/images/miami.jpg';

const data = {
    cities: [
        {
            city: 'New York',
            image: newyork,
            icon: 'ios-thunderstorm-outline',
            temperature: 35,
            status: 'Snow Showers',
            from: 35,
            to: 24,
            rainy: 100,
            snowy: 77,
            windy: 5,
        },
        {
            city: 'Budapest',
            image: budapest,
            icon: 'ios-rainy-outline',
            temperature: 42,
            status: 'Light Rain Showers',
            from: 44,
            to: 37,
            rainy: 48,
            snowy: 54,
            windy: 10,
        },
        {
            city: 'Tokyo',
            image: tokyo,
            icon: 'ios-sunny-outline',
            temperature: 50,
            status: 'Clear',
            from: 57,
            to: 37,
            rainy: 40,
            snowy: 70,
            windy: 4,
        },
        {
            city: 'Miami',
            image: miami,
            icon: 'ios-cloud-outline',
            temperature: 66,
            status: 'Partly cloudy',
            from: 61,
            to: 49,
            rainy: 80,
            snowy: 50,
            windy: 11,
        },
    ],
    days: [
        {
            icon: 'ios-thunderstorm-outline',
            day: 'Wed',
            date: '17 Jan',
            from: 39,
            to: 21,
        },
        {
            icon: 'ios-sunny-outline',
            day: 'Thu',
            date: '18 Jan',
            from: 39,
            to: 27,
        },
        {
            icon: 'ios-partly-sunny-outline',
            day: 'Fri',
            date: '19 Jan',
            from: 42,
            to: 23,
        },
        {
            icon: 'ios-rainy-outline',
            day: 'Sat',
            date: '20 Jan',
            from: 54,
            to: 37,
        },
        {
            icon: 'ios-snow-outline',
            day: 'Sun',
            date: '21 Jan',
            from: 50,
            to: 38,
        },
    ],
    sliderItems: [
        {
            city: 'New York',
            icon: 'ios-thunderstorm-outline',
            temperature: 35,
            status: 'Snow Showers',
            shadow: '#33C7FF',
        },
        {
            city: 'Budapest',
            icon: 'ios-rainy-outline',
            temperature: 42,
            status: 'Light Rain Showers',
            shadow: '#33C7FF',
        },
        {
            city: 'Tokyo',
            icon: 'ios-sunny-outline',
            temperature: 50,
            status: 'Clear',
            shadow: '#FFDA33',
        },
        {
            city: 'Miami',
            icon: 'ios-cloud-outline',
            temperature: 66,
            status: 'Partly cloudy',
            shadow: '#FFDA33',
        },
    ],
};

export default data;
