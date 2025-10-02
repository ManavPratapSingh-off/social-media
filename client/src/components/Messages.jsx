import React from 'react'
import Userchat from './Userchat.jsx'
import CurrentUser from './CurrentUser.jsx'

function Messages() {
  return (
    <div className='w-[calc(300%/11)] fixed right-0 top-0 h-screen rounded-lg'>
      <div className='w-[80%] flex flex-col items-center justify-start pt-2 flex-wrap gap-3 '>
        <CurrentUser/>
        <div className="flex flex-col items-start w-full flex-wrap gap-3">
          {
            [1, 2, 3, 4].map((user, idx) => (
              <Userchat key={idx} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Messages

// w-1/4 border-l border-gray-300 fixed right-0 top-0 h-screen