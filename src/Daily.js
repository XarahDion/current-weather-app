import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import moment from "moment";

const Daily = ({ day }) => {
    return (
        <Wrapper>
            <Day>{moment(day.dt * 1000).format("ddd")}</Day>
            <Icon>
                <WeatherIcon source={{ uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png` }} />
                <Text>{day.weather[0].description}</Text>
            </Icon>
            <Temp>
                <MaxTemp>{Math.round(day.temp.max)}°C</MaxTemp>
            </Temp>
        </Wrapper>
    );
};

const Wrapper= styled.View`
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    max-width: 400px;
`
const Day = styled.Text`
    font-size: 16px;
    margin: 3px;
    width: 40px;
`
const Icon = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 190px;
`
const WeatherIcon = styled.Image`
    width: 50px;
    height: 50px;
`
const Temp = styled.View`
    text-align: center;
`
const MaxTemp = styled.Text`
    font-size: 20px;
    font-weight: 600;
`

export default Daily;