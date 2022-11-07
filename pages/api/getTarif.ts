import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from "../../sanity";
import {Tarif} from '../../typings';

const query = groq`
    *[_type == "tarif"]
`

type Data = {
    tarifs: Tarif[]
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const tarifs: Tarif[] = await sanityClient.fetch(query);
    res.status(200).json({ tarifs })
  }
  