// React
import React from "react";
// React
// CSS
import styles from "./RaidioButton.module.css";
// CSS
const RaidioButton = ({ options: { label, isSelected }, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`w-full flex items-center justify-start px-4 py-1 -mx-4 ${styles.raidioButtonContainer}`}
    >
      <span
        id={label}
        className={`${isSelected && styles.selected} w-6 h-6`}
        checked={isSelected ? true : false}
      ></span>
      <p className={`text-white pl-2 `} onClick={() => onClick(label)}>
        {label}
      </p>
    </div>
  );
};

export default RaidioButton;
