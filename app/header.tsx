

import Link from 'next/link'
import UserProfileNav from '@/components/UserProfileNav'

const Header = () => {
  return (
    <div className=" py-4 bg-gray-800  overflow-hidden">
            <div className="flex flex-col place-content-center">
                <Link legacyBehavior href="/"> 
                <h1 className=' text-2xl font-extrabold text-white mx-auto hover:scale-150 duration-300 hover:text-slate-300'>
                    Open my Doctor
                </h1>
                </Link>
                <div className="flex justify-evenly pt-3  ">
                        {/**here you guys can link each pages */}
                        <Link href = "/search" legacyBehavior>
                        <button className="text-lg font-semibold text-white  hover:bg-gray-700 hover:text-white px-3 rounded-lg duration-300">Search</button>
                        </Link>

                        <Link  href ="/saved-doctors " legacyBehavior>
                        <a className="text-lg font-semibold text-white  hover:bg-gray-700 hover:text-white px-3 rounded-lg duration-300"> Saved</a>
                        </Link>

                          {/**<Link  href="/review" legacyBehavior>
                        <a className="text-lg font-semibold text-white  hover:bg-gray-700 hover:text-white px-3 rounded-lg duration-300">MyReviews</a>
                        </Link> */}
                        

              <div className=' absolute right-10 top-8'>
                <div>
                 
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                   
                  </button>
                </div>
                
                 <UserProfileNav/>
                
              </div>
            </div>
          </div>
        </div>
     
  )
}

export { Header }


