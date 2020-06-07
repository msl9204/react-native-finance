import React from "react";
import styled from "styled-components";

import {
    StyleSheet,
    Text,
    View,
    Platform,
    ScrollView,
    Dimensions,
} from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { TabView, SceneMap } from "react-native-tab-view";
import { useAuth } from "../Auth/useAuth";

const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 30px 0 30px 0;
`;

const HeaderText = styled.Text`
    flex-grow: 1;
`;

const ScrollImgContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 30px 0 30px 0;
`;

const ImgScroll = styled(ScrollView)`
    flex-direction: row;
`;

const ImgBox = styled.Text`
    background: #c4c4c4;
    border-radius: 30px;
    width: 150px;
    height: 150px;
    margin: 10px;
`;

const ContentContainer = styled.View`
    width: 370px;
    height: 500px;
    background: #c4c4c4;
    border-radius: 30px;
`;

export default function MainPage() {
    const auth = useAuth();

    return (
        <GlobalStyle OS={Platform.OS}>
            <HeaderContainer>
                <HeaderText>... 님 반갑습니다.</HeaderText>
                <HeaderText>Profile Img</HeaderText>
            </HeaderContainer>
            <ScrollImgContainer>
                <ImgScroll horizontal>
                    <ImgBox>12345</ImgBox>
                    <ImgBox>12345</ImgBox>
                    <ImgBox>12345</ImgBox>
                    <ImgBox>12345</ImgBox>

                    <ImgBox>12345</ImgBox>
                    <ImgBox>12345</ImgBox>
                    <ImgBox>12345</ImgBox>
                    <ImgBox>12345</ImgBox>
                    <ImgBox>12345</ImgBox>
                </ImgScroll>
            </ScrollImgContainer>
            <ContentContainer />
        </GlobalStyle>
    );
}
