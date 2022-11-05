import React, {useState} from 'react'
import Game from '../components/Game'
import { BsSearch } from "react-icons/bs";

import valo from '../media/valo.jpg'
import lol from '../media/lol.jpg'
import cod from '../media/cod.jpg'
import fortnite from '../media/fortnite.jpg'

type Props = {}
type eventTarget = {value: string}
type Event = {
  target: eventTarget
}
//------------------------ List of Games --------------------------------
const games = [
  {name: "Fortnite", img: fortnite, details: "This is a battle royale game.", platforms: ["PS5", "Xbox", "PC"]},
  {name: "Valorant", img: valo, details: "This is a shooter game.", platforms: ["PC"]},
  {name: "League of Legends", img: lol, details: "This is a MOBA game.", platforms: ["PC"]},
]

function Jeux({}: Props) {
  const [search, setSearch] = useState("");
  const [currentGames, setCurrentGames] = useState(games);
  const handleChange = (e:Event) => {
    setSearch(e.target.value);
    console.log(e);
    setCurrentGames(games.filter(game => game.name.toLowerCase().includes(e.target.value)));
  }
  return (
    <>
      <h1 className='text-left text-4xl'>Nos Jeux</h1>
      <div className='flex ml-auto rounded-md items-center cursor-pointer h-8 my-2 flex-grow max-w-md bg-indigo-900'>
        <input
        type="text"
        className="flex-grow p-1 rounded-l-md focus:outline-none px-2"
        value={search}
        onChange={handleChange}
        />
        <BsSearch className="w-10" />
      </div>
      <div id="bottom-cards" className="grid grid-cols-1 my-14 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {currentGames.map((game, i) => {
          return <Game key={i} name={game.name} img={game.img} details={game.details} platforms={game.platforms} />
        })}
      </div>
    </>
  )
}

export default Jeux