import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background: red;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

export default function MainPage(props) {
    return (
        <Wrapper>
            Wrapper 내부
            <Title>
                Title 내부
            </Title>
        </Wrapper>
    )
}