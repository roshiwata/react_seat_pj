import React, { useState } from "react";
import Select from 'react-select';

const options = [
  { value: 'pikachu', label: 'ピカチュウ' },
  { value: 'bulbasaur', label: 'フシギダネ' },
  { value: 'charmander', label: 'ヒトカゲ' },
  { value: 'squirtle', label: 'ゼニガメ' },
]

export const InputUser = () => {

  return (
    <Select options={options} />
    // <div>
    //   <h1>こんちゃす</h1>
    //   <p>お元気か</p>
    // </div>

  );
};