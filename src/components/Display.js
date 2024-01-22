/* Display.js */

import React from "react";
import "./styles/Display.css";
import "./styles/DarkTheme.css";

const Display = ({ input, setInput, answer, isDarkTheme }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <div className={`display ${isDarkTheme ? 'dark-theme' : ''}`}>
      {answer === "" ? (
        <input
          type="text"
          name="input"
          className={`input ${isDarkTheme ? 'dark-theme' : ''}`}
          style={{ padding: "29px" }}
          value={input}
          placeholder="0"
          maxLength={12}
          onChange={onChangeTagInput}
          autoComplete="off"
        />
      ) : (
        <>
          <input
            type="text"
            name="input"
            className={`value ${isDarkTheme ? 'dark-theme' : ''}`}
            value={input}
            placeholder="0"
            maxLength={12}
            disabled
          />
          <input
            type="text"
            name="value"
            className={`input ${isDarkTheme ? 'dark-theme' : ''}`}
            value={answer}
            disabled
          />
        </>
      )}
    </div>
  );
};

export default Display;
