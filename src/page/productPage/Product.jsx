import React, { useState } from 'react'
import useFetch from '../../FeatchApi/useFetch'
import Card from '../../component/Card';
import Container from '../../layer/Container';

const Product = () => {
    const {data, isLoading, error} = useFetch('https://dummyjson.com/products')
    const [ visibleCount, setVisibleCount ]= useState(12)
    const [ loading, setLoading] = useState(false)

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    const handleLoadMore=()=>{
        setLoading(true)

        setTimeout(()=>{
            setVisibleCount(prev=> prev+6)
            setLoading(false)
        }, 1000)
    }

    return (
        <Container className="pt-10">
            <h1 className='mb-4 text-2xl font-semibold font-Poppins'>New Products</h1>
            <div className='flex flex-wrap gap-1'>
                { 
                    data.slice(0, visibleCount).map((item) =>{
                        const {id, title, price, images, rating, reviews, availabilityStatus }= item
                    return <Card key={id} title={title} price={price} images={images}  rating={rating} reviews={reviews} availabilityStatus={availabilityStatus} />
                    }) 
                }
            </div>

            {
                visibleCount < data.length && (
                    <div className="mt-6 text-center">
                        {
                            loading ? (<button disabled className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300">
                             Loading...</button>) : (<button onClick={handleLoadMore}
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300"> 
                            Load More </button>)
                        }
                    </div>
                )
            }
        </Container>
    )
}

export default Product