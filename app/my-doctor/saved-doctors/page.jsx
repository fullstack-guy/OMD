
import SavedPageCard from "@/app/components/SavedDoctorCard/page"
import { use } from 'react';
//const API_NEW = process.env.API_KEY;

export default function Saved(){
   var api = use(ApiFetch());
    return(
        <>
       
       
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6  " >
          

            {api.results.map((post, index) => (
                <SavedPageCard 
                key = {index}
                Name = {post.firstName}
                Job = {post.primarySpecialty}
                
                />
            ))}
         </div>
        
        </>
    );
}
export async function ApiFetch(){
    const API_NEW_KEY = process.env.API_KEY;

     const res = await fetch(API_NEW_KEY, {cache: 'no-store'});

     const data = await res.json()
     return data
} 
