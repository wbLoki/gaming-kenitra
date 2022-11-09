interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}


export interface Game extends SanityBody {
    detail: string;
    image: string;
    platforms: string[];
    titre: string;
}

export interface Tarif extends SanityBody {
    details: string[];
    name: string;
    prix: number;
    type: string;
}

export interface Menu {
    slug: string;
    key: number;
    title: string;
}

export interface Page extends SanityBody {
    slug: {_type: "slug", current: string};
    page: Page;
    title: string;
}