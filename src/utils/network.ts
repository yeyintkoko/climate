import {Alert} from 'react-native';
import {saveWeather, saveWeekDays, saveSliderItems} from '../features/weather/weatherSlice';
import {store} from '../store';
import data from './data';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const AUTH_KEY = 'adkskdfinknl3snd1z2xlkjsfwqo779asf9sajddjkjhkv8';

interface clientProps {
    url: string;
    method: string;
    body?: any;
    headers?: any;
}

export const client = async ({url, method, body, headers}: clientProps) => {
    const reqHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: AUTH_KEY,
        ...headers,
    };

    return await fetch(`${BASE_URL}/${url}`, {method, body: JSON.stringify(body), headers: reqHeaders}).then(
        async response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return await response.text().then(text => {
                    throw new Error(text);
                });
            }
        },
    );
};

export const fetchWeatherStatus = async () => {
    try {
        await client({url: 'todos', method: 'get'});
        // use mockup data
        store.dispatch(saveWeather(data.cities));
    } catch (err: any) {
        Alert.alert('Something went wrong!', err.message);
    }
};

export const fetchWeekDays = async () => {
    try {
        await client({url: 'todos', method: 'get'});
        // use mockup data
        store.dispatch(saveWeekDays(data.days));
    } catch (err: any) {
        Alert.alert('Something went wrong!', err.message);
    }
};

export const fetchSliderItems = async () => {
    try {
        await client({url: 'todos', method: 'get'});
        // use mockup data
        store.dispatch(saveSliderItems(data.sliderItems));
    } catch (err: any) {
        Alert.alert('Something went wrong!', err.message);
    }
};
