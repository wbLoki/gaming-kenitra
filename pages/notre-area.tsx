import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { SlLocationPin, SlPhone } from "react-icons/sl";
import { MdOutlineAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
import Map from '../components/Map';

type Props = {}

function NotreArea({}: Props) {
    const defaultProps = {
        center: {
          lat: 34.26065895847693,
          lng: -6.5874761201336
        },
        zoom: 18
      };
  return (
    <div className='md:px-4 space-y-16 lg:space-y-8'>
        {/**************** carousel *****************/}
        <section className='lg:flex justify-between bg-slate-800/40 items-center'>
            <div className='w-full lg:w-2/5 space-y-4 p-4 xl:py-10'>
                <h1 className='font-semibold text-3xl md:text-5xl text-amber-500'>How we started?</h1>
                <p className='text-left indent-4 pt-12 text-lg xl:text-xl'>It was a need for a space that was welcoming to everybody.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere ornare elit quis efficitur. Maecenas eu nunc libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum elementum hendrerit tellus a elementum.</p>
            </div>
            <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                className="w-full lg:w-3/5 h-full -mb-10"
            >
                <Image src="/images/pic1.webp" alt="console image" width={450} height={300} />
                <Image src="/images/pic2.webp" alt="computers"  width={450} height={300} />
                <Image src="/images/pic3.webp" alt="computers"  width={450} height={300} />
            </Carousel >
        </section>
        <section className='md:flex justify-between bg-slate-800/40'>
            <div className='md:w-1/2 justify-between py-10 text-left px-6 lg:px-20 space-y-16 my-auto'>
                <h1 className='font-semibold text-4xl text-amber-500'>
                    Reach out to us!
                </h1>
                <div className='sm:pl-4 space-y-4'>
                    <div className='items-center space-x-6 flex text-indigo-500/95'>
                        <SlPhone />
                        <span>+212 123-4567</span>
                    </div>
                    <div className='items-center space-x-6 flex text-indigo-500/95'>
                        <MdOutlineAlternateEmail />
                        <span>contact@gaming-kenitra.ma</span>
                    </div>
                    <div className='items-center space-x-6 flex text-indigo-500/95'>
                        <SlLocationPin />
                        <span>Something St, no 123, 6th floor, appt 13, Kenitra</span>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2'>
            <Map />
            </div>
        </section>
    </div>
  )
}

export default NotreArea