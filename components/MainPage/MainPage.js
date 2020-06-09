import React, { useState } from "react";
import styled from "styled-components";

import {
    StyleSheet,
    Text,
    View,
    Platform,
    ScrollView,
    Button,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { SignInButton, SignInText, SignOutButton } from "../../styles/styles";
import { useAuth } from "../Auth/useAuth";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Main_Summary from "./SwipePage/Main_Summary";
import Main_Detail from "./SwipePage/Main_Detail";
import Main_Financial from "./SwipePage/Main_Financial";
import Main_News from "./SwipePage/Main_News";

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

const initialLayout = { height: 0, width: Dimensions.get("window").width };

const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "#0984e3" }}
        style={{ color: "black", backgroundColor: "lightgrey" }}
    />
);

export default function MainPage({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "Summary", title: "Summary" },
        { key: "Detail", title: "Detail" },
        { key: "Financial", title: "Financial" },
        { key: "News", title: "News" },
    ]);

    const auth = useAuth();

    // Swipe 객체들 Routing
    const renderScene = SceneMap({
        Summary: Main_Summary,
        Detail: Main_Detail,
        Financial: Main_Financial,
        News: Main_News,
    });

    return (
        <React.Fragment>
            <GlobalStyle OS={Platform.OS}>
                <HeaderContainer>
                    <HeaderText>
                        {auth.currentUser() && auth.currentUser().email} 님
                        반갑습니다.
                    </HeaderText>
                    <HeaderText>Profile Img</HeaderText>

                    {auth.currentUser() ? (
                        <React.Fragment>
                            <SignOutButton onPress={() => auth.signout()}>
                                <SignInText>SignOut</SignInText>
                            </SignOutButton>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <SignInButton
                                onPress={() => navigation.navigate("SignIn")}
                            >
                                <SignInText>SignIn</SignInText>
                            </SignInButton>
                        </React.Fragment>
                    )}
                </HeaderContainer>
            </GlobalStyle>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />
        </React.Fragment>
    );
}
