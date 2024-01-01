import React, { useEffect, useState } from 'react'

function Grid(props) {
    
    const textColor = "#000000";
    const convertColor = (x,y) => {
        switch(props.colorGrid[y][x]) {
            case 'b':
                return "bg-[#787c7e]";
            case 'g':
                return "bg-[#6aa964]";
            case 'y':
                return "bg-[#c9b458]";
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
                            <div className={convertColor(x,y) + ' flex flex-row h-[3.25rem] w-[3.25rem] mx-0.5 my-0.5 justify-center items-center border border-gray-700'}>
                                <div className={" text-["+textColor+"] font-bold text-[2rem] uppercase"}>
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