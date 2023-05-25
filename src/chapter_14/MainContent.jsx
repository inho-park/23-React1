import ThemeContext from "./ThemeContext";
import { useContext } from "react";

export default function MainContent(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light"?"white":"black",
                color: theme == "light"?"black":"white"
            }}
        >
            <p>context 로 테마 변경 구현</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}