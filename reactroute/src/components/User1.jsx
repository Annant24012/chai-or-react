import React from 'react'
import {useParams} from 'react-router-dom';

export default function User1() {
    const {userid} = useParams()
  return (
    <div className='bg-green-700 text-3xl p-7'>
      user: {userid}
    </div>
  )
}
