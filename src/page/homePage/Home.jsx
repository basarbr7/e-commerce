import React from "react";
import BannerSlider from "./sliderComponent/BannerSlider";
import Container from "../../layer/Container";
import ProductSlider from "./sliderComponent/ProductSlider";
import CustomBuild from "./customBuild/CustomBuild";

const Home = () => {
  return (
    <>
      <Container>
        <BannerSlider />
        <ProductSlider />
        <CustomBuild/>
      </Container>
    </>
  );
};

export default Home;
