// React
import React, { useState, useMemo } from "react";
import { allProductsData, homeData, recentlyAdded } from "../../DATA/homeData";
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
  const [filterdData, setFilterdData] = useState<I_Home[]>([]);
  const filterHelper = (dataForFilter: string): void => {
    const fields: any[] = allProductsData.map(
      (item) =>
        item.options.includes(dataForFilter) && {
          ...item,
        }
    );
    const selectedItems: I_Home[] = fields.filter((item) => !!item);
    setFilterdData((): I_Home[] => [...selectedItems]);
  };

  useMemo(() => {
    if (filteringData.length > 0) {
      setIsFilterd(true);
      if (filteringData.includes("Balcony")) {
        filterHelper("Balcony");
      }
      if (filteringData.includes("CentralAir")) {
        filterHelper("CentralAir");
      }
      if (filteringData.includes("Pool")) {
        filterHelper("Pool");
      }
      if (filteringData.includes("FrontPorch")) {
        filterHelper("FrontPorch");
      }
      if (filteringData.includes("DoubleDriveway")) {
        filterHelper("DoubleDriveway");
      }
    } else {
      setIsFilterd(false);
    }
  }, [filteringData]);

  return (
    <div
      className={`
      2xl:flex 2xl:flex-col 2xl:justify-between 2xl:items-center
      ${styles.mainContainer}`}
    >
      <Header />
      <main>
        {!isFilterd && (
          <>
            <Listings
              topName={"Hot Listings"}
              aboutTopName={"The hottest homes just listed on the market"}
              products={homeData}
            />
            <Listings
              topName={"Recently Added"}
              aboutTopName={""}
              products={recentlyAdded}
            />
          </>
        )}
        {isFilterd && (
          <Listings
            topName={"Hot Listings"}
            aboutTopName={"The hottest homes just listed on the market"}
            products={filterdData}
          />
        )}
      </main>
    </div>
  );
};

export default MainComponent;
