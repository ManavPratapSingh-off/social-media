import React from 'react'
import Postcard from './Postcard.jsx'

function Main() {
  
  return (
    <div className='w-[calc(100%-200%/11)] absolute left-[calc(200%/11)] top-0 mx-auto overflow-y-auto h-screen'>
        <div className='w-[630px] px-16 ml-22'>
          {
          [1,2,3].map(post => {
              return <Postcard/>
          })
          }
        </div>
    </div>
  )
}

export default Main