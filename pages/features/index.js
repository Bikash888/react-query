import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQuery } from 'react-query'


const fetchPeopleListFromAPI = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    return  res.json();
}

export default function Features() {
    const { data,status} = useQuery("people", fetchPeopleListFromAPI);
    console.log("data",data);
    console.log("status",status)

    
    return (
        <>
            <div  style={{display:'flex',width:"100%",marginTop:"50px" ,flexDirection:"column" , justifyContent:'center',alignItems:'center'}}>
             {
                 status==="success" &&
                data.results.map((item)=>
                 <div style={{boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.05)',padding:'10px',borderRadius:"8px",width:"60%" ,background:"#e6d7ae",marginBottom:"20px"}}>
                     <strong>{item.name}</strong>
                     <p>{item.gender}</p>
                     <p>Hair Color: {item.hair_color}</p>
                     </div>
                )
             }
            </div>
        </>
    );
}
