import React, { useState } from "react";

const geceModuAc = (initialValue) => {
  const [geceModu, setGeceModu] = useState(initialValue);
  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };
  return [geceModu, toggleMode];
};

export default geceModuAc;
