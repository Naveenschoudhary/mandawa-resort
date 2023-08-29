import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className='flex min-h-[400px] h-full border-b border-accent/20'>
        <div className='flex-1 ml-[80px] my-auto items-center'>
                 <div className="h-full m-auto">
                 <h2 className="text-[64px]">
                     Resort for <br/>the  moments <span className="heroSectionSpan text-accent font-thin"><br/>rich </span> in emotion
                 </h2>
                 <p className="text-[16px] uppercase">Book now to get the best price</p>
                 <button className="accentGreenbtn my-8 ">Book Now</button>
             </div>
        </div>
        <div className='flex-1'>
        <div className="-mt-[100px]">
           <Image
            width={"900"}
            height={"0"}
            src={"/images/Heorsection.jpg"}
            alt="hero section image"
          />
        </div>
        </div>
    </div>
  )
}

export default Herosection