import React from 'react'

const Button = ({label,iconURl,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
 
    <button   className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}>
      
        {label}
       { iconURl && <img src={iconURl} alt="arrow right icon" className='w-5 h-5 ml-2 rounded-full'/>}
    </button>
  )
}

export default Button