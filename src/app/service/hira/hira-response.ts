import { HiraItem } from "./hira-item";

export interface HiraResponse {
    numOfRows: number;
    pageNo: number;
    totalCount: number;
    items: HiraItems;
}

export interface HiraItems {
    item: HiraItem[];
}