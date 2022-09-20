// React
import React, { useEffect, useState } from "react";
// React
// CSS
import styles from "./selectOptionComponent.module.css";
// CSS

type SelectOptionProps = {
  options: any[];
  topContent: string;
  changi: any;
};

const SelectOptionComponent: React.FunctionComponent<SelectOptionProps> = ({
  options,
  topContent,
  changi,
}) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  useEffect(() => {
    changi(selectedPrice);
  }, [changi, selectedPrice]);

  return (
    <div
      className={`w-100 h-24 flex flex-col items-start justify-between box-border pt-7 px-5 ${styles.selectOptionContainer}`}
    >
      <p className="">{topContent}</p>
      <select
        className="w-full box-border p-1 py-2"
        name="transactionType"
        id="transactionType"
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
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
