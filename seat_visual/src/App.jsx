// import ReactDOM from "react-dom";

export const App = () => {
    const onClickButton = () => {
        alert();
    };
    return (
        <div>
            {console.log("TEST")}
            <h1>こんちゃす</h1>
            <p>お元気か</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};

// ReactDOM.render(<App />, document.getElementById("root"));
