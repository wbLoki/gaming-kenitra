import React from 'react'
import Image, { StaticImageData } from 'next/image'


type Props = {
    name: string;
    price?: number;
    details: string[];
    img?: StaticImageData;
}

function Card({name, price, details, img}: Props) {
  return (
    <div className='shadow-lg shadow-black bg-slate-400 text-slate-900 space-y-4 py-2 rounded-md'>
        <span className='text-4xl font-bold'>{name}</span>
        <div className='grow py-4 bg-indigo-900'>
        {price ? <span className='text-3xl text-slate-300'>{price} DH</span>
        : 
            <Image src={img} width={500} height={350} alt={name} />}
         </div>
        <div className='p-2'>
            <ul className='divide-y divide-slate-700 -mb-4'>
            {details.map((detail, i) => {
                return <li key={i} className='py-2 px-4'>{detail}</li>
              })}
            </ul>
        </div>
    </div>
  )
}

export default Card