import React from 'react'
import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex border-2 hover:scale-[1.03] active:scale-[1] hover:shadow-lg shadow-slate-300 ml-8 mt-2 mb-8 rounded-xl transition transform durataion-250 cursor-pointer ease-out" >

        <div className="relative flex-shrink-0 w-[300px] h-[200px]">
          <Image className="rounded-tl-lg rounded-bl-lg" src={img} layout="fill" objectFit='cover' />
        </div>
       
        <div className="flex w-[500px] flex-col flex-grow pl-5">
            <div className="flex justify-between text-gray-500 pt-4">
                <p>{location}</p>
                <HeartIcon className='h-7 cursor-pointer flex-shrink-0 pr-2 -mt-2'/>
            </div>

            <h4 className="text-xl">{title}</h4>
            <div className="border-b w-10 pt-2"/>

            <p className=" text-sm text-gray-500 flex-grow">{description}</p>
            
            <div className="flex justify-between ">
                <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400"/>
                    {star}
                </p>

                <div className="mr-4 lg:mr-8">
                    <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                    <p className="text-right pb-4 font-extralight">{total}</p>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default InfoCard