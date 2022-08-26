// React
import React, { useState } from "react";
import homeData, { allProductsData } from "../../DATA/homeData";
import { I_Home } from "../../Models/Models";
import Header from "../Header/Header";
import Listings from "./Listings/Listings";
// React
// CSS
import styles from "./MainComponent.module.css";
// CSS

type MainComponentProps = {
  filteringData: string[];
};

const MainComponent: React.FunctionComponent<MainComponentProps> = ({
  filteringData,
}) => {
  const [isFilterd, setIsFilterd] = useState(false);
  // const [filterdData, setFilterdData] = useState([]);

  return (
    <div
      className={`
      2xl:flex 2xl:flex-col 2xl:justify-between 2xl:items-center
      ${styles.mainContainer}`}
    >
      <Header />
      <main>
        {!isFilterd && (
          <Listings
            topName={"Hot Listings"}
            aboutTopName={"The hottest homes just listed on the market"}
            home={homeData}
          />
        )}
      </main>
    </div>
  );
};

export default MainComponent;
