import React, { useState } from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <ul key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
