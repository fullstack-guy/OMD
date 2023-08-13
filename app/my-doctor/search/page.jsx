
import SavedPageCard from "@/app/components/SavedDoctorCard/page";



export default function SearchDoctor(){
    
    
    return(

<div className=" w-full min-h-screen mx-auto">
    <div className="flex flex-col mx-auto">
       
                                    
                <div className="flex flex-col mx-auto bg-gray-300 pb-20 ">
                    
                  
                 
                 <span className="text-center font-extrabold lg:text-3xl text-xl underline py-3">Get the best doctor according to your time </span>
                        {/* search box */}
                        <input
                            type="search"
                            className="w-2/3 lg:w-full rounded-lg border border-gray-300 flex items-center mx-auto max-w-lg

                            sm:p-2
                            md:p-2
                            lg:text-2xl
                            lg:p-3

                            xl:text-3xl
                            xl:p-3
                            "
 
                            placeholder="Search a doctor..."
                        />
                    

                    <div className="flex justify-evenly px-3 py-5">
                        <h2 className="text-xl font-bold underline">Featured doctors:</h2>
                        <button className="text-md text-grey pr-2 text-right">See all </button>
                    </div>

{/* Cards here */}    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2
                    mx-3">
                                
                            {/* Map your card data here 
                            
                              {data.results.slice(0,4).map((post, index) => (
                                        <SavedPageCard 
                                        key = {index}
                                        Name = {post.firstName}
                                        Job = {post.primarySpecialty}
                                        
                                        />
                                    ))} */}
                     

                        
                    
                        
                      
                    </div>
                    
                    <div className="flex justify-evenly px-3 py-5">
                    <h2 className="text-xl font-bold underline">Popular Doctors:</h2>
                        <button className="text-md text-grey pr-2 text-right">See all </button>
                    </div>            

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 w-5/12 gap-4 justify-items-center mx-auto
                    ">
                                 
                            {/* Map your card data here 
                            
                             {data.results.slice(0,2).map((post, index) => (
                                        <DocotrCardProps
                                        key = {index}
                                        Name = {post.firstName}
                                        Job = {post.primarySpecialty}
                                        
                                        />
                                    ))} */}
                      
                    </div>
                </div>
            
        </div>
    </div>

    );
}