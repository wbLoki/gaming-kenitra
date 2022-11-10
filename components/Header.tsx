import React, {useState} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router';

import menuOpen from "../media/icon-menu.svg";
import menuClose from "../media/icon-menu-close.svg";

type Props = {}

function Header({}: Props) {
  const router = useRouter()
  const [menu, setMenu] = useState(menuOpen);
  const [menuStyle, setMenuStyle] = useState("menu");
  const [menuToggle, setMenuToggle] = useState(false);
  const [navButton, setNavButton] = useState("main-menu-toggle absolute")
  const toggleMenu = () => {
    if (!menuToggle) {
      setMenu(menuClose);
      setMenuStyle("menu translate-x-0");
      setNavButton("main-menu-toggle fixed")
    } else {
      setMenuStyle("menu");
      setMenu(menuOpen);
      setNavButton("main-menu-toggle absolute")
    }
    setMenuToggle(!menuToggle);
  };

  return (
    <header className="header">
      <button className='flex items-center gap-4'>
        <motion.img
        initial={{y: -200}}
        animate={{y: 0}}
        transition={{duration: 1.5, type: 'spring', stiffness: 70}}
        src="/logo.jpg" alt="logo" className="w-10 sm:w-14 rounded-full"
        />
        <span className='block md:hidden lg:block text-3xl md:text-2xl xl:text-3xl text-violet-800 tracking-widest'>Gaming Area</span>
      </button>
      <button
      aria-controls="main-menu"
      aria-expanded="false"
      className={navButton}
      onClick={toggleMenu}
      >
        <Image src={menu} alt="logo" width={150} height={150} className="w-8 invert" />
      </button>
      {menuToggle && (<div className="shade-effect" onClick={toggleMenu}></div>)}
      <motion.nav
      initial={{x: 500, opacity: 0.2}}
      animate={{x:[450, 0], opacity: 1}}
      transition={{duration: 1.5, type: 'tween'}}
      >
        <ul id="main-menu" className={menuStyle}>
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Accueil</Link>
          </li>
          <li className={router.pathname == "/nos-jeux" ? "active" : ""}>
            <Link href="/nos-jeux">Nos Jeux</Link>
          </li>
          <li className={router.pathname == "/nos-tarifs" ? "active" : ""}>
            <Link href="/nos-tarifs">Nos Tarifs</Link>
          </li>
          <li className={router.pathname == "/notre-area" ? "active" : ""}>
            <Link href="/notre-area">Notre Area</Link>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
}

export default Header