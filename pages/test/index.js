import React from 'react'
import {useRouter} from 'next/router'
function index() {
    const router =useRouter();
    return (
        <div onClick={()=>{
            router.back();
        }}>
            back
        </div>
    )
}

export default index
