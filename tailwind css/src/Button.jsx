import React from 'react'

const Button = ({name , func}) => {
  return (
    <button className='px-3 bg-blue-400 ms-2 rounded text-white hover:bg-blue-200' onClick={func}>{name}</button>
  )
}

export default Button