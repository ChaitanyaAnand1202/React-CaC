import React, { useEffect, useState } from 'react'

function SearchAutocomplete() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [suggestion, setSuggestion] = useState(null)
  const [searchParam, setSearchParam] = useState("")

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users?limit=50')
      const result = await response.json()
      // console.log(result);
      if (result && result.users && result.users.length) {
        setData(result.users.map((user) => (user.firstName)))
        setLoading(false)

      }
    } catch (error) {
      console.log("Error occured: ", error);
      setLoading(false)
    }
  }

  const getSuggestions = () => {
    if (data && data.length && searchParam.length >= 2) {
      const tempList = (data.filter((username) => username.toLowerCase().includes(searchParam.toLowerCase())))
      setShowDropdown(true)
      setSuggestion(tempList)
    }
    if(searchParam.length < 2){
      setShowDropdown(false)
    }
  }

  const handleClickItem = (item) => {
    setSearchParam(item)
    setShowDropdown(false)
    setSuggestion([])
  }

  useEffect(() => {
    getSuggestions()
  }, [searchParam])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])


  return (
    <div className='h-[100vh] w-[100vw] bg-gray-700 text-white'>
      <div className='flex flex-col justify-center text-center gap-4'>
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className='text-black mx-auto p-2' />
        {
          showDropdown && suggestion.length ? <ul>
            {
              suggestion.map((item, index) => 
                <li key={index} onClick={() => handleClickItem(item)}>{item}</li>)
            }
          </ul> : null
        }
        {
          loading ? <div>Loading, please wait</div> : null
        }
      </div>
    </div>
  )
}

export default SearchAutocomplete