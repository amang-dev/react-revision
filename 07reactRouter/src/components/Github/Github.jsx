
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export const Github = () => {

   const data =  useLoaderData()
//     const [data, setData] = useState([])

// useEffect(() =>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then((res) => res.json())
//     .then((data) =>{
//         setData(data)
//     })

// },[])

  return (
    <div className='w-8/12 mx-auto text-center text-2xl m-4 text-white p-4 bg-gray-700 '>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="userimg" width={300}  />
    </div>
  )
}

export const githubInfoLoader = async  () =>{

const response =    await fetch('https://api.github.com/users/hiteshchoudhary')
 
return response.json()
}