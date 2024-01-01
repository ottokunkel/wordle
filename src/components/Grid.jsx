import React, { useEffect, useState } from 'react'

function Grid(props) {
    
    const convertColor = (x,y) => {
        switch(props.colorGrid[y][x]) {
            case 'b':
                return "bg-gray-100";
            case 'g':
                return "bg-green-300";
            case 'y':
                return "bg-yellow-100";
            default:
              return "";
          }
    }

    return (
    <div>
        <div className='h-1/2 w-'>
            {
            props.AnswerGrid.map( (level, y) => {
                return (
                    <div className='flex flex-row justify-center'>
                        {level.map((letterBox, x) => {
                        return (
                            <div className={convertColor(x,y) + ' flex flex-row h-[3.75rem] w-[3.75rem] mx-0.5 my-0.5 justify-center items-center border border-gray-700'}>
                                <div className={' text-gray font-bold text-[32px] uppercase'}>
                                    {letterBox} 
                                </div>
                            </div>
                            );
                        })}
                    </div>
                );
            })
            }
        </div>
        
    </div>
    )
}

export default Grid