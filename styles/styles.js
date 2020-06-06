import styled, { css } from "styled-components";
import { Animated } from "react-native";

export const LoadingPage = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #74b9ff;
`;

export const LoadingText = styled.Text`
    color: white;
`;

export const LoadingImage = styled.Image`
    margin: auto;
    width: 300px;
    height: 300px;
    /* ${(props) =>
        props.translate &&
        css`
            translate: translateX(100);
        `} */
`;
