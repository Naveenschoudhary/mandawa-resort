import Image from 'next/image'
import React from 'react'

const LandScapeSeen = () => {
  return (
    <div className='border-b border-accent/40'>
    <div className='container mx-auto my-4 '>
        <Image src={'https://dummyimage.com/4000x2000'} width={'1800'} height={'900'} className='mb-8'/>
        <div className='text-[24px] text-center tracking-wider'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
        </div>
        <button className=' flex items-center my-8 mx-auto btnAccentColor transition-colors ease-in duration-200 tracking-wider'>Explore Rooms</button>
    </div>
    </div>
  )
}

export default LandScapeSeen