import React from 'react'
import Userchat from './Userchat.jsx'

function Messages() {
  return (
    <div className="flex flex-col items-start w-full pr-20 my-6 flex-wrap gap-3">
      {
        [1, 2, 3, 4].map((user, idx) => (
          <Userchat key={idx} />
        ))
      }
    </div>
  )
}

export default Messages