// React
import React from "react";
// React

// CSS
import styles from "./MainComponent.module.css";
// CSS

// Modules
import { Fade } from "react-awesome-reveal";
// Modules

// Models
import { I_Home } from "../../Models/Models";
// Models

// Components
import Header from "../Header/Header";
import Listings from "./Listings/Listings";
// Components

type MainComponentProps = {
  isFilterd: boolean;
  featureFilter: string[];
  itemsForShow: I_Home[];
  filterdProducts: I_Home[];
  isSearchActived: boolean;
  setIsSearchActived: Function;
  setSearchData: Function;
};

const MainComponent: React.FunctionComponent<MainComponentProps> = ({
  isFilterd,
  featureFilter,
  itemsForShow,
  filterdProducts,
  isSearchActived,
  setIsSearchActived,
  setSearchData,
}) => {
  return (
    <div
      className={`
      2xl:flex 2xl:flex-col 2xl:justify-between 2xl:items-center
      ${styles.mainContainer}`}
    >
      <Header
        setIsSearchActived={setIsSearchActived}
        setSearchData={setSearchData}
      />
      <main>
        <Fade>
          {!isFilterd && !isSearchActived && (
            <Listings
              topName={"Hot Listings without Filter"}
              aboutTopName={"The hottest homes just listed on the market"}
              products={itemsForShow}
            />
          )}
          {isFilterd && !isSearchActived && (
            <Listings
              aboutTopName={`Filtering By USER`}
              topName={`Filtering By ${featureFilter.toString()}`}
              products={filterdProducts}
            />
          )}
          {isSearchActived && (
            <Listings
              aboutTopName={`Filtering By USER`}
              topName={`Filtering By ${featureFilter.toString()}`}
              products={filterdProducts}
            />
          )}
        </Fade>
      </main>
    </div>
  );
};

export default MainComponent;
