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