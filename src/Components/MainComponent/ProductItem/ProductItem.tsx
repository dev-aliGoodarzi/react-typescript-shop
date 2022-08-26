// React
import React from "react";
// React
// CSS
import styles from "./ProductItem.module.css";
// CSS
// Images
import { BsFillFlagFill } from "react-icons/bs";
// Images
// CUSTOM TYPES
type ProductItemProps = {
  options: {
    name: string;
    price: number;
    address: string;
    yearOld: string;
    image: string;
    whenUploaded: string;
  };
};
// CUSTOM TYPES

const ProductItem: React.FunctionComponent<ProductItemProps> = ({
  options: { name, price, address, yearOld, image, whenUploaded },
}) => {
  return (
    <div className={`flex flex-col ${styles.productItem}`}>
      <img src={image} alt="" />
      <div className={`p-4 ${styles.bottom}`}>
        <p className={`${styles.name}`}>
          {name} • {yearOld}y Old
        </p>
        <p className={`${styles.price}`}>
          $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p className={`${styles.address}`}>{address}</p>
        <p
          className={`flex flex-row items-center justify-start ${styles.aboutHome}`}
        >
          <BsFillFlagFill className="2xl:mr-2" /> Listed {whenUploaded} days age
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
