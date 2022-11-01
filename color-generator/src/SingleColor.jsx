import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={handleCopy}
    >
      <p className="percent-value">% {weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
