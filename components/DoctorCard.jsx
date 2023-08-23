"use client"


import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from 'react';


export default function DocotrCardProps(props){
    const [isClicked, setIsClicked] =useState(true);
    return(
        <>
        <div className="border-2 rounded-xl shadow-lg overflow-hidden pb-16 relative">
            <div className=" flex-col">
                <div className="w-full">

                <div className='absolute top-1 left-5 scale-150'>
                        <div className=' text-orange-400'><StarRateIcon/></div>
                     
                        
                    </div>

                <button onClick={() => setIsClicked(!isClicked)}
                        className='pr-5 scale-150 absolute top-1 right-0'> 
                        {isClicked? 
                        <div className=' text-blue-500'><BookmarkIcon/></div>
                        :
                        <div className='text-blue-500'>
                        <TurnedInNotIcon/>
                        </div>
                        }
                        </button>

                            <img 
                            className="w-full h-full rounded-lg  overflow-hidden"
                            alt="Doctor Picture"
                            src ="/ProfilePicture/unknown4.jpg"
                            />
                        
                        <div className=' text-center justify-center mt-2'>
                        <h1 className="text-xl xl:text-2xl font-bold text-blue-600">DR. {props.Name}</h1>
                        {/** */}
                      
                          <span className="font-normal text-slate-500 xl:text-xl ">{props.Job}</span>
                        

                    </div>
                </div>
            </div>
        </div>
        
        
       {/** <div className="px-10 pt-5 ">
                   
                    
                </div> */} 
        
        
        </>
    );
}

