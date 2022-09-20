// React
import React from "react";
// React
// CSS
import styles from "./Listings.module.css";
// CSS
//Components
import { I_Home } from "../../../Models/Models";
import ProductItem from "../ProductItem/ProductItem";
//Components
// Modules
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
// Modules

type ListingProps = {
  topName: string;
  aboutTopName: string;
  products: I_Home[];
};

const Listings: React.FunctionComponent<ListingProps> = ({
  topName,
  aboutTopName,
  products,
}) => {
  return (
    <Fade>
      <div
        className={`w-full flex flex-col items-center justify-between box-border pt-11 px-24 ${styles.listingContainer}`}
      >
        <div className={`w-full  ${styles.top}`}>
          <p className={styles.topName}>{topName}</p>
          <div className={`flex flex-row justify-between ${styles.bottom}`}>
            <p className={styles.aboutTopName}>
              {aboutTopName === "" ? null : aboutTopName}
            </p>
            {aboutTopName === "" ? null : (
              <Link to={"/"} className={styles.viewAllBtn}>
                View All
              </Link>
            )}
          </div>
        </div>
        <div
          className={`w-full flex flex-row flex-wrap items-center justify-between ${styles.bottom}`}
        >
          {products.map((item) => {
            return (
              <Fade direction="left" key={item.id}>
                <ProductItem options={item} />
              </Fade>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default Listings;
