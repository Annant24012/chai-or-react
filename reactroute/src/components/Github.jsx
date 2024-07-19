import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/annant24012')
        .then(response => response.json())
        .then(data=> {
            setData(data)
        })
    } ,[])
  return (
    <div className='bg-gray-700 text-3xl m-9 p-7 '>
        followers : {data.followers}<br/>
        public repo : {data.public_repos}
        {/* url : {data.url} */}
        <img src={data.avatar_url} alt="git profile" width={300} />
    </div>
  )
}
