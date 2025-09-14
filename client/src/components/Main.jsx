import React from 'react'
import Postcard from './Postcard.jsx'

function Main() {
  return (
    <div>
        {
        [1,2,3].map(post => {
            return <Postcard/>
        })
        }
    </div>
  )
}

export default Main