import React, { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import StarEmpty from "../../images/star-empty.png";
import StarFull from "../../images/star-full.png";

const SearchBox = styled.View`
    display: flex;
    margin-top: 20px;
    width: 80%;
`;

const SearchField = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    height: 50px;
    border-radius: 20px;
`;

const SearchResultContainer = styled.View`
    width: 90%;
`;

const ResultContainer = styled.View`
    display: flex;
    flex-direction: row;

    margin-top: 20px;
    border: 1px solid black;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const SearchResult = styled.Text``;

const SearchStar = styled.Image`
    width: 30px;
    height: 30px;
`;

export default function Search() {
    const [SearchValue, setSearchValue] = useState("");

    return (
        <GlobalStyle OS={Platform.OS}>
            <SearchBox>
                <SearchField
                    placeholder="type symbol..."
                    onChangeText={(text) => setSearchValue(text)}
                    defaultValue={SearchValue}
                />
            </SearchBox>
            <SearchResultContainer>
                <ResultContainer>
                    <SearchResult>Searched List</SearchResult>
                    <TouchableOpacity onPress={() => console.log("press!")}>
                        <SearchStar source={StarEmpty} />
                    </TouchableOpacity>
                </ResultContainer>
                <ResultContainer>
                    <SearchResult>Searched List</SearchResult>
                    <SearchStar source={StarEmpty} />
                </ResultContainer>
                <ResultContainer>
                    <SearchResult>Searched List</SearchResult>
                    <SearchStar source={StarEmpty} />
                </ResultContainer>
                <ResultContainer>
                    <SearchResult>Searched List</SearchResult>
                    <SearchStar source={StarEmpty} />
                </ResultContainer>
            </SearchResultContainer>
        </GlobalStyle>
    );
}
