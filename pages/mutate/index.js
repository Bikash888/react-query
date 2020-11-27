import React, { useState } from 'react'
import {useMutation} from 'react-query';

const submitFormHandler=async({name})=>{
  const res= await  fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: name,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    const result=res.json();
    return result;
}

export default function PostUsingMutation() {
    const [mutate,{data,status}]=useMutation(submitFormHandler,{
        onSuccess:()=>{
            alert("Successfully Posted")
        }
    });
    const [name,SetName]=useState('');
 
    const formHandler=async(e)=>{
        e.preventDefault();
        try {
            await mutate({name})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div  style={{margin:"50px 100px"}}>
            <form onSubmit={formHandler}>
                <input
                style={{width:"100%",height:"40px",fontSize:"20px"}}
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e => SetName(e.target.value)}
                />
                <br />
                <button style={{marginTop:"10px" ,height:"30px", width:"150px"}} type="submit">Submit</button>
            </form>
            {status=="success" && <strong style={{marginTop:"20px"}}>response :{data.userId}</strong>}
        </div>
    )
}
