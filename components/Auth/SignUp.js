import React, { useState } from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { SignInButton, SignInText } from "../../styles/styles";
import styled from "styled-components";
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

export default function SignUp() {
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
                <SignInButton
                    onPress={() => {
                        auth.signup(email, password).then((response) =>
                            console.log(response)
                        );
                    }}
                >
                    <SignInText>SignUp</SignInText>
                </SignInButton>
            </FormContainer>
        </GlobalStyle>
    );
}
