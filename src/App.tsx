import React, { useState, useEffect } from "react";
import Aside from "./Components/Aside/Aside";
import MainComponent from "./Components/MainComponent/MainComponent";
import { allProductsData } from "./DATA/homeData";
import { I_Home } from "./Models/Models";

const App: React.FunctionComponent = () => {
  // Methods
  const findProductsByPropertyType = (): I_Home[] => {
    if (propertyType === "All") {
      return allProductsData;
    } else {
      const selectedProductsPropertyItems = allProductsData.filter((item) => {
        return item.propertyType === propertyType;
      });
      if (selectedProductsPropertyItems.length === 0) {
        return [];
      } else {
        return selectedProductsPropertyItems;
      }
    }
  };
  const filteringByFeatures = (): I_Home[] => {
    const products = [...allProductsBySelectedProperty];
    return products.filter((item) => {
      return item.options.some((productsOptions) => {
        return featureFilter.some((feature) => {
          return productsOptions === feature;
        });
      });
    });
  };
  const ifFilterON__checkPriceAndMakeItReady = (): I_Home[] => {
    if (priceFilter === 0) {
      return filteringByFeatures();
    } else {
      const itemsForShow = filteringByFeatures();
      return itemsForShow.filter((item) => {
        return item.price > priceFilter;
      });
    }
  };
  const ifFilterOFF__checkPriceAndMakeItReady = (): I_Home[] => {
    if (priceFilter === 0) {
      return findProductsByPropertyType();
    } else {
      const itemsForShow = findProductsByPropertyType();
      return itemsForShow.filter((item) => {
        return item.price > priceFilter;
      });
    }
  };
  const ifFilterON__sortItemsBySearchString = (): I_Home[] => {
    if (featureFilter.length > 0) {
      return ifFilterON__checkPriceAndMakeItReady().filter((item) => {
        return item.address.includes(searchData);
      });
    } else {
      return ifFilterON__checkPriceAndMakeItReady();
    }
  };
  const ifFilterOFF__sortItemsBySearchString = () => {
    if (featureFilter.length > 0) {
      return ifFilterOFF__checkPriceAndMakeItReady().filter((item) => {
        return item.address.includes(searchData);
      });
    } else {
      return ifFilterON__checkPriceAndMakeItReady();
    }
  };
  // Methods
  /***********************STATES********************* */
  // storing propertyTypes In here
  const [propertyType, setPropertyType] = useState("All");
  // storing propertyTypes In here
  /* */
  // storing Price In here
  const [priceFilter, setPriceFilter] = useState<number>(0);
  // storing Price In here
  /* */
  // storing features Filter
  const [featureFilter, setFeatureFilter] = useState<string[]>([]);
  // storing features Filter
  /* */
  // if allProperty Selected It will Be true
  // const [isAllProperty, setIsAllProperty] = useState<boolean>(true);
  // if allProperty Selected It will Be true
  /* */
  // if filtering Is actived It willBe true
  const [isFilterd, setIsFilterd] = useState<boolean>(false);
  // if filtering Is actived It willBe true
  /* */
  const [isSearchActived, setIsSearchActived] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<string>("");
  // products by Selected Property will stored In here
  const [allProductsBySelectedProperty, setAllProductsBySelectedProperty] =
    useState(findProductsByPropertyType());
  // products by Selected Property will stored In here
  // readyItems willbe sotred Here
  const [readyItems, setReadyItems] = useState<I_Home[]>(
    ifFilterON__checkPriceAndMakeItReady()
  );
  // readyItems willBe stored Here
  /***********************STATES********************* */
  // Life Cycles
  useEffect(() => {
    setAllProductsBySelectedProperty(findProductsByPropertyType());
  }, [propertyType]);
  //
  useEffect(() => {
    if (featureFilter.length > 0) return setIsFilterd(true);
    else {
      return setIsFilterd(false);
    }
  }, [featureFilter.length]);
  //
  useEffect(() => {
    setAllProductsBySelectedProperty(ifFilterOFF__checkPriceAndMakeItReady());
    setReadyItems(ifFilterON__checkPriceAndMakeItReady());
  }, [priceFilter, featureFilter]);
  //
  useEffect(() => {
    if (featureFilter.length > 0) {
      console.log(
        "ifFilterON__sortItemsBySearchString",
        ifFilterON__sortItemsBySearchString()
      );
      setReadyItems(ifFilterON__sortItemsBySearchString());
    } else {
      setReadyItems(ifFilterOFF__sortItemsBySearchString());
    }
  }, [searchData.length]);
  // Life Cycles

  return (
    <>
      <Aside
        setFeatureFilter={setFeatureFilter}
        setPriceFilter={setPriceFilter}
        setPropertyType={setPropertyType}
      />
      <MainComponent
        isFilterd={isFilterd}
        featureFilter={featureFilter}
        itemsForShow={allProductsBySelectedProperty}
        filterdProducts={readyItems}
        isSearchActived={isSearchActived}
        setIsSearchActived={setIsSearchActived}
        setSearchData={setSearchData}
      />
    </>
  );
};

export default App;
