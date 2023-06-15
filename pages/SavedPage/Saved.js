import Header from "@/components/Header";
import SavedPageCard from "@/components/SavedPage/SavedPageCard";

const DummyProfile =[
    {   id : 1,
        DocName : "Dr.Jart",
        Job : "Dentist",
        experience : 7,
        reviewAmount :69,
    },
    {   id : 2,
        DocName : "Dr.Mario",
        Job : "Family Physican",
        experience : 9,
        reviewAmount :78,
    },
    {   id : 3,
        DocName : "Dr.James",
        Job : "Cardiovascular Physicam",
        experience : 5,
        reviewAmount :86,
    },
    {   id : 4,
        DocName : "Dr.Jart",
        Job : "Dentist",
        experience : 7,
        reviewAmount :69,
    },
    {   id : 5,
        DocName : "Dr.Alex",
        Job : "Neurosurnon",
        experience : 6,
        reviewAmount :69,
    },
    {   id : 6,
        DocName : "Dr.Unknown",
        Job : "Dentist",
        experience : 10,
        reviewAmount :10,
    },
   

]


export default function Saved(){
    return(
        <>
         <Header/>
       
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6  " >
         {DummyProfile.map((profile) => {
            return (
                <SavedPageCard
                key={profile.id}
                Name={profile.DocName}
                Job={profile.Job}
                Years={profile.experience}
                Reviews={profile.reviewAmount}
                />
            );
            })}


         </div>
        
        </>
    );
}