// React
import React, { SetStateAction, useEffect, useState } from "react";
// React
// CSS
import styles from "./Aside.module.css";
// CSS
// INTERFACES
import {
  I_CheckBoxes,
  I_PriceOptions,
  I_PropertyButtons,
  I_Transition,
} from "../../Models/Models";
// INTERFACES
// Components
import SelectOptionComponent from "./SelectOptionComponent/SelectOptionComponent";
import RaidioButton from "./RaidioButton/RaidioButton";
import CheckBox from "./CheckBox/CheckBox";
// Components

type AsideProps = {
  setFeatureFilter: Function;
  setPriceFilter: Function;
  setPropertyType: Function;
};

const Aside: React.FunctionComponent<AsideProps> = ({
  setFeatureFilter,
  setPriceFilter,
  setPropertyType,
}) => {
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
      value: 0,
      id: "all",
      valueForShow: "All ",
    },
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
      label: "All",
      isSelected: true,
    },
    {
      label: "House",
      isSelected: false,
    },
    {
      label: "Apartment",
      isSelected: false,
    },
    {
      label: "Townhouse",
      isSelected: false,
    },
  ];
  const checkboxes: I_CheckBoxes[] = [
    {
      name: "Balcony",
      label: "Balcony",
      isChecked: false,
    },
    {
      name: "CentralAir",
      label: "Central Air",
      isChecked: false,
    },
    {
      name: "Pool",
      label: "Pool",
      isChecked: false,
    },
    {
      name: "FrontPorch",
      label: "Front Porch",
      isChecked: false,
    },
    {
      name: "DoubleDriveway",
      label: "Double Driveway",
      isChecked: false,
    },
  ];
  // DATA
  // STATES
  // *************************************
  // for propertyType selected Monitoring
  const [propertyTypeState, setPropertyTypeState] = useState(propertyButtons);
  // for propertyType Monitoring
  // *************************************
  // for Features selected Monitoring
  const [selectedFeature, setSelectedFeature] = useState<string[]>([]);
  // for Features selected Monitoring
  // *************************************
  const priceChangeStateSetter = (val: string): void => {
    setPriceFilter(val);
  };
  // *************************************
  // STATES
  // setStates
  const featureSelectorHandler = (featureName: string) => {
    /**  in here if selected Feature has this
     Arg (fatureName) removeIt from State
     * Else add It **/
    if (selectedFeature.includes(featureName)) {
      const copyOfState = [...selectedFeature];
      const selectedIndex = copyOfState.findIndex(
        (item) => item === featureName
      );
      copyOfState.splice(selectedIndex, 1);
      setSelectedFeature(copyOfState);
      return;
    } else {
      setSelectedFeature([...selectedFeature, featureName]);
      return;
    }
  };
  // setStates

  useEffect(() => {
    setFeatureFilter(selectedFeature);
  }, [setFeatureFilter, selectedFeature]);

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
        changi={() => {}}
      />
      {/* Transition Type */}
      {/* Price Range  */}
      <SelectOptionComponent
        options={optionsForPrice}
        topContent={"Price Range"}
        changi={priceChangeStateSetter}
      />
      {/* Price Range  */}
      {/* Property Type */}
      <div className={`mt-7 px-5 ${styles.propertyName}`}>
        <h1 className={`${styles.texty}`}>Property Type</h1>
        {propertyTypeState.map((item) => {
          return (
            <RaidioButton
              options={item}
              key={item.label}
              onClick={() => {
                propertyTypeState.forEach((item) => (item.isSelected = false));
                item.isSelected = true;
                setPropertyType(item.label);
              }}
            />
          );
        })}
      </div>
      {/* Property Type */}
      <hr className={`${styles.customHr} 2xl:mt-7`} />
      <h1 className={`${styles.texty} 2xl:ml-5 2xl:mt-7`}>Features</h1>
      <div className={styles.checkboxesContainer}>
        {checkboxes.map((item) => {
          return (
            <CheckBox
              key={item.name}
              options={item}
              onClick={() => featureSelectorHandler(item.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Aside;

/// اگه در آینده خواستم که مقدار پراپرتی ها رو بگیرم ، از
// selectedPropertyType;
// استفاده میکنم

// اگه هم بخوام مقدار چک باکس ها رو بگیرم از
// selectedFeature;
// که یه آرایه س استفاده میکنم
