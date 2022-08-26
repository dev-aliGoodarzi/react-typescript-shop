// React
import React from "react";
import { Link } from "react-router-dom";
import { I_Home } from "../../../Models/Models";
import ProductItem from "../ProductItem/ProductItem";
// React
// CSS
import styles from "./Listings.module.css";
// CSS

type ListingProps = {
  topName: string;
  aboutTopName: string;
  home: I_Home[];
};

const Listings: React.FunctionComponent<ListingProps> = ({
  topName,
  aboutTopName,
  home,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-between box-border pt-11 px-24 ${styles.listingContainer}`}
    >
      <div className={`w-full  ${styles.top}`}>
        <p className={styles.topName}>{topName}</p>
        <div className={`flex flex-row justify-between ${styles.bottom}`}>
          <p className={styles.aboutTopName}>{aboutTopName}</p>
          <Link to={"/"} className={styles.viewAllBtn}>
            View All
          </Link>
        </div>
      </div>
      <div
        className={`w-full flex flex-row items-center justify-between ${styles.bottom}`}
      >
        {home.map((item) => {
          return <ProductItem options={item} />;
        })}
      </div>
    </div>
  );
};

export default Listings;
