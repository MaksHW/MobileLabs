import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";


const ContainerNews = styled.View`
flex: 1;
	background-color: white;
	position: absolute;
	top: 70px;
	width: 100%;
	height: 560px;
	alignItems: center;
`;

const ContainerProph = styled.View`
flex: 1;
	background-color: white;
	flexDirection: column;
	position: absolute;
	top: 100px;
	width: 100%;
	height: 560px;
`;

const ContainerProphM = styled.View`
	background-color: white;
	height: 70px;
	margin-left: 10px;
`;

const ContainerFoto = styled.View`
flex: 1;

margin:5px;
	background-color: white;
	alignItems: center;
	flexDirection: column;
`;
const ContainerFotoP = styled.View`
flex: 1;
	background-color: white;
	position: absolute;
	top: 100px;
	width: 100%;
	height: 560px;
	flexDirection: row;
`;

const ContainerHed = styled.View`
	flex: 1;
	background-color: white;
	flexDirection: row;
	
`;

const ContainerMenu = styled.View`
	flex: 1;
	background-color: white;
	position: absolute;
	top: 0px;
	width: 100%;
	height: 70px;
	flexDirection: row;
	justifyContent: center;
	alignContent: stretch;
`;

const Title = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Labl = styled.Image`
	width: 100px;
	height: 100px;
`;

const NameLab = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const NameFot = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
	position: absolute;
	top: 70px;
	width: 100%;
	height: 30px;
	background-color: white;
	alignSelf: center;
	textAlign: center;
`;

const NameStyd = styled.Text`
	font-size: 10px;
	font-weight: 500;
	color: #b8bece;
	position: absolute;
	top: 570px;
	left: 125px;
`;

const News = styled.View`
	background-color: white;
	height: 70px;
	width: 100%;
	flexDirection: row;
`;

const COnttext = styled.View`
margin-left: 5px;
alignSelf: center;
`;

const ImageNews = styled.Image`
margin-left: 5px;
alignSelf: center;
width: 50px;
height: 50px;
`;

const ImageFoto = styled.Image`
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
width: 100px;
height: 100px;
`;

const Input = styled.TextInput`
border: 1px grey;
width: 300px;
`;

const ButtonP = styled.Button`
textAlign: center;
`;

const Menul = styled.Image`
`;

function foto() {
    const [data, setData] = useState([]);
    const [zaglyshka, setZag] = useState(0);
    if(zaglyshka === 0){
        axios.get('https://raw.githubusercontent.com/MaksHW/MobileLabs/master/for_images_news_and_foto/im.json')
            .then(function (response) {
                setData(response.data);
                setZag(1)
            })
            .catch(function (error) {
            })
            .then(function (response) {
            });}
    return (data)
}


function Main ({navigation}) {
    const [data, setData] = useState([]);
    const [zaglyshka, setZag] = useState(0);
    let im = foto();
    if(zaglyshka === 0){
        axios.get('https://raw.githubusercontent.com/MaksHW/MobileLabs/master/news.json')
            .then(function (response) {
                setData(response.data);
                setZag(1)
            })
            .catch(function (error) {
            })
            .then(function (response) {
            });}
    if(zaglyshka === 1){
        return (
        <View>
            <ContainerMenu>
                <Button
                    title="Головна"
                    onPress={() => navigation.navigate('Main')}
                />
                <Button
                    title="Фотогалерея"
                    onPress={() => navigation.navigate('Foto')}
                />
                <Button
                    title="Профіль"
                    onPress={() => navigation.navigate('Prophile')}
                />
            </ContainerMenu>
            <ContainerNews>
                <NameLab>НОВИНИ</NameLab>
                <News>
                    <ImageNews source={{uri:im.one}}/>
                    <COnttext>
                    <Text>{data.movies[0].title}</Text>
                    <Text>{data.movies[0].releaseYear}</Text>
                    <Text>{data.title}</Text>
                    </COnttext>
                </News>
                <News>
                    <ImageNews source={{uri:im.one}}/>
                    <COnttext>
                        <Text>{data.movies[0].title}</Text>
                        <Text>{data.movies[0].releaseYear}</Text>
                        <Text>{data.title}</Text>
                    </COnttext>
                </News>
                <News>
                    <ImageNews source={{uri:im.two}}/>
                    <COnttext>
                        <Text>{data.movies[1].title}</Text>
                        <Text>{data.movies[1].releaseYear}</Text>
                        <Text>{data.title}</Text>
                    </COnttext>
                </News>
                <News>
                    <ImageNews source={{uri:im.three}}/>
                    <COnttext>
                        <Text>{data.movies[2].title}</Text>
                        <Text>{data.movies[2].releaseYear}</Text>
                        <Text>{data.title}</Text>
                    </COnttext>
                </News>
                <News>
                    <ImageNews source={{uri:im.four}}/>
                    <COnttext>
                        <Text>{data.movies[3].title}</Text>
                        <Text>{data.movies[3].releaseYear}</Text>
                        <Text>{data.title}</Text>
                    </COnttext>
                </News>
                <News>
                    <ImageNews source={{uri:im.five}}/>
                    <COnttext>
                        <Text>{data.movies[4].title}</Text>
                        <Text>{data.movies[4].releaseYear}</Text>
                        <Text>{data.title}</Text>
                    </COnttext>
                </News>
            </ContainerNews>
            <NameStyd>Линник Максим ІПЗ19-3</NameStyd>
        </View>
    );
}}

function Foto ({navigation}) {
    let im = foto();
    return (
        <View>
            <ContainerMenu>
                <Button
                    title="Головна"
                    onPress={() => navigation.navigate('Main')}
                />
                <Button
                    title="Фотогалерея"
                    onPress={() => navigation.navigate('Foto')}
                />
                <Button
                    title="Профіль"
                    onPress={() => navigation.navigate('Prophile')}
                />
            </ContainerMenu>
            <NameFot>ГАЛЕРЕЯ</NameFot>
            <ContainerFotoP>
                <ContainerFoto>
                    <ImageFoto source={{uri:im.one}}/>
                    <ImageFoto source={{uri:im.one}}/>
                    <ImageFoto source={{uri:im.two}}/>
                    <ImageFoto source={{uri:im.two}}/>
                </ContainerFoto>
                <ContainerFoto>
                    <ImageFoto source={{uri:im.three}}/>
                    <ImageFoto source={{uri:im.four}}/>
                    <ImageFoto source={{uri:im.five}}/>
                    <ImageFoto source={{uri:im.five}}/>
                </ContainerFoto>
            </ContainerFotoP>

            <NameStyd>Линник Максим ІПЗ19-3</NameStyd>
        </View>);
}

function Prophile ({navigation}){{
        return (
            <View>
                <ContainerMenu>
                    <Button
                        title="Головна"
                        onPress={() => navigation.navigate('Main')}
                    />
                    <Button
                        title="Фотогалерея"
                        onPress={() => navigation.navigate('Foto')}
                    />
                    <Button
                        title="Профіль"
                        onPress={() => navigation.navigate('Prophile')}
                    />
                </ContainerMenu>
                <NameFot>ПРОФІЛЬ</NameFot>
                <ContainerProph>
                    <ContainerProphM>
                        <Input
                        style={{height: 40}}
                        placeholder="Електронна пошта"/>
                    </ContainerProphM>
                    <ContainerProphM>
                        <Input
                            style={{height: 40}}
                            placeholder="Пароль"/>
                    </ContainerProphM>
                    <ContainerProphM>
                        <Input
                            style={{height: 40}}
                            placeholder="Пароль перевірка"/>
                    </ContainerProphM>
                    <ContainerProphM>
                        <Input
                            style={{height: 40}}
                            placeholder="Ім'я"/>
                    </ContainerProphM>
                    <ContainerProphM>
                        <Input
                            style={{height: 40}}
                            placeholder="Прізвище"/>
                    </ContainerProphM>
                    <ContainerProphM style={{width: 300}}>
                        <ButtonP
                            style={{width: 300}}
                            title="Зареєструвати"
                        />
                    </ContainerProphM>
                </ContainerProph>
            </View>);
    }
}

function Header (){
    return(<ContainerHed>
        <Labl source={require('./img/1.png')}/>
        <Title>
            <NameLab>FirstMobileApp</NameLab>
        </Title>
        <StatusBar style="auto" />
    </ContainerHed>)
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main}
                              options={{ headerTitle: (props) => <Header {...props}/>, headerBackVisible: ()=> false, headerShadowVisible: false }}/>
                <Stack.Screen name="Foto" component={Foto}
                              options={{ headerTitle: (props) => <Header {...props} />, headerBackVisible: ()=> false, headerShadowVisible:  false }}/>
                <Stack.Screen name="Prophile" component={Prophile}
                              options={{ headerTitle: (props) => <Header {...props} />, headerBackVisible: ()=> false, headerShadowVisible:  false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
