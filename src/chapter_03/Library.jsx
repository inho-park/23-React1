import React from "react";
import Book from "./Book";

// 컴포넌트 선언 시 대문자로 선언 ( 함수와 구분 짓기 )
export default function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>
            <Book name="처음 만난 AWS" numOfPage={400}></Book>
            <Book name="처음 만난 리액트" numOfPage={500}></Book>
        </div>
    );
};