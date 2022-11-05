import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'

import HeroMobile from '../media/2022-10-25.webp'
import HeroDesktop from '../media/heroImage.webp'
import valo from '../media/valo.jpg'
import lol from '../media/lol.jpg'
import cod from '../media/cod.jpg'
import fortnite from '../media/fortnite.jpg'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Player 1 has logged-in",
            "initializing sequence #1337...",
            "Start gaming!"
        ],
        loop: 1,
        typeSpeed: 100,
        delaySpeed: 3000,
        deleteSpeed: 50,
    });

  return (
    <section className="justify-between mb-8 h-full text-slate-900
    text-left space-y-16">
        <div className="md:flex gap-6 space-y-4 md:space-y-0" id="landing">
            {/*********************************  landing image **********************************/}
            <div className="web3 shadow-lg shadow-black rounded-md" id="main-content">
                <div className='relative'>
                    <h1 className='absolute z-10 text-2xl lg:text-3xl font-bold bottom-4
                    bg-[#2c2a2aaf] w-full text-amber-500 sm:px-4'
                    >
                        <span>{text}</span>
                        <Cursor />
                    </h1>
                    <Image className="relative hidden sm:block overflow-hidden rounded-t-md" src={HeroDesktop} alt="web 3" />
                    <Image className="sm:hidden overflow-hidden rounded-t-md" src={HeroMobile} alt="web 3" />
                </div>
                <div className="sm:flex py-6 items-center">
                    <div className="sm:w-1/2">
                        <p className="text-slate-600">
                            We bring you the best gaming experience. We are the sixth dimensional gaming center.
                        </p>
                        <button className="action-button"><Link href="/nos-tarifs">Start Game</Link></button>
                    </div>
                </div>
            </div>
            {/******************************  ACTUALITES ************************************/}
            <div className="news shadow-lg shadow-black rounded-md" id="additional-info">
                <h1 className="text-4xl font-bold text-amber-500">Actualités</h1>
                <div id="news-articles" className="news-articles">
                    <div className="article">
                        <h2>Tournoi Valorant</h2>
                        <p className='truncate'>
                            Tournoi Valorant a Kenitra Le 06 Novembre 2022 cash prize 1000DH Reservez vos places dans notre area.
                        </p>
                    </div>
                    <div className="article">
                        <h2>Tournoi FIFA22</h2>
                        <p className='truncate'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus ante in lorem porta ornare.
                        </p>
                    </div>
                    <div className="article">
                        <h2>League Of Legends</h2>
                        <p className='truncate'>
                        Nulla facilisi. Aenean vitae imperdiet arcu. Suspendisse rhoncus,
                        orci vitae egestas vehicula,
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/***************************  Gaming Section ****************************/}
        <div id="bottom-cards" className="cards">
            <div className="card">
                <Image src={valo} alt="Valorant" className="img" />
                <div className="details">
                    <h1>Valorant</h1>
                    <h2>First Person Shooter</h2>
                    <p></p>
                </div>
            </div>
            <div className="card">
                <Image src={fortnite} alt="Fornite" className="img" />
                <div className="details">
                    <h1>Fortnite</h1>
                    <h2>Battle Royale</h2>
                    <p></p>
                </div>
            </div>
            <div className="card">
                <Image src={lol} alt="League of Legends" className="img" />
                <div className="details">
                    <h1>League of Legends</h1>
                    <h2>MOBA</h2>
                    <p></p>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Hero