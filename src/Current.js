import React from 'react'
import styled from 'styled-components/native'

const Current = ({weatherData}) => {
    return (
    <CurrentWeather>
        <Icon source={{uri: `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`}} />
        <Container>
            <Div>
            <Temp> {Math.round(weatherData.current.temp)}</Temp>
            <Deg>°C</Deg>
            </Div>
            <Feels> Feels like {Math.round(weatherData.current.feels_like)}</Feels>
            <Desc>
            {weatherData.current.weather[0].description.split(" ").map((word) => { 
                    return word[0].toUpperCase() + word.substring(1); 
                }).join(" ")}
            </Desc>
        </Container>
    </CurrentWeather>
    )
}

const CurrentWeather = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 150px;
    margin: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    width: 95%;
    max-width: 400px;
`
const Deg = styled.Text`
    font-size: 12px;
    color: white;
    margin-top: 14px;
`
const Temp = styled.Text`
    font-size: 50px;
    color: white;
`
const Div = styled.View`
    display: flex;
    flex-direction: row;
`
const Feels= styled.Text`
    font-size: 16px;
    color: white;
    opacity: 0.6;
`   
const Desc = styled.Text`
    font-size: 16px;
    color: white;
`
const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -20px;
`
const Icon = styled.Image`
    width: 200px;
    height: 200px;
`

export default Current;