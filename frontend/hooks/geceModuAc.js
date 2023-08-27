import React, { useState } from "react";
import localStorageKullan from "./localStorageKullan";
const geceModuAc = (initialValue) => {
  const [geceModu, setGeceModu] = localStorageKullan(initialValue, "gece modu");
  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };
  return [geceModu, toggleMode];
};

export default geceModuAc;
