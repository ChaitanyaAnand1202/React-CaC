import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLoaderData, useParams, Outlet } from 'react-router-dom'


function Github() {
  // const data = useLoaderData()
  const [id, setId] = useState('')
  // const [data, setData] = useState({})

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${userId}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  // })


  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)} />
      <NavLink to={`/github/${id}`} >Display Details</NavLink>
      <Outlet />
      
      {/* <Switch>
        <Route path="/:id" children={<Child />} />
      </Switch> */}
      {/* <div>Github followers: {data['followers']}</div>
      <img src={data['avatar_url']} alt="" /> */}
    </>
  )
}

// function Child(){
//   let { userId } = useParams();
//   const data = useLoaderData()

//   return (
//     <>
//       <div>Github followers: {data['followers']}</div>
//       <img src={data['avatar_url']} alt="" />
//     </>
//   )
// }

export default Github

// export const githubLoaderData = async ({ params }) => {
//   const response = await fetch(`https://api.github.com/users/${params.userId}`)
//   const data = await response.json()
//   return data
// }