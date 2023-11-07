import React, { useState } from "react";
import Select from 'react-select';
import logoImage from './test.png';

const options = [
  { value: 'PCO', label: (
    <div>
      <img src={logoImage} alt="PCO Avatar" width="30" height="30" />
      PCO
    </div>
    ) 
    },
  { value: 'PC', label: (
    <div>
      <img src={logoImage} alt="PC Avatar" width="30" height="30" />
      PC
    </div>
    ) 
    },
  { value: 'PAS', label: (
    <div>
      <img src={logoImage} alt="PAS Avatar" width="30" height="30" />
      PAS
    </div>
    ) 
    },
]

export const InputUser = () => {

  return (
    <div>
      {/* <img src={logoImage} alt="Your Logo" /> */}
      <Select options={options} />
    </div>
  );
};