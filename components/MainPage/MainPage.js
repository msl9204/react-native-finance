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

import Main_News from "./SwipePage/Main_News";

const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 30px 0 30px 0;
`;

const HeaderText = styled.Text`
    flex-grow: 1;
`;

const initialLayout = { height: 0, width: Dimensions.get("window").width };

// TabBar Styling
const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "#0984e3" }}
        labelStyle={{ color: "black" }}
        style={{ backgroundColor: "lightgrey" }}
    />
);

export default function MainPage({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "Summary", title: "Summary" },

        { key: "News", title: "News" },
    ]);

    const auth = useAuth();

    // Swipe 객체들 Routing
    const renderScene = SceneMap({
        Summary: Main_Summary,

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
