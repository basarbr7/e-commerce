import React from "react";
import BannerSlider from "./sliderComponent/BannerSlider";
import Container from "../../layer/Container";
import ProductSlider from "./sliderComponent/ProductSlider";

const Home = () => {
  return (
    <div>
      <Container>
        <BannerSlider />
        <ProductSlider />
      </Container>
    </div>
  );
};

export default Home;
