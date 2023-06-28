import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useState } from 'react';
export default function SavedPageCard(props){
    const [isClicked, setIsClicked] =useState(true);
    return(
        <>
        <div className="border-2 rounded-lg shadow-lg overflow-hidden py-10">
            <div className="flex justify-between">
                <div className="flex flex-col w-1/2">
                        <div className="pl-8">
                            <img 
                            className="w-full h-full rounded-lg  xl:w-3/4 overflow-hidden"
                            alt="Doctor Picture"
                            src ="/ProfilePicture/unknown4.jpg"
                            />
                        </div>
                    <div className="flex flex-col pt-5   pl-12">
                        <span className="text-green-500 font-semibold">Next Available</span>
                        <span className="font-semibold text-slate-500">10:00 AM Tommorow</span>
                    </div>
                </div>
            <div className="flex flex-col w-1/2">
                    <div className='flex justify-between'>
                        <h1 className="text-xl xl:text-3xl font-bold text-blue-600">{props.Name}</h1>
                        <button onClick={() => setIsClicked(!isClicked)}
                        className='pr-5 scale-150'> 
                        {isClicked? 
                        <div className=' text-blue-500'><BookmarkIcon/></div>
                        :
                        <div className='text-blue-500'>
                        <TurnedInNotIcon/>
                        </div>
                        }
                        </button>
                    </div>
                <span className="font-normal text-slate-500 xl:text-xl">{props.Job}</span>
                <span className="font-normal text-slate-500 xl:text-xl">{props.Years} Years Experience</span>

                <div className="px-10 pt-5 ">
                    <div className='flex gap-x-3'>
                        <div className=' text-orange-400'><StarRateIcon/></div>
                        <span className="font-normal text-slate-500">{props.Reviews} patient reviews</span>
                        
                    </div>
                        <div className="pt-5 pl-5">
                    <button className="border-2 rounded-lg bg-green-400 shadow-lg border-green-600 py-3 md:px-10 lg:px-10 px-8 text-white hover:ease-in duration-300 hover:scale-105"> Book Now</button>
                        </div>
                </div>
            </div>
            </div>
        </div>
        
        
        </>
    );
}