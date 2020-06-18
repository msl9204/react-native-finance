import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import MajorIndex from "../TopAreaChart/MajorIndex";
import { useAuth } from "../../Auth/useAuth";

const MainSummaryContainer = styled.View`
    display: flex;
    margin: 10px 20px 0 20px;
`;

const MyListContainer = styled.View`
    display: flex;
    margin: 20px 0 20px 0;
`;

const MyListHeader = styled.Text`
    font-size: 20px;
`;

const MyListContentContainer = styled.View`
    display: flex;
`;

const MyListContents = styled.Text`
    width: 100%;
    height: 100px;

    background: #c4c4c4;
    border-radius: 30px;

    margin-bottom: 15px;
    text-align: center;
`;

export default function Main_Summary() {
    const auth = useAuth();

    let favorite = auth.getFavorite();

    return (
        <MainSummaryContainer>
            <MajorIndex />

            {auth.user ? (
                <MyListContainer>
                    <MyListHeader>My List</MyListHeader>
                    <MyListContentContainer>
                        <MyListContents>SamSung</MyListContents>
                        <MyListContents>12345</MyListContents>
                        <MyListContents>12345</MyListContents>
                        <MyListContents>12345</MyListContents>
                        <MyListContents>12345</MyListContents>
                        <MyListContents>12345</MyListContents>
                    </MyListContentContainer>
                </MyListContainer>
            ) : (
                <Text>로그인해주세요!</Text>
            )}
        </MainSummaryContainer>
    );
}
