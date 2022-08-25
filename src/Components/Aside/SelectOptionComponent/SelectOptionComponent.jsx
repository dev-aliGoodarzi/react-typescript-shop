// React
import React from "react";
// React
// CSS
import styles from "./selectOptionComponent.module.css";
// CSS
const SelectOptionComponent = ({ options, topContent }) => {
  return (
    <div
      className={`w-100 h-24 flex flex-col items-start justify-between box-border py-3 px-5 ${styles.selectOptionContainer}`}
    >
      <p className="">{topContent}</p>
      <select
        className="w-full box-border p-1 py-2"
        name="transactionType"
        id="transactionType"
      >
        {options.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.valueForShow}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOptionComponent;
