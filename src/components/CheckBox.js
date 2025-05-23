import React, { useState } from "react";

const ControlledCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBoxChange}
          style={{ accentColor: "#4b5563" }}
        />
      </label>
      <h3 className="px-2">Remember me?</h3>
    </div>
  );
};
export default ControlledCheckBox;
