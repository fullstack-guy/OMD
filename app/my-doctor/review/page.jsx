"use client"


import { useState, useRef, useEffect } from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SickIcon from '@mui/icons-material/Sick';
import Slider from '@mui/material/Slider';


export default function Review(){

    const [text, setText] = useState('');
    const [isClicked, setIsClicked] =useState(true);
    const [isYesClicked, setIsYesClicked] = useState(true);
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const characterCount = text.length;

    const handleClick = ()=> {
        setIsYesClicked(!isYesClicked);
    }

    const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count -1);
  }
  const handlePlus = () => {
    setCount(count +1);
  }
 
  const [position, setPosition] = useState(5);

  const handleScaleChange = (event, value) => {
    setPosition(value);
  };

  
    const [selectedButton, setSelectedButton] = useState(null);
  
    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
    };

    const [selectedDoctor, setSelectedDoctor] = useState(null);
  
    const handleDocotorClick = (buttonId) => {
      setSelectedDoctor(buttonId);
    };

    return(
        <>
     
        
        <div className="grid grid-cols-1 md:grid-cols-2  w-full px-10 lg:px-20  space-x-10 lg:space-x-20">
            <div className=" pt-10 w-full space-y-10">
                <div className=" border-2 border-slate-400 py-5 bg-slate-400 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between px-2">

                        <div className="grid grid-flow-col gap-10">
                        <img alt="doctor"
                        src="/ProfilePicture/unknown4.jpg"
                        className="ml-5 w-full h-full md:w-28 md:h-28 rounded-md"/>
                        <div>
                        <h1 className="text-lg lg:text-xl font-extrabold ">Doctor Name</h1>
                        <span className="text-md lg:text-lg font-semibold text-slate-800">austin, Texas</span>


                        </div>
                        </div>
                        
                        <div className="flex flex-col items-end mr-12">
                        <button onClick={() => setIsClicked(!isClicked)}
                        className=' scale-150 pl-10'> 
                        {isClicked? 
                        <div className=' text-blue-500'><BookmarkIcon/></div>
                        :
                        <div className='text-blue-500'>
                        <TurnedInNotIcon/>
                        </div>
                        }
                        </button>

                        <div className="">
                        <div className="flex items-center pt-5 lg:mr-32 ">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 fill-current ${
                                    index <= rating ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                                viewBox="0 0 20 20"
                                onClick={() => handleRating(index)}
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 14.17l-4.55 2.202a1 1 0 01-1.44-1.054l.825-5.308-3.48-3.392a1 1 0 01.558-1.664l5.38-.79L9.49.427a1 1 0 011.96 0l2.704 5.03 5.38.79a1 1 0 01.558 1.664l-3.48 3.392.826 5.308a1 1 0 01-1.44 1.054L10 14.17z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            ))}
                            </div>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className=" flex flex-col justify-center gap-2 border-2  border-slate-400  bg-slate-400 rounded-lg shadow-lg">
                  <h1 className="text-slate-800 text-lg  font-mono mx-auto"> How would you <div className="inline-flex font-bold "> rate </div> your Docotor? </h1>
                  
                  <div className="flex justify-center">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 fill-current ${
                                    index <= rating ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                                viewBox="0 0 20 20"
                                onClick={() => handleRating(index)}
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 14.17l-4.55 2.202a1 1 0 01-1.44-1.054l.825-5.308-3.48-3.392a1 1 0 01.558-1.664l5.38-.79L9.49.427a1 1 0 011.96 0l2.704 5.03 5.38.79a1 1 0 01.558 1.664l-3.48 3.392.826 5.308a1 1 0 01-1.44 1.054L10 14.17z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            ))}
                            </div>
                          
                </div>


                <div className="flex flex-col border-2 border-slate-400 py-3 bg-slate-400 rounded-lg shadow-lg">
                    <text className="mx-auto">
                        <div className="font-bold inline-flex">Solved</div> your Problem?
                    </text>
                    <div className="mx-auto">
                        
                        <button
                        className={` ${isYesClicked ? 'font-bold' : ''}`}
                        onClick={handleClick}
                        >
                        Yes 
                        </button>
                        <span>/</span>
                        <button
                        className={` ${isYesClicked ? '' : 'font-bold'}`}
                        onClick={handleClick}
                        >
                        No
                        </button>
                    </div>
                </div>


                <div className="flex flex-col border-2 border-slate-400 py-2 bg-slate-400 rounded-lg shadow-lg">
                    <text className="mx-auto">Amount of <div className=" inline-flex font-bold">visits</div> to solve your problem:</text>
                        <div className="flex mx-auto pt-3">
                            <button
                                className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold"
                                onClick={handleMinus}
                            >
                                -
                            </button>
                            <div className="mx-4 text-xl font-bold">{count}</div>
                            <button
                                className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold"
                                onClick={handlePlus}
                            >
                                +
                            </button>
                        </div>             
                </div>


                <div className="flex flex-col border-2 border-slate-400 py-1 bg-slate-400 rounded-lg shadow-lg">
                   <text className="mx-auto">Honestly Level:</text>
                   
                        
                        
                        <Slider
                             size="small"
                             defaultValue={5}
                             aria-label="Small"
                             value={position}
                             onChange={handleScaleChange}
                             marks={[
                                { value: 1, label: '1' },
                                { value: 10, label: '10' },
                              ]}
                             min={1}
                             max={10}
                             className="w-2/3 mx-auto"
                             sx={{
                                color: 'black', // 슬라이더의 색상을 검은색으로 변경
                              }}
                             
                            />
                          
                                



                  
                </div>
                
                <div className="flex flex-col border-2 border-slate-400 py-2 bg-slate-400 rounded-lg shadow-lg ">
                   <text className="mx-auto mt-3">Satisfaction level:</text>
                   <div className="flex gap-1 lg:gap-8 mx-auto mt-3 scale-150 mb-3">
                   <button
          className={`p-1 ${selectedButton === 'button1' ? 'bg-slate-600 opacity-90 shadow-md rounded-lg text-white' : ''}`}
          onClick={() => handleButtonClick('button1')}
        >
          <InsertEmoticonIcon />
        </button>
        <button
          className={`p-1 ${selectedButton === 'button2' ? 'bg-slate-600 opacity-90 shadow-md rounded-lg text-white' : ''}`}
          onClick={() => handleButtonClick('button2')}
        >
          <SentimentSatisfiedAltIcon />
        </button>
        <button
          className={`p-1 ${selectedButton === 'button3' ? 'bg-slate-600 opacity-90 shadow-md rounded-lg text-white' : ''}`}
          onClick={() => handleButtonClick('button3')}
        >
          <SentimentSatisfiedIcon />
        </button>
        <button
          className={`p-1 ${selectedButton === 'button4' ? 'bg-slate-600 opacity-90 shadow-md rounded-lg text-white' : ''}`}
          onClick={() => handleButtonClick('button4')}
        >
          <MoodBadIcon />
        </button>
        <button
          className={`p-1 ${selectedButton === 'button5' ? 'bg-slate-600 opacity-90 shadow-md rounded-lg text-white' : ''}`}
          onClick={() => handleButtonClick('button5')}
        >
          <SentimentVeryDissatisfiedIcon />
        </button>
        <button
          className={`p-1 ${selectedButton === 'button6' ? 'bg-slate-600 opacity-90 shadow-md rounded-lg text-white' : ''}`}
          onClick={() => handleButtonClick('button6')}
        >
          <SickIcon />
        </button>
                   </div>
                   <div>

                   </div>
                </div>

                <br/>

                </div>


                <div className="flex-col pt-10  space-y-10 pr-10 lg:pr-0">
                        <div className="border-2 bg-white shadow-lg rounded-lg w-full h-auto lg:h-1/2 px-3 ">
                            <h1 className="flex text-lg font-bold justify-center lg:text-2xl">Write a Review</h1>
                            <div className="flex items-baseline mx-auto w-full h-full py-2">
                               
                            <textarea
                                className="flex-grow border-2 border-slate-900 rounded-lg px-4  h-auto lg:pb-48 resize-none"
                                placeholder="Tell us what you liked...or didn't like"
                               value={text}
                               onChange={handleChange}
                               
                            />
                                
                            
                        
                            </div>
                            <div className="flex flex-col items-end text-gray-500  -py-10   lg:-my-20 mr-5">
                                    {characterCount} /350
                                </div>
                        </div>

                        <div className="flex-col pt-2 w-full">
                            <div className="border-2  border-slate-900 rounded-lg shadow-xl ">
                                <h1 className="flex text-lg lg:text-2xl font-bold justify-center"> Optional: </h1>
                                <span className="flex text-lg lg:text-xl font-bold justify-start pl-3">tag your doctor with 3</span>
                                <div className=" my-10 gap-10 mx-auto">
                                <button
            className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button1' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button1')}
          >
            quick check-in
          </button>
          <button
            className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button2' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button2')}
          >
            good service
          </button>
          <button
            className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button3' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button3')}
          >
            fair price
          </button>
          <button
            className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button4' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button4')}
          >
            experienced
          </button>
          <button
            className={`ring-2  ring-slate-800  rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button5' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button5')}
          >
            lengthy process
          </button>
          <button
            className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button6' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button6')}
          >
            savvy & knowledgeable
          </button>
          <button
            className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button7' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button7')}
          >
            price too high
          </button>
                <button
                    className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
                    selectedDoctor === 'button8' ? 'bg-green-500 text-black' : ''
                    }`}
                    onClick={() => handleDocotorClick('button8')}
                >
                    hard to contact
                </button>
          <button
            className={`ring-2  ring-slate-800 rounded-lg my-3 mx-3 px-5 overflow-hidden ${
              selectedDoctor === 'button9' ? 'bg-green-500 text-black' : ''
            }`}
            onClick={() => handleDocotorClick('button9')}
          >
            efficient & effective
          </button>
                                </div>

                            </div>
                        </div>





                        </div>

                       

        </div>
      
        </>
    );
}