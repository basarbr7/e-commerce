import React from 'react'
import BannerSlider from './BannerSlider'
import Container from '../../layer/Container'
import Product from '../productPage/Product'

const Home = () => {
  return (
    <div>
      <Container>
        <BannerSlider />
        <Product/>
      </Container>
    </div>
  )
}

export default Home