// React
import React, { useState } from "react";
// React
// CSS
import styles from "./aside.module.css";
// CSS
// INTERFACES
import {
  I_PriceOptions,
  I_PropertyButtons,
  I_Transition,
} from "../../Models/Models";
// INTERFACES
// Components
import SelectOptionComponent from "./SelectOptionComponent/SelectOptionComponent";
import RaidioButton from "./RaidioButton/RaidioButton";
// Components
const Aside = () => {
  // DATA
  const optionsForTransition: I_Transition[] = [
    {
      value: "forSale",
      id: "forSale1",
      valueForShow: "For Sale1",
    },
    {
      value: "forSale",
      id: "forSale2",
      valueForShow: "For Sale2",
    },
    {
      value: "forSale",
      id: "forSale3",
      valueForShow: "For Sale3",
    },
  ];
  const optionsForPrice: I_PriceOptions[] = [
    {
      value: 1000000,
      id: "pricePlusOneMillion",
      valueForShow: "1,000,000 +",
    },
    {
      value: 2000000,
      id: "pricePlusTwoMillion",
      valueForShow: "2,000,000 +",
    },
  ];
  const propertyButtons: I_PropertyButtons[] = [
    {
      label: "House",
      isSelected: false,
    },
    {
      label: "Apartment",
      isSelected: true,
    },
    {
      label: "Townhouse",
      isSelected: false,
    },
  ];
  // DATA

  // STATES
  const [raidioState, setRadioState] = useState(propertyButtons);
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  // STATES
  // setStates
  const radioSelector = (selectedValue: string) => {
    const copyOfState = [...raidioState];
    copyOfState.forEach((item) => (item.isSelected = false));
    const filterdByValueIndex = copyOfState.findIndex(
      (item) => item.label === selectedValue
    );
    copyOfState[filterdByValueIndex].isSelected = true;
    setSelectedPropertyType(copyOfState[filterdByValueIndex].label);
    setRadioState(copyOfState);
  };
  //
  // setStates
  return (
    <div className={`${styles.asideContainer}`}>
      {/* logo */}
      <div
        className={`w-100 h-20 flex items-center justify-around box-border pr-12 ${styles.logo}`}
      >
        <b className="text-white text-xl">Workcation</b>
      </div>
      {/* logo */}
      {/* Transition Type */}
      <SelectOptionComponent
        options={optionsForTransition}
        topContent={"Transaction Type"}
      />
      {/* Transition Type */}
      {/* Price Range  */}
      <SelectOptionComponent
        options={optionsForPrice}
        topContent={"Price Range"}
      />
      {/* Price Range  */}
      {/* Property Type */}
      <div className={`py-3 px-5 ${styles.propertyName}`}>
        <h1 className={`${styles.texty}`}>Property Type</h1>
        {raidioState.map((item) => {
          return (
            <RaidioButton
              options={item}
              key={item.label}
              onClick={() => {
                radioSelector(item.label);
              }}
            />
          );
        })}
      </div>
      
      {/* Property Type */}
    </div>
  );
};

export default Aside;
