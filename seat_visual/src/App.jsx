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

            <Comp/>

        </>
    );
};

