import React from 'react'
import Postcard from './Postcard.jsx'
import { useSelector } from "react-redux"

function Main() {
  const {postData} = useSelector(state => state.post)
  return (
    <div className='w-[calc(100%-200%/11)] absolute left-[calc(200%/11)] top-0 mx-auto overflow-y-auto h-screen'>
        <div className='w-[630px] px-16 ml-22'>
          {
          postData.map(post => {
              return <Postcard post={post}/>
          })
          }
        </div>
    </div>
  )
}

export default Main