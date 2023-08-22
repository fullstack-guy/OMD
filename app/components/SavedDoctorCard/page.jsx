"use client"


import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarRateIcon from '@mui/icons-material/StarRate';
import React, { useState, useEffect } from 'react';

const BOOKMARKKEY = process.env.BOOKMARK_KEY;
//book mark function added!


    export default function SavedPageCard(props){
      
        const [isBookmarked, setIsBookmarked] =useState(false);

        

        
          const toggleBookmark = async ( ) => {
            await handleSubmit(String(props.npi));
            setIsBookmarked(!isBookmarked);
            console.log(props.npi);
          };

          const handleSubmit = async ( npi) => {
            const finalformdata ={
              
              patient : 'Jay',
              dr: String(npi),
            };

            const JSONdata = JSON.stringify(finalformdata);
            console.log(finalformdata);

            const endpoint =`http://3.21.254.150/bookmarkDoctors/`;
            const options = {
              method: "POST",
              headers : {
                Accept: "application/json",
                "Content-type" : "application/json; charset=UTF-8", 
              },
                body: JSONdata,
              };
              try {
                const response = await fetch(endpoint, options);
                const result = await response.json();

                  if(result.message == "bookmarkDoctors created correctly") {
                    console.log(result);
                    alert("Bookmark saved!")

                  }else{
                    alert(result.message);
                  }
              } catch(error) {
                alert(error);
              }
            }
  
         

        return(
            <>
            <div className="border-2 rounded-lg shadow-lg overflow-hidden py-5">
            <div className="flex justify-between">
                <div className="flex flex-col w-1/2">
                        <div className="pl-8">
                            <img 
                            className="w-full h-full rounded-lg  xl:w-3/4 overflow-hidden"
                            alt="Doctor Picture"
                            src ="/userPic.jpg"
                            />
                        </div>
                    <div className="flex flex-col pt-5   pl-12">
                        <span className="text-green-500 font-semibold">Next Available</span>
                        <span className="font-semibold text-slate-500">10:00 AM Tommorow</span>
                    </div>
                </div>
            <div className="flex flex-col w-1/2">
                    <div className='flex justify-between'>
                        <h1 className="text-2xl xl:text-3xl font-bold text-blue-600">DR. {props.Name}</h1>
                        <button onClick={toggleBookmark}
                        className='pr-5 scale-150'> 
                        {isBookmarked? 
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
                    <button className="border-2 rounded-lg bg-green-400 shadow-lg border-green-600 py-1 md:px-10 lg:px-10 px-8 text-white hover:ease-in duration-300 hover:scale-105"> Book Now</button>
                        </div>
                </div>
            </div>
            </div>
        </div>
        
            </>
        );
    }