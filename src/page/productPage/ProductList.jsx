import React, { useState } from 'react'
import useFetch from '../../FeatchApi/useFetch'
import ProductCard from '../../component/ProductCard';
import Container from '../../layer/Container';

const ProductList = () => {
    const {data, isLoading, error} = useFetch('https://dummyjson.com/products')
    const [ visibleCount, setVisibleCount ]= useState(12)
    const [ dataLoading, setDataLoading] = useState(false)

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    const handleLoadMore=()=>{
        setDataLoading(true)

        setTimeout(()=>{
            setVisibleCount(prev=> prev+6)
            setDataLoading(false)
        }, 1000)
    }

    return (
        <Container className="pt-10">
            
            <div className='flex flex-wrap gap-1'>
                { 
                    data.slice(0, visibleCount).map((item) =>{
                        const {id, title, price, images, rating, reviews, availabilityStatus }= item
                    return <ProductCard key={id} title={title} price={price} images={images}  rating={rating} reviews={reviews} availabilityStatus={availabilityStatus} />
                    }) 
                }
            </div>

            {
                visibleCount < data.length && (
                    <div className="mt-6 text-center">
                        <button 
                            onClick={handleLoadMore}
                            disabled={dataLoading}
                            className={`bg-blue-600 text-white px-6 py-2 rounded transition-all duration-300 ${dataLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} >
                            {dataLoading ? 'Loading...' : 'Load More'}
                        </button>

                    </div>
                )
            }
        </Container>
    )
}

export default ProductList