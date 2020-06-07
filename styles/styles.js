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

export const SignInButton = styled.TouchableOpacity`
    background: #74b9ff;
    width: 60px;
    height: 30px;
    border-radius: 30px;
`;

export const SignInText = styled.Text`
    color: white;
    text-align: center;
    padding-top: 4px;
`;

export const SignOutButton = styled(SignInButton)`
    background: #e74c3c;
    width: 60px;
    height: 30px;
    border-radius: 30px;
`;
