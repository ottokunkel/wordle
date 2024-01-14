import React from 'react'
import classnames from 'classnames'
import { useState,useEffect } from 'react';
import classNames from 'classnames';


function Cell({
    value,
    isCompleted,
    status,
    position,
    isRevealing,
  }) {
    console.log(position)
    const isFilled = (value === '') ? false : true;
    const lightMode = true;
    const animationDelay = `${position * 500}ms`;
    const classesCell = classnames(
        `h-[3.25rem] w-[3.25rem] mx-0.5 my-0.5 flex items-center justify-center text-3xl font-bold dark:text-white uppercase`,
        {   
            'border-solid border-2':
                !isCompleted,
            'text-white':
                (isCompleted),
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
                status === 'current',
            'animate-greenFlip':
                isRevealing && status === 'correct',
            'animate-yellowFlip':
                isRevealing && status === 'contains',
            'animate-grayFlip':
                isRevealing && status === 'absent',
            'fill-backwards': isRevealing,
            
        }
        )
    const classesLetter = classNames('',{
        'animate-textFlip':
            isRevealing
    });

    
  return (
    <div className={(lightMode ? '' : 'dark')}>
        <div className={classesCell} style={{ animationDelay: animationDelay }}>
            <div className={classesLetter} style={{ animationDelay: animationDelay }}>
                {value}
            </div>
        </div>
    </div>
    
  )
}

export default Cell