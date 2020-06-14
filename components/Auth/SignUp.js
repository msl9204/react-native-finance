import React, { useState } from "react";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { SignInButton, SignInText } from "../../styles/styles";
import styled from "styled-components";
import { useAuth } from "./useAuth";
import { firestore_db } from "../../db/firebase_auth";

const FormContainer = styled.View`
    display: flex;
    margin-top: 260px;
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

function test(email, nickname) {
    const nickRef = firestore_db.collection("nicknames").doc(nickname);

    return nickRef
        .get()
        .then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                nickRef.set({ email: email });
            }
        })
        .catch(function (error) {
            console.log("Error getting document:", error);
        });
}

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nickName, setNickName] = useState();
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
                <EmailText
                    placeholder="nickname"
                    onChangeText={(text) => setNickName(text)}
                    defaultValue={nickName}
                />
                <SignInButton
                    onPress={() => {
                        auth.signup(email, password).then((response) => {
                            if (response.accessToken !== null) {
                                auth.checkAndAddNickname(email, nickName);
                                navigation.navigate("Home");
                            }
                        });
                    }}
                >
                    <SignInText>SignUp</SignInText>
                </SignInButton>
            </FormContainer>
        </GlobalStyle>
    );
}
