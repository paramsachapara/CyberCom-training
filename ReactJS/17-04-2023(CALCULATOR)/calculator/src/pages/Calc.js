import "./Cals.css";
import * as React from "react";

const Calc = () => {
  const [result, setResult] = React.useState("");

  // get last character
  const getLastChar = (str) => {
    if (str.length === 0) return "";
    return str[str.length - 1];
  };

  // common function for checking operator condition
  const addOperator = (operator) => {
    const l = getLastChar(result);
    if (
      l === "+" ||
      l === "-" ||
      l === "*" ||
      l === "/" ||
      l === "." ||
      l === ""
    ) {
      setResult(result + "");
    } else {
      setResult(result + operator);
    }
  };

  // checking dot condition
  const addDot = (dot) => {
    const l = getLastChar(result);
    if (l === "+" || l === "-" || l === "*" || l === "/" || l === ".") {
      return;
    }
    if (l === "") {
      setResult(result + 0 + dot);
    } else {
      const arr = result.split(/[\+\-\*\/]/);
      const last = arr[arr.length - 1];
      if (last.includes(".")) {
        setResult(result + "");
      } else {
        setResult(result + dot);
      }
    }
  };

  // get the value of the button
  const Display = (e) => {
    const value = e.target.value;
    switch (value) {
      case "+":
        addOperator(value);
        break;
      case "-":
        addOperator(value);
        break;
      case "*":
        addOperator(value);
        break;
      case "/":
        addOperator(value);
        break;
      case ".":
        addDot(value);
        break;
      default:
        setResult(result + value);
    }
  };

  // evaluate the result
  const evaluate = () => {
    const l = getLastChar(result);
    if (
      l === "+" ||
      l === "-" ||
      l === "*" ||
      l === "/" ||
      l === "." ||
      l === ""
    ) {
      setResult(result + "");
    } else {
      let res = eval(result).toString();
      setResult(res);
    }
  };
  const deleteItem = () => {
    if (result.length === 0) return "";
    result.splice(0, -1);
  };

  return (
    <>
      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          id="output-screen"
          value={result}
        />

        <div className="calculator-keys">
          <button
            type="button"
            className="operator btn btn-info"
            value="+"
            onClick={Display}
          >
            +
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="-"
            onClick={Display}
          >
            -
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="*"
            onClick={Display}
          >
            *
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="/"
            onClick={Display}
          >
            /
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value="("
            onClick={Display}
          >
            (
          </button>
          <button
            type="button"
            className="operator btn btn-info"
            value=")"
            onClick={Display}
          >
            )
          </button>

          <button
            type="button"
            value="7"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            7
          </button>
          <button
            type="button"
            value="8"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            8
          </button>
          <button
            type="button"
            value="9"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            9
          </button>

          <button
            type="button"
            value="4"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            4
          </button>
          <button
            type="button"
            value="5"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            5
          </button>
          <button
            type="button"
            value="6"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            6
          </button>

          <button
            type="button"
            value="1"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            1
          </button>
          <button
            type="button"
            value="2"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            2
          </button>
          <button
            type="button"
            value="3"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            3
          </button>

          <button
            type="button"
            value="0"
            className="btn btn-light waves-effect"
            onClick={Display}
          >
            0
          </button>
          <button
            type="button"
            className="decimal function btn btn-secondary"
            value="."
            onClick={Display}
          >
            .
          </button>
          <button
            type="button"
            className="all-clear function btn btn-danger btn-sm"
            value="all-clear"
            onClick={() => setResult("")}
          >
            AC
          </button>

          <button
            type="button"
            className="equal-sign operator btn btn-default"
            onClick={() => {
              setResult(result.slice(0, -1));
            }}
          >
            DEL
          </button>
          <button
            type="button"
            className="equal-sign operator btn btn-default"
            value="="
            onClick={evaluate}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calc;
