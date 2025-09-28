import React from 'react'
import Userchat from './Userchat.jsx'
import CurrentUser from './CurrentUser.jsx'

function Messages() {
  return (
    <div className='bg-[var(--color-surface)] flex flex-col items-center justify-start w-full pt-2 flex-wrap gap-3 rounded-lg'>
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