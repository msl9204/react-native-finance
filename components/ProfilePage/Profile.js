import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyles";
import styled from "styled-components";
import { useAuth } from "../Auth/useAuth";

const ProfileHeader = styled.View`
    width: 100%;
    margin-bottom: 30px;
`;

const HeaderText = styled.Text`
    height: 100px;

    background: #c4c4c4;
`;

const ContentCotainer = styled.View`
    width: 100%;
`;

const ContentsText = styled.Text`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid black;
`;

export default function Profile() {
    const auth = useAuth();

    return (
        <GlobalStyle OS={Platform.OS}>
            <ProfileHeader>
                <HeaderText>Header Area</HeaderText>
            </ProfileHeader>
            <ContentCotainer>
                <ContentsText>프로필</ContentsText>
                <ContentsText>정보수정</ContentsText>
                <ContentsText>비밀번호변경</ContentsText>
                <ContentsText>SignOut</ContentsText>
            </ContentCotainer>
        </GlobalStyle>
    );
}
