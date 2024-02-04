import React, { useEffect, useState } from 'react'

function GithubProfileFinder() {
  const [data, setData] = useState(null)
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleClick = async () => {
    try {
      setLoading(true)
      if (username && username.length) {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const result = await response.json();
        if (result && Object.keys(result).length) {
          setData(result)
          setUsername("")
        }

        console.log("Reuslt : ", result);
        setErrorMsg(null)
      }
      setLoading(false)
    } catch (error) {
      // console.log("Error occured: ", error);
      setErrorMsg(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log("data: ", data);
  }, [data])

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-600 text-white flex flex-col items-center justify-center gap-2'>
      <div>
        <input type="text" name="" id=""
          value={username}
          placeholder='Enter username'
          onChange={(e) => setUsername(e.target.value)}
          className='text-black p-2 m-2' />
        <button
          onClick={handleClick}
          className='bg-red-500 text-white p-2'>Find Proile</button>
      </div>
      {
        loading ? <div>Loading data, please wait</div> : null
      }
      {
        errorMsg ? <div>{errorMsg}</div> : null
      }
      <div className='h-min-[400px] w-[800px] border-black border-4 p-5 bg-gray-800'>
        {
          data && Object.keys(data).length ?
            <div className='flex flex-col items-center text-2xl gap-4'>
              <div>{data.name}</div>
              <div>
                <img src={data.avatar_url} alt=""
                  className='w-[100px] rounded-full' />
              </div>
              <div>Public Repos: {data.public_repos}</div>
              <div>Followers: {data.followers}</div>
              <div>Following: {data.following}</div>
            </div>
            : null
        }

      </div>
    </div>
  )
}

export default GithubProfileFinder