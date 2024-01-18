import classNames from 'classnames'
import React from 'react'

function Key({
    id,
    onClickMethods,
    color, 
    text,
    type,
}) {
    const buttonClasses = classNames('mx-0.5 my-0.5 font-bold rounded',
        {
            'w-[2.75rem] h-[3.75rem]':
                type == 'key',
            'w-[4.125rem] h-[3.75rem]':
                type == 'enter' || type == 'delete',
            'bg-[#6aa964] text-white':
                color == 'correct',
            'bg-[#c9b458] text-white':
                color == 'contains',
            'bg-[#787c7e] text-white':
                color == 'absent',
            'bg-[#d3d6da] text-black':
                !color,
        }
    )
    

  return (
    <div>
        <button className={buttonClasses} onClick={() => {
            if(type == 'key'){
                onClickMethods.onKeypress(text)
            }else if (type == 'delete'){
                onClickMethods.onDelete()
            }else{
                onClickMethods.onEnter()
            }
        }}>
            {text.toUpperCase()}
            </button>
    </div>
  )
}

export default Key