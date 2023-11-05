import { Layer, Rect, Stage } from "react-konva";
import { Comp } from "./component/comp.jsx";
import { InputConditions } from "./component/InputConditions.jsx";
import React, { useState } from "react";
import "./styles.css";
import { SelectCheckBox } from "./component/SelectCheckBox.jsx";

export const App = () => {
    const onClickButton = () => {
        alert("user1");
    };

    const [todoText, settodoText] = useState("");
    const onChangeTodoText = (event) => settodoText(event.target.value);

    const onClickAdd = () => {
        settodoText("TTT");
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

            <InputConditions
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
            />

            <SelectCheckBox/>

        </>
    );
};

