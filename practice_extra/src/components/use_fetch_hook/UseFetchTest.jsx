import React from 'react'
import useFetch from './useFetch'

function UseFetchTest() {

  const { data, loading, errorMsg } = useFetch('https://dummyjson.com/products?limit=50')
  console.log(data);


  return (
    <div className='h-min-[100vh] w-[100vw] bg-gray-600 text-white text-center'>
      <div className='text-3xl my-4'>UseFetch Hook</div>
      {
        data && data.length ?
          <ul>
            {
              data.map((item, index) => <li key={index} className='my-2'>{item.title}</li>)
            }
          </ul>
          : null
      }
      {
        errorMsg ? <div>Error occured: {errorMsg}</div> : null
      }
      {
        loading ? <div>Loading, please wait</div> : null
      }
    </div>
  )
}

export default UseFetchTest