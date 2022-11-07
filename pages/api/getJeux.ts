import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from "../../sanity";
import {Game} from '../../typings';

const query = groq`
    *[_type == "jeux"]
`

type Data = {
    games: Game[]
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const games: Game[] = await sanityClient.fetch(query);
    res.status(200).json({ games })
  }
  