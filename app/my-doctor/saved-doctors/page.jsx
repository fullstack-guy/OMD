
import SavedPageCard from "@/components/SavedPageCard"
import { use } from 'react';

//const API_NEW = process.env.API_KEY;

 function Saved(){
    var api = use(ApiFetch());
    return(
        <div className="container">
       
       
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6  " >
          

         {api.results.map((post, index) => (
          <SavedPageCard
            key={index}
            Name={post.firstName}
            Job={post.primarySpecialty}
            npi={String(post.npi)}
            id={post.internal_id}
          />
        ))}
         </div>
        
         </div>
    );
}
export async function ApiFetch(){
    const API_NEW_KEY = process.env.API_KEY;

     const res = await fetch(API_NEW_KEY); //deleted no cache store option

     const data = await res.json()
     return data
} 

export default Saved

