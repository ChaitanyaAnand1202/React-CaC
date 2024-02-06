import React, { useRef } from 'react'
import useFetch from '../use_fetch_hook/useFetch'

function ScrollTopBottom() {

  const { data, loading, errorMsg } = useFetch('https://dummyjson.com/products?limit=100')
  const bottomRef = useRef()

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }


  // if (loading) return (<div>Loading, please wait</div>)
  // if (errorMsg) return (<div>Error occured: {errorMsg}</div>)


  return (
    <div className='min-h-[100vh] w-[100vw] bg-gray-500 text-white text-center'>
      <div className='text-3xl p-4'>ScrollTopBottom</div>
      <div className='text-2xl p-2'>This is top section</div>
      <button
        onClick={handleScrollToBottom}
        className='bg-white text-black p-1 my-2 rounded-md'>Scroll to Bottom</button>
      {
        data && data.length ?
          <ul>
            {
              data.map((item, index) => <li key={index}>{item.title}</li>)
            }
          </ul>
          : null
      }
      {
        loading ? <div>Loading, please wait</div> : null
      }
      {
        errorMsg ? <div>Error occured: {errorMsg}</div> : null
      }

      <button
        onClick={handleScrollToTop}
        className='bg-white text-black p-1 my-2 rounded-md'>Scroll to Top</button>
      <div ref={bottomRef} className='text-2xl p-2' >This is bottom section</div>
    </div>
  )
}

export default ScrollTopBottom