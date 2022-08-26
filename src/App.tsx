import React, { useState } from "react";
import Aside from "./Components/Aside/Aside";
import MainComponent from "./Components/MainComponent/MainComponent";

const App = () => {
  const [featureFilter, setFeatureFilter] = useState([]);
  return (
    <>
      <Aside setFeatureFilter={setFeatureFilter} />
      <MainComponent filteringData={featureFilter} />
    </>
  );
};

export default App;
