import React, { useState } from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  minheight: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const SelectCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== e.target.value)
      );
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };

  return (
    <div style={style} className="input-area">
      <p>
        今日はどのような席に座りたいですか？：<b>{checkedValues.join("、")}</b>
      </p>
      <label>
        <input
          type="checkbox"
          value="作業に集中したい"
          onChange={handleChange}
          checked={checkedValues.includes("作業に集中したい")}
        />
        作業に集中したい
      </label>
      <br/>
      <label>
        <input
          type="checkbox"
          value="PJメンバーの近くに座りたい"
          onChange={handleChange}
          checked={checkedValues.includes("PJメンバーの近くに座りたい")}
        />
        PJメンバーの近くに座りたい
      </label>
      <br/>
      <label>
        <input
          type="checkbox"
          value="今まで関わりのなかった人の近くに座りたい"
          onChange={handleChange}
          checked={checkedValues.includes("今まで関わりのなかった人の近くに座りたい")}
        />
        今まで関わりのなかった人の近くに座りたい
      </label>
    </div>
  );
};