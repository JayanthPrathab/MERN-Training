import { useState, useEffect } from "react";
const CustomHook = (key, value) => {
  var [txt, setTxt] = useState(() => {
    var jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
    return value;
  });
  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(txt));
    },
    [key, txt]);
  return [txt, setTxt];
};
export default CustomHook;
