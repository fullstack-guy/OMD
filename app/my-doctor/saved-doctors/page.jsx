
import SavedPageCard from "@/components/SavedPageCard";


export default function Saved({ data }) {
 if(!data){
    return( 
        <div className="">
            loading....
        </div>
    )
 }
   
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
        {data?.results?.map((post, index) => (
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

export async function getServerSideProps() {
    try {
      const API_DOCTOR = process.env.API_KEY;
     
      const res = await fetch(API_DOCTOR);
      const data = await res.json();
  
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.error("Error fetching API data:", error);
      return {
        props: {
          data: null,
        },
      };
    }
  }
