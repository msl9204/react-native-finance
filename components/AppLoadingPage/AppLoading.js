import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components";
import { LoadingPage, LoadingText, LoadingImage } from "../../styles/styles";

export default function AppLoading({ navigation }) {
    const [value, setValue] = useState(new Animated.Value(0));
    const [position, setPosition] = useState(
        new Animated.ValueXY({ x: -100, y: 0 })
    );

    useEffect(() => {
        Animated.decay(position, {
            toValue: { x: 1, y: 0 },
            velocity: 0.2,
        }).start();

        setTimeout(() => navigation.navigate("Home"), 3000);
    }, []);

    function _getStyle() {
        return {
            transform: [{ translateX: position.x }],
        };
    }

    return (
        <LoadingPage>
            <StyledAnimated style={_getStyle()}>
                <LoadingImage
                    source={require("../../images/stock-arrow.png")}
                />
            </StyledAnimated>
        </LoadingPage>
    );
}

const StyledAnimated = styled(Animated.View)`
    margin: auto;
`;
