import React, { useEffect, useState, useRef } from 'react'
import Header from './Header'

function ScrollIndicator({ data = 'https://dummyjson.com/products?limit=100&skip=0' }) {

  const [products, setProducts] = useState([])
  const [percentageScroll, setPercentageScroll] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(data);
      const result = await response.json();
      console.log(result.products)
      setProducts(result.products)
      setLoading(false)
    } catch (error) {
      console.log("error occured:", error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [data])

  const handleScrollPercentage = () => {

    const scrollAmount = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(scrollAmount, height, scrollAmount * 100 / height);
    setPercentageScroll(scrollAmount * 100 / height)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  useEffect(() => {
    console.log(percentageScroll);
  }, [percentageScroll])


  return (
    <div className='h-min-[100vh] w-[100vw] bg-gray-600 text-white text-center static'>
      <Header percentageScroll={percentageScroll} />
      <div className='mt-28'>
        {
          products && products.length ?
            products.map((item) => <div key={item.id}>{item.title}</div>)
            : null
        }
        {
        loading ? <div>Loading, Please wait</div> : null
        }
      </div>
    </div>
  )
}

export default ScrollIndicator