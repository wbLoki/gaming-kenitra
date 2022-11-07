import { Tarif } from "../typings";

export const fetchTarifs = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTarif`);
    const data = await res.json();
    const tarifs: Tarif[] = data.tarifs;

    console.log("fetching", tarifs);

    return tarifs;
}