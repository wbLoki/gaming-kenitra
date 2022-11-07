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

export interface Platform extends SanityBody {
    _type: "platform";
    titre: string;
    icon: Image;
}

export interface Tarif extends SanityBody {
    details: string[];
    name: string;
    prix: number;
    type: string;
}