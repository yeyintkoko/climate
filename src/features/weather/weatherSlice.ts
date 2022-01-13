import {ImageSourcePropType} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';

export interface WeekDayProp {
    icon: string;
    day: string;
    date: string;
    from: number;
    to: number;
}

export interface CityProps {
    city: string;
    image: ImageSourcePropType;
    icon: string;
    temperature: number;
    status: string;
    from: number;
    to: number;
    rainy: number;
    snowy: number;
    windy: number;
    cityImageTranslate?: any;
    cityImageBgTranslate?: any;
}

export interface SliderItemType {
    city: string;
    icon: string;
    temperature: number;
    status: string;
    shadow: string;
    motionAnim?: any;
}

export interface WeatherState {
    cities: CityProps[];
    days: WeekDayProp[];
    sliderItems: SliderItemType[];
}

const initialState: WeatherState = {
    cities: [],
    days: [],
    sliderItems: [],
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        saveWeather(state, action) {
            return {
                ...state,
                cities: action.payload,
            };
        },
        saveWeekDays(state, action) {
            return {
                ...state,
                days: action.payload,
            };
        },
        saveSliderItems(state, action) {
            return {
                ...state,
                sliderItems: action.payload,
            };
        },
    },
});

export const {saveWeather, saveWeekDays, saveSliderItems} = weatherSlice.actions;

export default weatherSlice.reducer;
