import React, { useState } from "react";

export default function localStorageKullan(initialValue, key) {
  const writeToLocalStorageAndSetValue = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  const readFromStorage = () => {
    return JSON.parse(localStorage.getItem(key));
  };
  const [value, setValue] = useState(() => {
    if (readFromStorage() === null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } else {
      return readFromStorage();
    }
  });
  return [value, writeToLocalStorageAndSetValue];
}
