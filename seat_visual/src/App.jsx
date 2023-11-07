import { Layer, Rect, Stage } from "react-konva";
import { Comp } from "./component/comp.jsx";
import { InputConditions } from "./component/InputConditions.jsx";
import React, { useState } from "react";
import "./styles.css";
import { SelectCheckBox } from "./component/SelectCheckBox.jsx";
import { InputUser } from "./component/InputUser.jsx";


export const App = () => {
    const onClickButton = () => {
        alert("user1");
    };

    const [todoText, settodoText] = useState("");
    const [recomText, setrecomText] = useState("");
    const onChangeTodoText = (event) => settodoText(event.target.value);

    const onClickAdd = () => {
        setrecomText("あなたにオススメの席はこちらです！");
      };
    const onClickInit = () => {
        setrecomText("");
    };

    return (
        <>

            <p>
                フリースペース座席レコメンドサービス
            </p>

            <InputUser/>
            <SelectCheckBox
                recomText={recomText}
                onClick={onClickAdd}
                onClickInit={onClickInit}
            />

            <p>
                {recomText}
            </p>

            {/* <InputConditions
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
            /> */}

            {/* <div>
                <h1>こんちゃす</h1>
                <p>お元気か</p>
                <button onClick={onClickButton}>ボタン</button>
            </div> */}

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

