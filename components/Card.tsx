import React from 'react'
import Image, { StaticImageData } from 'next/image'


type Props = {
    name: string;
    details: string[];
    price?: number;
    img?: StaticImageData;
}

function Card({name, details, img, price}: Props) {
  return (
    <div className='shadow-lg shadow-black bg-slate-400 text-slate-900 space-y-4 py-2 rounded-md'>
        <span className='text-4xl font-bold'>{name}</span>
        <div className='grow bg-indigo-900'>
        {price ? <span className='text-2xl text-slate-300 py-2'>{price} DH</span>
        : 
            <Image src={img} width={500} height={350} alt={name} />}
         </div>
        <div className='p-2'>
            <ul>
            {details.map((detail, i) => {
                return <li key={i}>{detail}</li>
              })}
            </ul>
        </div>
    </div>
  )
}

export default Card