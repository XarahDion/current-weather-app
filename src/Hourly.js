import React from 'react'
import styled from 'styled-components/native'
import moment from "moment";
import { Feather } from '@expo/vector-icons'; 

const Hourly = ({hour}) => {
    return (
        <Container>
            <Text>{moment(hour.dt * 1000).format("h A")}</Text>
            <Icon source={{uri: `https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`}} />
            <Temp>{Math.round(hour.temp)} °C</Temp>
            <Feels>Feels like {Math.round(hour.feels_like)}</Feels>
            <Div>
                <Feather name='cloud-snow' size={15} color="#484848" />
                <Pop>{Math.round((hour.pop)*100)} %</Pop>
            </Div>
        </Container>
    )
    }

const Div = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Pop= styled.Text`
    font-size: 11px;
    opacity: 0.4;
    margin-left: 5px;
`
const Text = styled.Text`
    font-size: 11px;
`
const Temp = styled.Text`
    font-size: 18px;
    font-weight: 600;
`
const Feels= styled.Text`
    font-size: 11px;
    opacity: 0.4;
    margin-bottom: 5px;
`  
const Container = styled.View`
    display: flex;
    background-color: rgba(255, 255, 255, 0.2); 
    justify-content: space-around;
    align-items: center;
    margin: 0px 5px;
    border-radius: 5px;
    padding: 5px;
    width: 80px;
    height: 140px;
`
const Icon = styled.Image`
    width: 50px;
    height: 50px;
`
export default Hourly;