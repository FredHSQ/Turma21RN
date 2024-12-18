import axios, { AxiosResponse } from 'axios';

const apiDnd = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/'
});

interface getMagicItemListResponse {
	count: number,
	results: MagicItemListProps[]
}

export interface MagicItemListProps {
	index: string;
	name: string;
	url: string;
	preco?: number;
}

export function getMagicItemList(): Promise<AxiosResponse<getMagicItemListResponse, any>> {
    const url = 'magic-items/';

    return apiDnd.get(url);
}

export interface getMagicItemDetailsResponse {
	index: string;
	name: string;
	equipment_category: EquipmentCategory;
	rarity: Rarity;
	variants?: any[] | null;
	variant: boolean;
	desc: (string)[];
	url: string;
}

interface EquipmentCategory {
	index: string;
	name: string;
	url: string;
}

interface Rarity {
	name: string;
}

export function getMagicItemDetails(index: string): Promise<AxiosResponse<getMagicItemDetailsResponse, any>> {
    const url = `magic-items/${index}`;

    return apiDnd.get(url);
}