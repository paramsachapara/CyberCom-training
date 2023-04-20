import React from "react";

function RadioInput(props) {
  const { id, value, checked, onChange } = props;

  return (
    <div className="radio-input " style={{ padding: "1%" }}>
      <input
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        style={{}}
      />
      <label style={{ border: "1px solid black", width: "100px" }} htmlFor={id}>
        {value}
      </label>
    </div>
  );
}

export default RadioInput;
