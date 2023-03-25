import React from 'react'
import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex-row flex-nowrap sm:flex-row border-2 hover:scale-[1.03] active:scale-[1] hover:shadow-lg shadow-slate-300 ml-8 mt-2 mb-8 rounded-xl transition transform durataion-250 cursor-pointer ease-out" >

        <div className="flex-row relative flex-shrink-0 h-[180px] w-[340px] md:w-[580px] md:h-[200px]">
          <Image className="rounded-tl-lg rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg" src={img} layout="fill" objectFit='cover' />
        </div>
       
        <div className="flex w-[340px] sm:flex-roww-[340px] md:w-[578px] flex-col flex-grow pl-5">
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

                <div className="mt-4 md:mt-2 mr-4 md:mr-4">
                    <p className="text-lg font-semibold pb-1 md:pb-2 lg:text-2xl">{price}</p>
                    <p className="text-right pb-4 font-extralight">{total}</p>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default InfoCard