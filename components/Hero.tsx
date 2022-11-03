import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'

import HeroMobile from '../media/2022-10-25.webp'
import HeroDesktop from '../media/heroImage.webp'
import BgImage from '../media/20221021_231607.webp'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            // "The sixth dimensional gaming center.",
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
        <div className="md:flex gap-6" id="landing">
            <div className="web3" id="main-content">
                <div className='relative'>
                    <h1 className='absolute z-10 text-2xl lg:text-3xl font-bold bottom-4
                    bg-[#2c2a2aaf] w-full text-amber-500 sm:px-4'
                    >
                        <span>{text}</span>
                        <Cursor />
                    </h1>
                    <Image className="relative hidden sm:block" src={HeroDesktop} alt="web 3" />
                    <Image className="sm:hidden" src={HeroMobile} alt="web 3" />
                </div>
                <div className="sm:flex py-6 items-center">
                        {/* <h1 className='text-2xl lg:text-5xl font-bold sm:w-1/2 text-amber-500'>
                            <span>{text}</span>
                            <Cursor />
                        </h1> */}
                    <div className="sm:w-1/2">
                        <p className="text-slate-600">
                            We dive into the next evolution of the web that claims to put
                            the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <button className="action-button">READ MORE</button>
                    </div>
                </div>
            </div>
            <div className="news" id="additional-info">
                <h1 className="text-4xl font-bold text-amber-500">New</h1>
                <div id="news-articles" className="news-articles">
                    <div className="article">
                        <h2>Hydrogen VS Electric Cars</h2>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className="article">
                        <h2>The Downsides of Al Artistry</h2>
                        <p>
                            What are the possible adverse effects of on-demand AI image
                            generation?
                        </p>
                    </div>
                    <div className="article">
                        <h2>Is VC Funding Drying Up?</h2>
                        <p>
                            Private funding by VC firms is down 50% YOY. We take a look at
                            what that means.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero