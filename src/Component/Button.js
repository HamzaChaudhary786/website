import React from 'react'

const Button = (props) => {
  return (
    <button className=' bg-indigo-600 text-white font-[Poppins] py-2 px-8 rounded md:ml-8 md:hover:bg-indigo-400 duration-500'>
        {props.children}
    </button>
  )
}

export default Button