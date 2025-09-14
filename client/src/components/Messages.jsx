import React from 'react'
import Userchat from './Userchat.jsx'
import CurrentUser from './CurrentUser.jsx'

function Messages() {
  return (
    <div className='flex flex-col items-start w-full pr-20 my-6 flex-wrap gap-3'>
      <CurrentUser/>
      <div className="flex flex-col items-start w-full flex-wrap gap-3">
        {
          [1, 2, 3, 4].map((user, idx) => (
            <Userchat key={idx} />
          ))
        }
      </div>
    </div>
  )
}

export default Messages