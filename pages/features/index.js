import React,{useEffect} from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Features() {
    useEffect(()=>{
        console.log("---->",document.referrer[0]);
       // console.log(window.history.go(-1));
    })
       
    
  return (
    <>
    <div>
        <Image src="/vercel.svg" width="880" height="100" />
        <Carousel>
                <div>
                    <img src="vercel.svg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="vercel.svg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="vercel.svg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    </>
  );
}
