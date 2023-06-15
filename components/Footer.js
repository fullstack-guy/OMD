import Link from "next/link";



export default function Footer(){
    return(
        <div className="flex-shrink-0 ">
        <footer className=" body-font  w-full">
  <div className="container px-5 py-24 mx-auto flex items-center   ">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center ">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 text-xl footer">Blossend</span>
      </a>
      <p className="mt-2 text-sm footer pl-3">Welcome to Blossend Company. This is Demo version of Footer</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold footer tracking-widest text-md mb-3">Find your Doctor</h2>
        <nav className="list-none mb-10 ">
          <li>
            <a className="footer">Doctor1</a>
          </li>
          <li>
            <a className="footer">Doctor2</a>
          </li>
          <li>
            <a className="footer">Doctor3</a>
          </li>
          <li>
            <a className="footer">Doctor4</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold footer tracking-widest text-md mb-3">Useful links</h2>
        <nav className="list-none mb-10 ">
          <li>
            <a className="footer">Your Account</a>
          </li>
          <li>
            <a className="footer">Followers</a>
          </li>
          <Link legacyBehavior href="PrivacyPage/Privacy">
          <li className="hover:underline hover:py-3 hover:font-semibold duration-300 ease-in">
            <a className="footer">Our Privacy</a>
          </li>
          </Link>
          <li>
            <a className="footer">Support</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-semibold footer tracking-widest text-md mb-3">Contact</h2>
        <nav className="list-none mb-10 ">
          <li>
            <a className="footer">New York, NY 10012, US</a>
          </li>
          <li>
            <a className="footer">info@gmail.com</a>
          </li>
          <li>
            <a className="footer"> + 01 234 567 88</a>
          </li>
          <li>
            <a className="footer">+ 01 234 567 89</a>
          </li>
        </nav>
      </div>
    
    </div>
  </div>
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="footer text-sm text-center sm:text-left">© 2023 Blossend —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="footer ml-1" target="_blank">@Jay</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 footer" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 footer" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 footer" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5 footer" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</div>
    );
}