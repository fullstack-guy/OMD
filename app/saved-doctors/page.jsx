'use client'

import React, { useState, useEffect } from 'react';
import SavedPageCard from "@/components/SavedPageCard";
 

export default function Saved() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
            
            try {
                var API_NEW = process.env.API_KEY;
                const res = await fetch(API_NEW);
                const apiData = await res.json();
                setData(apiData.results);
            } catch (error) {
                console.error("Error fetching API data:", error);
            }
        }

        fetchData();
    }, []);

    if(!data){
        return(
            <div>
                loading....
            </div>
        )
    }
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
                {data.map((post, index) => (
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
