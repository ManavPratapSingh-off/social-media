import React from 'react'

function Userchat() {
  return (
    <div className='w-full h-15 grid grid-cols-11 gap-0.5'>
        <div className='h-10 w-10 border rounded-full border-[var(--color-border)] col-span-2'>
            <img src='' alt='dp'/>
        </div>
        <div className='col-span-7 text-[var(--color-muted)] text-sm'>
            <span className='font-semibold text-[var(--color-text)]'>user name</span><br/>
            full name or suggestions
        </div>
        <button className='col-span-2 text-[var(--color-secondary)] hover:text-[var(--color-primary-light)] bg-transparent border-none shadow-none'>Follow</button>
    </div>
  )
}

export default Userchat