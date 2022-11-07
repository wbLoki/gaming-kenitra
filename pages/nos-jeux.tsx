import React, {useState} from 'react'
import Card from '../components/Game'
import { BsSearch } from "react-icons/bs";

import valo from '../media/valo.jpg'
import lol from '../media/lol.jpg'
import cod from '../media/cod.jpg'
import fortnite from '../media/fortnite.jpg'
import { Game } from '../typings';
import { fetchGames } from '../utilities/fetchGames'
import { GetStaticProps } from 'next';
import { urlFor } from '../sanity';

type Props = {
  jeux: Game[];
}
type eventTarget = {value: string}
type Event = {
  target: eventTarget
}
//------------------------ List of Games --------------------------------
const games = [
  {name: "Fortnite", img: fortnite, details: "This is a battle royale game.", platforms: ["PS5", "Xbox", "PC"]},
  {name: "Valorant", img: valo, details: "This is a shooter game.", platforms: ["PC"]},
  {name: "League of Legends", img: lol, details: "This is a MOBA game.", platforms: ["PC"]},
  {name: "Call of Duty: Warzone", img: cod, details: "First person shooter.", platforms: ["PC", "PS5"]},
]

function Jeux({jeux}: Props) {
  const [search, setSearch] = useState("");
  const [currentGames, setCurrentGames] = useState(jeux);
  const handleChange = (e:Event) => {
    setSearch(e.target.value);
    setCurrentGames(jeux.filter(game => game.titre.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  return (
    <>
      <h1 className='text-left text-4xl'>Nos Jeux</h1>
      <div className='flex ml-auto rounded-md items-center cursor-pointer h-10 my-2 flex-grow max-w-md bg-indigo-900'>
        <input
        type="text"
        className="flex-grow h-full p-1 rounded-l-md focus:outline-none px-2 bg-slate-800/90"
        value={search}
        onChange={handleChange}
        />
        <BsSearch className="w-10" />
      </div>
      <div id="bottom-cards" className="grid grid-cols-1 my-14 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {currentGames.length!=0 && currentGames.map((game, i) => {
          return <Card
          key={i}
          name={game.titre}
          img={urlFor(game?.image).url()}
          details={game.detail}
          platforms={game.platforms} />
        })}
      </div>
    </>
  )
}

export default Jeux

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jeux: Game[] = await fetchGames();

  return {
      props: {
          jeux,
      },
      revalidate: 100,
  }
}