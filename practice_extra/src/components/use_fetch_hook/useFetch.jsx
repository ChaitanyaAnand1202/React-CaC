import { useState, useEffect } from "react";



export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchData = async() => {
    try {
      setLoading(true)
      // console.log(url);
      const response = await fetch(url)
      if(!response.ok) throw new Error(response.statusText)
      const result = await response.json()
      console.log(result);
      if(result && result.products && result.products.length){
        setData(result.products)
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  // console.log(data);

  return {data, loading, errorMsg}
  
}