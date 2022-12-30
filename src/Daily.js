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
            <ContainerTemp>
                <MaxTemp>{Math.round(day.temp.max)}°C</MaxTemp>
                <Div>
                    <Feather name='cloud-snow' size={15} color="#484848" />
                    <Pop>{Math.round((day.pop)*100)} %</Pop>
                </Div>
            </ContainerTemp>
        </Wrapper>
    );
};

const ContainerTemp = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70px;
`
const Container = styled.View `
    display: flex;
    align-items: baseline;
    width: 60px;
`
const Div = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 37px;
    margin-top: 4px;
`
const Pop= styled.Text`
    font-size: 11px;
    opacity: 0.4;
    padding-left: 7px;
    margin-top: -2px;
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
`
const Date = styled.Text`
    font-size: 12px;
    opacity: 0.4;
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
const MaxTemp = styled.Text`
    font-size: 20px;
    font-weight: 600;
    width: 44px;
    text-align: right;
    margin-right: 7px;
`

export default Daily;