import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import StarRateIcon from '@mui/icons-material/StarRate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import Link from 'next/link';


export default function Header(){
    const [profileToggle, setProfileToggle] = useState(false);


    return(
        <>
        <div className="border-2 py-4 bg-green-500  rounded-lg overflow-hidden">
            <div className="flex flex-col place-content-center">
                <h1 className=' text-2xl font-extrabold text-blue-900 mx-auto'>
                    Open my Doctor
                </h1>
                <div className="flex justify-evenly pt-3  ">
                   
                        <button className="text-lg font-semibold"><SearchIcon/>Search</button>
                        <Link legacyBehavior href ="SavedPage/Saved">
                        <button className="text-lg font-semibold"><TurnedInNotIcon/> Saved</button>
                        </Link>
                        <button className="text-lg font-semibold"><StarRateIcon/>MyReviews</button>
                    
                        <div className=' absolute right-10 top-8'> {/** this is Profile button! */}
                                <button tpye = "button"
                                className='bg-gray-800 flex text-sm rounded-full  focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                                id="profile"
                                onClick={()=>{setProfileToggle(!profileToggle)}}>
                                    {/** After Login function created, this user picture will be changed */}
                                <img className = "h-10 w-10 rounded-full"
                                src="ProfilePicture/User.png" 
                                alt="user data"/>
                                </button>

                                 {/**when clicked profile button control */}
                      <div className ={` ${ profileToggle ? "" : "hidden"}
                      origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white
                      ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <a href="#" legacybehavior className='flex items-center px-4 py-2 text-sm text-gray-700'>
                          <AccountCircleIcon className ="mr-2"/>
                              Your Profile
                        </a>
                        <a href="#" legacybehavior className='flex items-center px-4 py-2 text-sm text-gray-700'>
                          <ManageAccountsIcon  className ="mr-2"/>
                              Setting
                        </a>
                        <a href="#" legacybehavior className='flex items-center px-4 py-2 text-sm text-gray-700'>
                          <LogoutIcon className ="mr-2"/>
                              Sign Out
                        </a>
                      </div>
                      </div>
                    
                </div>
                    
            </div>
        </div>
        </>
    );
}