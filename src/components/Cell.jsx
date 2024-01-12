import React from 'react'
import classnames from 'classnames'



function Cell({
    value,
    isCompleted,
    status,
    position = 0,
  }) {

    const isFilled = (value === '') ? false : true;
    const lightMode = true;
    const classes = classnames(
        'h-[3.25rem] w-[3.25rem] mx-0.5 my-0.5 flex items-center justify-center text-3xl font-bold dark:text-white uppercase',
        {   
            'border-solid border-2':
                !isCompleted,
            'text-white':
                isCompleted,
            'border-[#d3d6da]':
                !isFilled,
            'border-[#878a8c]':
                isFilled,
            'contains bg-[#6aa964]':
                status === 'correct',
            'bg-[#c9b458]':
                status === 'contains',
            'bg-[#787c7e] dark:bg-[#3a3a3c]':
                status === 'absent',
            'text-black':
                status === 'current'
            
        }
        )

  return (
    <div className={(lightMode ? '' : 'dark')}>
        <div className={classes}>
            <div className="letter-container" >
                {value}
            </div>
        </div>
    </div>
    
  )
}

export default Cell