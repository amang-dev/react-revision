
import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userid} = useParams()

  return (

    <div className='my-10 py-10 text-center text-3xl text-orange-800 bg-gray-200'>User {userid}</div>
  )
}

export default User