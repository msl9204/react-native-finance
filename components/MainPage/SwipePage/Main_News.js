import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import styled from "styled-components";
import Axios from "axios";

const NewsContents = styled.Text`
    margin: 20px;
    border: 1px solid black;
    height: 80px;
    padding: 10px;
`;

export default function Main_News() {
    const [NewsData, setNewsData] = useState(null);

    function Item({ title }) {
        return (
            <View>
                <NewsContents>{title}</NewsContents>
            </View>
        );
    }

    useEffect(() => {
        Axios.get(
            "https://finnhub.io/api/v1/news?category=general&token=bq8njs7rh5rc96c0jpt0"
        ).then((response) => {
            setNewsData(response.data);
        });
    }, []);

    return (
        <React.Fragment>
            <FlatList
                data={NewsData}
                renderItem={({ item }) => <Item title={item.headline} />}
                keyExtractor={(item) => item.headline}
            />
        </React.Fragment>
    );
}
