import React, { useState } from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  minheight: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style} className="input-area">
      <input placeholder="Todoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
