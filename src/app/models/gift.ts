export interface GiftModel {
    id: string;
    imageUrl: string;
    name: string;
    value: number;
}

export interface GiftLink {
    name: string;
    url: string;
}

export interface GiftDetailedModel extends GiftModel {
    links: GiftLink[];
    description: string;
}