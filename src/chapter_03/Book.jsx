import React from "react";

// 컴포넌트 선언 시 대문자로 선언 ( 함수와 구분 짓기 )
export default function Book(props) {
    return (
        <div>
            <h1>{`책 이름 : ${props.name}`}</h1>
            <h1>{`페이지 : ${props.numOfPage}`}</h1>
        </div>
    );
};