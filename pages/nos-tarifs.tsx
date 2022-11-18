import { GetStaticProps } from 'next';
import React from 'react'
import Card from '../components/Card'
import { Tarif } from '../typings';
import client from '../client';

type Props = {
    tarifs: Tarif[];
}

function Tarifs({tarifs}: Props) {
    const abon = tarifs?.filter(tarif => tarif.type == "abonnement");
    const pc = tarifs?.filter(tarif => tarif.type == "pc");
    const consoles = tarifs?.filter(tarif => tarif.type == "console");

  return (
    <div className='text-center space-y-14 p-4 md:p-20'>
        {abon?.length != 0 && <div className='shadow-md shadow-black bg-[#0F172A] px-4 max-w-2xl mx-auto'>
            <h1 className='text-3xl'>Abonnements</h1>
            <div className='grid grid-cols-1 my-14 md:grid-cols-2 gap-8 pb-4'>
                {abon?.map((card, key) => {
                    return <Card
                    key={key}
                    name={card?.name}
                    price={card?.prix}
                    details={card?.details}
                    />
                })}
            </div>
        </div>}
        {pc?.length != 0 && <div className='shadow-md shadow-black bg-[#0F172A] px-4'>
            <h2 className='text-3xl'>High-end Gaming PC</h2>
            <div className='grid grid-cols-1 my-14 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-4'>
                {pc?.map((card, key) => {
                    return <Card
                    key={key}
                    name={card?.name}
                    price={card?.prix}
                    details={card?.details}
                    />
                })}
            </div>
        </div>}
        {consoles?.length != 0 && <div className='shadow-md shadow-black bg-[#0F172A] px-4 mx-auto max-w-5xl'>
            <h2 className='text-3xl'>PlayStation 5</h2>
            <div className='grid grid-cols-1 my-14 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-4'>
                {consoles?.map((card, key) => {
                    return <Card
                    key={key}
                    name={card?.name}
                    price={card?.prix}
                    details={card?.details}
                    />
                })}
            </div>
        </div>}
    </div>
  )
}

export default Tarifs;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const tarifs: Tarif[] = await client.fetch(`*[_type == "tarif"]`);

    return {
        props: {
            tarifs,
        },
        revalidate: 100,
    }
}