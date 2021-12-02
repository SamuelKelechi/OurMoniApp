import React from "react";
import InfoBox from "./InfoBox";
import InfoPage from "./InfoPage";
import pic from "../InfoGraph/image/1.jpg";
import pic1 from "../InfoGraph/image/4.jpg";

import InfoSlider from "./InfoSlider";
import HomeEsther from "../Home/EstherHome/HomeEsther"

function Inforgraph() {
  return (
    <>
      <InfoSlider />
      <InfoBox />
      <InfoPage img={pic} />
      <InfoPage fd="row-reverse" img={pic1} />
      <HomeEsther />
    </>
  );
}

export default Inforgraph;
