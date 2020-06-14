import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import Axios from "axios";

const SummaryBoxContainer = styled(ScrollView)``;

const SummaryBox = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 140px;
    height: 70px;

    margin-right: 5px;

    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
`;

const IndexName = styled.Text`
    font-size: 12px;
`;

const IndexPrice = styled.Text``;

export default function MajorIndex() {
    const [IndexData, setIndexData] = useState(null);

    useEffect(() => {
        Axios.get(
            "https://financialmodelingprep.com/api/v3/majors-indexes?apikey=1c6ea94684ef991538d2a311427e2b77"
        ).then((response) => {
            setIndexData(response.data);
        });
    }, []);

    return (
        <SummaryBoxContainer horizontal showsHorizontalScrollIndicator={false}>
            {IndexData &&
                IndexData.majorIndexesList.map((item) => (
                    <SummaryBox key={item.indexName}>
                        <IndexName>{item.indexName}</IndexName>
                        <IndexPrice>
                            {item.price} ({item.changes})
                        </IndexPrice>
                    </SummaryBox>
                ))}
        </SummaryBoxContainer>
    );
}
