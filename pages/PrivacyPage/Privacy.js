
import PrinciplePage from "./PrinciplePage";
import PolicyPage from "./PolicyPage";
import { useState } from "react";
import PrivacyPage from "./PrivacyPage";
import Header from "@/components/Header";


export default function Privacy(props){
    const [PrincipleClicked, setPrincipleClicked] = useState(false);
    const [PolicyClicked, setPolicyClicked] = useState(true);
    const [PrivacyClicked, setPrivacyClicked] = useState(false);
    return(
        <>
       <Header/>
            <div className=" w-full  pt-5 " >
          <div className="pl-5">
            <img className="w-20 h-20"
             src ="/Blossend.png"
             alt="Blosend Mark"
             />
          </div>
            
        <h2 className="flex justify-center font-semibold text-4xl pb-10">
              About Blossend
        </h2>

        <div className="flex flex-col">
            <div className=" flex justify-items-start gap-x-10 pl-5">
            <button
          onClick={() => {
            setPolicyClicked(true);
            setPrivacyClicked(false);
            setPrincipleClicked(false);
          }}
          className="font-normal text-slate-400"
        >
          Our Policy
        </button>

        <button
          onClick={() => {
            setPolicyClicked(false);
            setPrivacyClicked(true);
            setPrincipleClicked(false);
          }}
          className="font-normal text-slate-400"
        >
          Our Privacy
        </button>

        <button
          onClick={() => {
            setPolicyClicked(false);
            setPrivacyClicked(false);
            setPrincipleClicked(true);
          }}
          className="font-normal text-slate-400"
        >
          Our Principles
        </button>
      </div>

           
                

      <div className={`${PolicyClicked ? '' : 'hidden'}`}>
         <PolicyPage/> 
      
      </div>

      <div className={`${PrivacyClicked ? '' : 'hidden'}`}>
         <PrivacyPage/> 
        
      </div>

      <div className={`${PrincipleClicked ? '' : 'hidden'}`}>
        <PrinciplePage/> 
       
      </div>
        
                
         
        </div>
        </div>
       
        
        
        
        </>
    );
}