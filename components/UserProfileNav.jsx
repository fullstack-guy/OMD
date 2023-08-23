"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function UserProfileNav(){
    const [profileToggle, setProfileToggle] = useState(false);
    return(
    <div>
        <button tpye = "button"
            className='bg-gray-800 flex text-sm rounded-full  focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            id="profile"
            onClick={()=>{setProfileToggle(!profileToggle)}}>
                {/** After Login function created, this user picture will be changed */}
                <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
         </button>

        <div className ={` ${ profileToggle ? "" : "hidden"}
        origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white
        ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <Link
                href="/my-doctor/account"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                >
                    My Account
            </Link>

            <Link
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Sign out
            </Link>

            <Link
            href="/my-doctor/Privacy"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            >
            Privacy
            </Link>

            <Link
            href="/my-doctor/Terms&Condition"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            >
            Terms & Condition
            </Link>
    </div>
</div>

    );
}