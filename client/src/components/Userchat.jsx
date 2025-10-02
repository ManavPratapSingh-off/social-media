import React from 'react'

function Userchat() {
  return (
    <div className='w-full px-3 h-15 grid grid-cols-11 gap-4'>
        <div className='h-14 w-14 border rounded-full overflow-hidden border-[var(--color-border)] col-span-2'>
            <img src='' alt='dp'/>
        </div>
        <div className='col-span-6 text-[var(--color-muted)] text-sm'>
            <span className='font-semibold text-[var(--color-text)]'>user name</span><br/>
            full name or suggestions
        </div>
        <button className='col-span-3 text-[var(--color-secondary)] hover:text-[var(--color-primary-light)] bg-transparent border-none shadow-none'>Follow</button>
    </div>
  )
}

export default Userchat