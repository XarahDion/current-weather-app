import { Alert, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl, ImageBackground } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location'
import {WEATHER_KEY} from '@env'
import styled from 'styled-components/native'
import Daily from './Daily'
import bgImg from "../assets/bg.png";
import Current from './Current'
import DetailedObservations from './DetailedObservations'
import Hourly from './Hourly'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [refresh, setRefresh] = useState(false);

    console.log(weatherData)
    const forecast = async () => {
        setRefresh(true);
        const {status} = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Permission was denied.');
        }

        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=${WEATHER_KEY}`)
        const data = await response.json();
        
        if (!response.ok) {
            Alert.alert('Error', 'Something went wrong.');
        } else {
            setWeatherData(data);
        }
        setRefresh(false);
    };

    useEffect (() => {
        forecast();
    }, []);

    return (
        <>
        {weatherData ? 
        <SafeAreaView>
            <ImageBackground source={bgImg} style={{ width: "100%", height: "100%" }}>
                <ScrollView>
                <Title>Current Weather</Title>
                <Place>Latitude: {weatherData.lat} | Longitude: {weatherData.lon} </Place>
                <Forecast>
                    <Current weatherData={weatherData} />
                    <Subtitle>Detailed Observations</Subtitle>
                    <DetailedObservations weatherData={weatherData} />
                    <SubtitleHourly>Hourly</SubtitleHourly>
                    <ScrollView horizontal>
                    <Details>
                    {weatherData.hourly.map((hour, index) => {
                        if (index !== 0 && index < 13) {
                        return <Hourly key={hour.dt} hour={hour} />;
                        }
                    })}
                    </Details>
                    </ScrollView>
                </Forecast>
                <SubtitleDaily>7 Days</SubtitleDaily>
                <ScrollView>
                <Forecast>
                    {weatherData.daily.map((day, index) => {
                        if (index !== 0) {
                        return <Daily key={day.dt} day={day} />;
                        }
                    })}
                </Forecast>
                </ScrollView>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
        : <SafeAreaView >
            <Place>Loading...</Place>
            <ActivityIndicator size='large' />
        </SafeAreaView>}
        </>
    )
};

const Details = styled.View`
    display: flex;
    flex-direction: row;
    margin: 0px 5px;
`
const SubtitleHourly = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin: 5px 0px 5px -300px;

`
const Subtitle = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin: 5px 0px;
    position: relative;
    left: -100px;
`
const SubtitleDaily = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: white;
    margin: 10px 0px 0px 10px;
    position: relative;
`
const Forecast = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Place = styled.Text`
    align-items: center;
    text-align: center;
    color: white;
`
const Title = styled.Text`
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    color: white;
    margin-top: 50px;
`

export default Weather;