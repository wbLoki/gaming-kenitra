import React, {useState} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import menuOpen from "../media/icon-menu.svg";
import menuClose from "../media/icon-menu-close.svg";

type Props = {}

function Header({}: Props) {
    const [menu, setMenu] = useState(menuOpen);
    const [menuStyle, setMenuStyle] = useState("menu");
    const [menuToggle, setMenuToggle] = useState(false);
    const toggleMenu = () => {
      if (!menuToggle) {
        setMenu(menuClose);
        setMenuStyle("menu translate-x-0");
      } else {
        setMenuStyle("menu");
        setMenu(menuOpen);
      }
      setMenuToggle(!menuToggle);
    };
  
    return (
      <header className="header">
        <motion.img
        initial={{y: -200}}
        animate={{y: 0}}
        transition={{duration: 1.5, type: 'spring', stiffness: 70}}
        src="/logo.jpg" alt="logo" className="w-10 sm:w-14 rounded-full" />
        <button
        aria-controls="main-menu"
        aria-expanded="false"
        className="main-menu-toggle"
        onClick={toggleMenu}
      >
        <Image src={menu} alt="logo" width={150} height={150} className="w-8 invert" />
      </button>
        {menuToggle ? (
          <div className="shade-effect" onClick={toggleMenu}></div>
        ) : (
          ""
        )}
        <motion.nav
        initial={{x: 500, opacity: 0.2}}
        animate={{x:[450, 0], opacity: 1}}
        transition={{duration: 1.5, type: 'tween'}}
        >
          <ul id="main-menu" className={menuStyle}>
            <li>Accueil</li>
            <li>Nos Jeux</li>
            <li>Nos Tarifs</li>
            <li>Horaire</li>
            <li>Notre Area</li>
          </ul>
        </motion.nav>
      </header>
    );
}

export default Header