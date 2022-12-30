import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import moment from "moment";
import { Feather } from '@expo/vector-icons'; 

const Daily = ({ day }) => {
    return (
        <Wrapper>
            <Container>
                <Day>{moment(day.dt * 1000).format("ddd")}</Day>
                <Date>{moment(day.dt * 1000).format("MMM D")}</Date>
            </Container>
            <Icon>
                <WeatherIcon source={{ uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png` }} />
                <Text>{day.weather[0].description}</Text>
            </Icon>
            <Container>
            <Temp>
                <MaxTemp>{Math.round(day.temp.max)}°C</MaxTemp>
            </Temp>
            <Div>
                <Feather name='cloud-snow' size={15} color="#484848" />
                <Pop>{Math.round(day.pop)*100} %</Pop>
            </Div>
            </Container>
        </Wrapper>
    );
};

const Container = styled.View `
`
const Div = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50px;
`
const Pop= styled.Text`
    font-size: 11px;
    opacity: 0.4;
    margin-left: 5px;
`
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
const Date = styled.Text`
    font-size: 16px;
    margin: 3px;

    color: #484848;
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