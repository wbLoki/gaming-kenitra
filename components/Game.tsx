import React from 'react'
import Image, { StaticImageData } from 'next/image'

import {SiPlaystation5 as PS5, SiXbox as Xbox} from 'react-icons/si'
import {MdComputer as PC} from 'react-icons/md'

type Props = {
  details: string;
  img: string;
  name: string;
  platforms: string[];
}

function Game({name, img, details, platforms}: Props) {
  console.log(name);
  return (
    <div className='p-4 bg-[#3347563f] rounded-md shadow-md shadow-black'>
      <div className="flex text-left space-x-4 cursor-default">
          <Image src={img} alt={name} width={675} height={900} className="w-1/3 object-scale-down" />
          <div className="flex flex-col w-2/3 space-y-2 justify-between">
            <div className='space-y-2'>
              <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold text-slate-300'>{name}</h1>
              <p className='text-sm text-gray-500 line-clamp-3 lg:line-clamp-4'>{details}</p>
            </div>
            <div className='flex gap-2 pt-auto items-center'>
              {platforms.map((platform, i) => {
                switch (platform) {
                  case "PS5": return <PS5 className='h-6 w-6'/>
                  case "Xbox": return <Xbox />
                  case "PC": return <PC />
                }
              })}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Game