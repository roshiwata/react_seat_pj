// import ReactDOM from "react-dom";
import { Layer, Rect, Stage } from "react-konva";
import { Comp } from "./component/comp.jsx";

export const App = () => {
    const onClickButton = () => {
        alert("user1");
    };
    return (
        <>
            <div>
                <h1>こんちゃす</h1>
                <p>お元気か</p>
                <button onClick={onClickButton}>ボタン</button>
            </div>

            <Stage width={500} height={500}>
                <Layer>
                    <Rect stroke='black' strokeWidth={4} x={5} y={5} width={490} height={490} />
                    <Rect fill='red' x={100} y={100} width={300} height={200} />
                </Layer>
            </Stage>

            <Comp/>

        </>
    );
};

// ReactDOM.render(<App />, document.getElementById("root"));
