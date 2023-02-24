import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history"));
    if (storedHistory) {
      setHistory(storedHistory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
      setHistory([...history, input + " = " + eval(input).toString()]);
    } catch (e) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setHistory([]);
  };

  return (
    <div className="calculator">
      <input type="text" value={input} />
      <br />
      <div>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="+" onClick={handleClick}>
          +
        </button>
        <br />
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="-" onClick={handleClick}>
          -
        </button>
        <br />
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="*" onClick={handleClick}>
          x
        </button>
        <br />
        <button value="C" onClick={handleClear}>
          C
        </button>
        <button value="0" onClick={handleClick}>
          0
        </button>
        <button value="=" onClick={handleEqual}>
          =
        </button>
        <button value="/" onClick={handleClick}>
          ÷
        </button>
      </div>
      <br />
      <h3>History:</h3>
      <ul>
        {history.map((h, index) => (
          <li key={index}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
