// React
import React, { useState } from "react";
import homeData from "../../DATA/homeData";
import Header from "../Header/Header";
import Listings from "./Listings/Listings";
// React
// CSS
import styles from "./MainComponent.module.css";
// CSS

const MainComponent: React.FC = () => {
  const [isFilterd, setIsFilterd] = useState(false);
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
        {}
      </main>
    </div>
  );
};

export default MainComponent;
