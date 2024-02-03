import React, { useEffect, useState } from 'react'

function LoadMore({ total = 100, limit = 20 }) {

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [loadCount, setLoadCount] = useState(0);

  const fetchPrducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${loadCount*limit}`)
      const result = await response.json();
      setProduct(prev => [...prev, ...result.products])
      console.log(product);
      console.log(loadCount);
      setLoading(false)
    } catch (e) {
      console.log("fetch error: ", e);
      setLoading(false)
    }
  }

  useEffect(() => {
    
    fetchPrducts();
  }, [loadCount])

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-500 text-white'>
      <div className='grid grid-cols-4'>
        {
          product.map((item) =>
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} className='w-[100px]' />
              <p>{item.title}</p>
            </div>
          )
        }
      </div>

      <button
        onClick={() => setLoadCount(prev => prev + 1)}
        disabled={product.length > total}>Load More</button>
      {
        (product.length >= total) ? <div>{`Loaded ${total} data`}</div> : null
      }
      {
        loading ? <div>Loading Data, Please wait</div> : null
      }
    </div>

  )
}

export default LoadMore