import { useParams, useLoaderData } from "react-router-dom";


function GithubUser(){
  let { userId } = useParams();
  const data = useLoaderData()

  return (
    <>
      <div>Github followers: {data['followers']}</div>
      <img src={data['avatar_url']} alt="" />
    </>
  )
}

export default GithubUser;


export const githubLoaderData = async ({ params }) => {
  const response = await fetch(`https://api.github.com/users/${params.userId}`)
  const data = await response.json()
  return data
}