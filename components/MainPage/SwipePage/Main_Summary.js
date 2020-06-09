import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const MainSummaryContainer = styled.View`
    display: flex;
    margin: 10px 20px 0 20px;
`;

const SummaryBoxContainer = styled(ScrollView)`
    display: flex;
    flex-direction: row;
`;

const SummaryBox = styled.Text`
    width: 140px;
    height: 70px;

    margin-right: 5px;

    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    text-align: center;
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
    return (
        <MainSummaryContainer>
            <SummaryBoxContainer
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <SummaryBox>KOSPI</SummaryBox>
                <SummaryBox>KOSDAQ</SummaryBox>
                <SummaryBox>다우산업</SummaryBox>
                <SummaryBox>다우운송</SummaryBox>
                <SummaryBox>나스닥100</SummaryBox>
                <SummaryBox>S&P500</SummaryBox>
                <SummaryBox>상해종합</SummaryBox>
                <SummaryBox>니케이225</SummaryBox>
                <SummaryBox>FTSE100</SummaryBox>
                <SummaryBox>CSC40</SummaryBox>
            </SummaryBoxContainer>

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
        </MainSummaryContainer>
    );
}
