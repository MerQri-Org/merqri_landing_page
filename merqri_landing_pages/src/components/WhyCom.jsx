import React from 'react'

const WhyCom = ({title, content, titleColor, contentColor, bgColor}) => {
  return (
    <div style={{backgroundColor: bgColor}}  className=' w-[28rem] p-[20px] rounded-xl mt-8'>
        <p style={{color: contentColor}} className='text-[14px]'><span style={{color: titleColor}} className='font-semibold'>{title}: </span>{content}</p>
    </div>
  )
}

export default WhyCom