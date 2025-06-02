import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError]= useState(null)

    useEffect(()=>{
        const fetchData= async () => {
            try {
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error("featching is not sucessfull");
                }
                const data = await res.json()
                setdata(data.products)
            } catch (error) {
                setError(error.message)
            } finally{
                setIsLoading(false)
            }
        };
        fetchData();
    }, [url])

  return {data, isLoading, error}
}

export default useFetch