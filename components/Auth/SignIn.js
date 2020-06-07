// TODO : 로그인 실패 시 모달창 만들기

import React, { useState } from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import styled from "styled-components";
import { Text } from "react-native";

import { useAuth } from "./useAuth";

const FormContainer = styled.View`
    display: flex;
    margin-top: 300px;
    align-items: center;
`;

const EmailText = styled.TextInput`
    width: 300px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 30px;
    margin-bottom: 30px;
    padding: 0 15px 0 15px;
`;

const SubmitButton = styled.Button`
    background: #74b9ff;
    border-radius: 90px;
`;

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const auth = useAuth();

    return (
        <GlobalStyle>
            <FormContainer>
                <EmailText
                    placeholder="email"
                    onChangeText={(text) => setEmail(text)}
                    defaultValue={email}
                />
                <EmailText
                    placeholder="password"
                    onChangeText={(text) => setPassword(text)}
                    defaultValue={password}
                    secureTextEntry
                />
                <SubmitButton
                    title="SignIn"
                    onPress={() => {
                        auth.signin(email, password).then((response) =>
                            console.log(response)
                        );
                    }}
                />
            </FormContainer>
            <Text onPress={() => navigation.navigate("SignUp")}>
                계정이 없으신가요? -> SignUp
            </Text>
        </GlobalStyle>
    );
}
