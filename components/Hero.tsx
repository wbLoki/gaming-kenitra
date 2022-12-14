import React, { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import {SiPlaystation5 as PS5, SiXbox as Xbox} from 'react-icons/si'
import {MdComputer as PC} from 'react-icons/md'
import HeroMobile from '../media/2022-10-25.webp'
import HeroDesktop from '../media/heroImage.webp'
import { Game } from '../typings'
import client from '../client'
// import { urlFor } from '../sanity'

type Props = {}


const Hero = (props: Props) => {
    const [games, setGames] = useState<Game[]>([]);
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

    const fetchGames = async () => {
        const result = await client.fetch(`*[_type == "jeux" && featured == true]`);
        setGames(result);
    };

    useEffect(() => {
        fetchGames();
    },[]);

    // console.log(games);
  return (
    <div className="justify-between mb-8 h-full text-slate-900
    text-left space-y-16">
        <div className="md:flex gap-6 space-y-4 md:space-y-0" id="landing">
            {/*********************************  landing image **********************************/}
            <div className="web3 shadow-xl rounded-md" id="main-content">
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
                        <p className="text-slate-600 pl-4">
                            We bring you the best gaming experience. We are the sixth dimensional gaming center.
                        </p>
                        <button className="action-button"><Link href="/nos-tarifs">Start Game</Link></button>
                    </div>
                </div>
            </div>
            {/******************************  ACTUALITES ************************************/}
            <div className="news shadow-xl rounded-md" id="additional-info">
                <h1 className="text-4xl font-bold text-amber-500">Actualit??s</h1>
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
        <section className='my-14 md:space-x-4 shadow-xl rounded-md bg-[#0a0f1b] p-4 md:p-6'>
            <h1 className='text-4xl font-bold text-amber-500'>Featured Games</h1>
            <div id="bottom-cards" className="md:flex md:space-x-4 max-w-[85vw] mx-auto">
                {games?.length!=0 && games?.map((game, i) => {
                    return <div className="card" key={game?._id}>
                        {/* <Image src={urlFor(game?.image).url()} alt={game.titre} width={675} height={900} className="img" /> */}
                        <div className="details flex flex-col justify-between">
                            <div className='space-y-4'>
                                <h1>{game.titre}</h1>
                                <p className='line-clamp-2 md:hidden xl:line-clamp-4'>{game.detail}</p>
                            </div>
                            <div className='flex gap-2 items-center text-slate-100'>
                                {game.platforms.map((platform, i) => {
                                    switch (platform) {
                                    case "PS5": return <PS5 key={i} className='h-6 w-6'/>
                                    case "Xbox": return <Xbox key={i} />
                                    case "PC": return <PC key={i} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                })}
                {/* <div className="card">
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
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default Hero

