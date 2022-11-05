import React from 'react'
import Card from '../components/Card'

type Props = {}

function Tarifs({}: Props) {
  return (
    <div className='text-center space-y-14 p-20 center'>
        <div className='shadow-md shadow-black px-4 max-w-2xl mx-auto'>
            <h1 className='text-3xl'>Abonnements</h1>
            <div className='grid grid-cols-1 my-14 md:grid-cols-2 gap-8 pb-4'>
                <Card name="Starter" price={230}
                details={["16H", "AMD Ryzen 5", "RTX 3050", 'MSI 24" 165Hz 0,5ms', "Peripherique Razer"]}
                />
                <Card name="Express" price={320}
                details={["24H", "AMD Ryzen 5", "RTX 3050", 'MSI 24" 165Hz 0,5ms', "Peripherique Razer"]}
                />
            </div>
        </div>
        <div className='shadow-md shadow-black px-4'>
            <h2 className='text-3xl'>High-end Gaming PC</h2>
            <div className='grid grid-cols-1 my-14 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-4'>
                <Card name="Bronze" price={20}
                details={["1H", "AMD Ryzen 5", "RTX 3050", 'MSI 24" 165Hz 0,5ms', "Peripherique Razer"]}
                />
                <Card name="Silver" price={35}
                details={["2H", "AMD Ryzen 5", "RTX 3050", 'MSI 24" 165Hz 0,5ms', "Peripherique Razer"]}
                />
                <Card name="Gold" price={50}
                details={["3H", "AMD Ryzen 5", "RTX 3050", 'MSI 24" 165Hz 0,5ms', "Peripherique Razer"]}
                />
                <Card name="Platinum" price={65}
                details={["4H", "AMD Ryzen 5", "RTX 3050", 'MSI 24" 165Hz 0,5ms', "Peripherique Razer"]}
                />
            </div>
        </div>
        <div className='shadow-md shadow-black px-4'>
            <h2 className='text-3xl'>Console Gaming</h2>
            <div className='grid grid-cols-1 my-14 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-4'>
                <Card name="Bronze" price={20}
                details={["30min", 'Ecran Samsung 50" 4K', "2 manettes DualSense", "Exclusivite PS5"]}
                />
                <Card name="Silver" price={30}
                details={["1H", 'Ecran Samsung 50" 4K', "2 manettes DualSense", "Exclusivite PS5"]}
                />
                <Card name="Gold" price={55}
                details={["2H", 'Ecran Samsung 50" 4K', "2 manettes DualSense", "Exclusivite PS5"]}
                />
                <Card name="Platinum" price={95}
                details={["4H", 'Ecran Samsung 50" 4K', "2 manettes DualSense", "Exclusivite PS5"]}
                />
            </div>
        </div>
    </div>
  )
}

export default Tarifs