import { HiraItem } from "./hira-item";

export class HiraResponse {
    resultCode: string;
    resultMsg: string;
    numOfRows: number;
    pageNo: number;
    totalCount: number;
    Items: HiraItem[]
}