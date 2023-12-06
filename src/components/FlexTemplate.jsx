import React from 'react'

// eslint-disable-next-line react/prop-types
const FlexTemplate = ({ title, subtitle, children }) => {
  return (
    <div className=' h-screen w-full flex flex-col' >
      <header className=' border-b-2 border-gray-200 h-[15%] flex items-center justify-center' >
        <div className='   w-[95%] ' >
          <h1 className='text-[27px] font-bold  tracking-wide'>{title}</h1>
          <p className='text-[20px]' >{subtitle}</p>
        </div>
      </header>
      <main className=' h-[85%]' >
        {children}
      </main>
    </div>
  )
}

export default FlexTemplate
