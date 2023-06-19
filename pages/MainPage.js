
// sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500"

export default function MainPage(){
    return(
<<<<<<< Updated upstream
<>
<div className=" w-full min-h-screen mx-auto py-10 hover: ease-in duration-200 ">
<div className="flex flex-col mx-auto">
       
       <h1 className="flex justify-center items-center pt-5 font-semibold text-4xl pb-10">
       <span className="text-center">OMD-Project</span>
       </h1>
     {/** here we start to put the main page content */}
    <div className="pt-10 mx-auto">
        @@@Content get inside@@@@
       
=======
        <>   
            <div className="w-full min-h-screen mx-auto py-0 px-0 bg-primary-canvas-color">
                <div className="flex flex-col mx-auto bg-yellow-200 px-1 ">
                    <div className="py-1">
                       {/* FIXME MAKE PROP HEADER */}
                    <h1 className="flex justify-center items-center font-bold underline  pb-1 
                    sm:bg-green-500
                    sm:text-2xl
>>>>>>> Stashed changes

                    md:bg-blue-500
                    md:text-3xl 

                    lg:bg-pink-500
                    lg:text-3xl

                    xl:bg-teal-500
                    xl:text-4xl" 
                
                    >
                        <span className="text-center md:p-2 p-3 lg:p-3">Get the best doctor according to your time </span>
                    </h1>

                        {/* search box */}
                        <input
                            type="search"
                            className="w-full rounded border border-gray-300 flex items-center mx-auto max-w-lg

                            sm:p-2
                            md:p-2
                            lg:text-2xl
                            lg:p-3

                            xl:text-3xl
                            xl:p-3
                            "
 
                            placeholder="Search a doctor..."
                        />
                    </div>

                    <div className="p-2 text-left">
                        <h2 className="text-xl font-bold underline">Featured doctors:</h2>
                        <h5 className="text-sm text-grey pr-2 text-right">fixme..</h5>
                    </div>

{/* Cards here */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-0 w-50
                    sm:ml-0
                    sm:mr-0
                    md:ml-2
                    md:mr-2
                    lg:ml-8
                    lg:mr-8
                    xl:ml-16
                    xl:mr-16">
                            {/* Map your card data here */}
                        <div className="grid grid-cols-1 grid-rows-3 bg-featured-card-color rounded-2xl sm:p-2
                            sm:ml-0
                            sm:mr-0
                            md:ml-2
                            md:mr-2
                            lg:ml-4
                            lg:mr-4
                            xl:ml-8
                            xl:mr-8
                            "
                            >
                            <h5 className="text-sm text-grey pr-2 text-right">fixme..</h5>
                            <img className="mx-auto w-20 h-20 rounded-full content-right" src="ProfilePicture/User.png"  alt="Doctor image"/>
                        </div>

                        <div className="grid grid-cols-1 grid-rows-3 bg-featured-card-color rounded-2xl sm:p-2
                            sm:ml-0
                            sm:mr-0
                            md:ml-2
                            md:mr-2
                            lg:ml-4
                            lg:mr-4
                            xl:ml-8
                            xl:mr-8
                            "
                            >
                            <h5 className="text-sm text-grey pr-2 text-right">fixme..</h5>
                            <img className="mx-auto w-20 h-20 rounded-full content-right" src="ProfilePicture/User.png"  alt="Doctor image"/>
                        </div>

                        <div className="grid grid-cols-1 grid-rows-3 bg-featured-card-color rounded-2xl sm:p-2
                            sm:ml-0
                            sm:mr-0
                            md:ml-2
                            md:mr-2
                            lg:ml-4
                            lg:mr-4
                            xl:ml-8
                            xl:mr-8
                            "
                            >
                            <h5 className="text-sm text-grey pr-2 text-right">fixme..</h5>
                            <img className="mx-auto w-20 h-20 rounded-full content-right" src="ProfilePicture/User.png"  alt="Doctor image"/>
                        </div>

                        <div className="grid grid-cols-1 grid-rows-3 bg-featured-card-color rounded-2xl sm:p-2
                            sm:ml-0
                            sm:mr-0
                            md:ml-2
                            md:mr-2
                            lg:ml-4
                            lg:mr-4
                            xl:ml-8
                            xl:mr-8
                            "
                            >
                            <h5 className="text-sm text-grey pr-2 text-right">fixme..</h5>
                            <img className="mx-auto w-20 h-20 rounded-full content-right" src="ProfilePicture/User.png"  alt="Doctor image"/>
                        </div>
                        
                        <div className="bg-white rounded shadow p-4">Card2</div>
                        <div className="bg-white rounded shadow p-4">Card3</div>
                        <div className="bg-white rounded shadow p-4">Card4</div>
                   
                    </div>
                    <div className="p-2">
                        <h2 className="text-xl font-bold underline pl-10 text-left">Popular doctors:</h2>
                        <h1 className="text-sm text-grey pr-2 text-right">fixme..</h1>
                    </div>

                    <section class="text-gray-400 bg-gray-900 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-wrap -m-4">
                            <div class="p-4 md:w-1/3">
                                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="ProfilePicture/User.png"  alt="Doctor image"/>
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">The Catalyzer</h1>
                                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div class="flex items-center flex-wrap ">
                                    <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="ProfilePicture/User.png"  alt="Doctor image"/>
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">The 400 Blows</h1>
                                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div class="flex items-center flex-wrap">
                                    <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3">
                                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="ProfilePicture/User.png"  alt="Doctor image"/>
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1>
                                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div class="flex items-center flex-wrap ">
                                    <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                    <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>


                    <div className="flex flex-wrap justify-between bg-green-500">
                        
                        <div className="bg-white rounded shadow p-4 flex-1 mr-2 mb-2">Card</div>
                        <div className="bg-white rounded shadow p-4 flex-1 ml-2 mb-2">Card</div>
                    </div>
                </div>
            </div>

        </>

    );
}