import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import moment from "moment";
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const DetailedObservations = ({weatherData}) => {
    return (
    <Details>
        <ScrollView horizontal>
        <Container>
            <Text>{moment(weatherData.current.dt * 1000).format("MMM D, YYYY")}</Text>
            <Icons>
                <Feather name='sunrise' size={40} color="#484848" />
                <Feather name='sunset' size={40} color="#484848" />
            </Icons>
            <Times>
                <Div>
                    <Subtitle>SUNRISE</Subtitle>
                    <Deets>{moment(weatherData.current.sunrise * 1000).format("h:mm A")}</Deets>
                    </Div>
                <Div>
                    <Subtitle>SUNSET</Subtitle>
                    <Deets>{moment(weatherData.current.sunset * 1000).format("h:mm A")}</Deets>
                </Div>
            </Times>
        </Container>
        <Container>
            <Text>Wind</Text>
            <Icon>
                <Feather name='wind' size={50} color="#484848" />
            </Icon>
            <Deets>{Math.round((weatherData.current.wind_speed)*3.6)} km/h</Deets>
        </Container>
        <Container>
            <Text>Humidity</Text>
            <Icon>
                <MaterialCommunityIcons name='water-percent' size={60} color="#484848" />
            </Icon>
            <Deets>{weatherData.current.humidity} %</Deets>
        </Container>
        <Container>
            <Text>Pressure</Text>
            <Icon>
                <MaterialCommunityIcons name='arrow-collapse-down' size={50} color="#484848" />
            </Icon>
            <Deets>{weatherData.current.pressure / 10} kPa</Deets>
        </Container>
        <Container>
            <Text>Visibility</Text>
            <Icon>
                <MaterialIcons name='visibility' size={50} color="#484848" />
            </Icon>
            <Deets>{Math.round(weatherData.current.visibility / 1000)} km</Deets>
        </Container>
        <Container>
            <Text>Cloudiness</Text>
            <Icon>
                <MaterialCommunityIcons name='apple-icloud' size={50} color="#484848" />
            </Icon>
            <Deets>{weatherData.current.clouds} %</Deets>
        </Container>
        </ScrollView>
    </Details>
    )
    }

const Icon = styled.View`
    display: flex;
    align-items: center;
`
const Div = styled.View`
`
const Subtitle = styled.Text`
    font-size: 10px;
    text-align: center;
`
const Deets = styled.Text`
    font-size: 12px;
    font-weight: 600;
`
const Times = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
`
const Icons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px 0px 0px;
    gap: 12px;
`
const Text = styled.Text`
    font-size: 11px;
`
const Container = styled.View`
    display: flex;
    background-color: rgba(255, 255, 255, 0.2); 
    justify-content: space-between;
    margin: 0px 5px;
    border-radius: 5px;
    padding: 5px;
    width: 115px;
`
const Details = styled.View`
    display: flex;
    flex-direction: row;
    margin: 0px 5px;
`

export default DetailedObservations;