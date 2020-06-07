import styled from "styled-components";

export const GlobalStyle = styled.SafeAreaView`
    padding-top: ${(props) => (props.OS === "android" ? "30px" : "0px")};
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
`;
