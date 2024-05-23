import { itemConsumo } from "../entities/ItemConsumo";

export interface CreateFaturaRequestDTO{
    notafiscal:string;
    numeroCliente:string;
    mesReferencia:string;
    energiaeletrica:string;
    tarifaConsumo:Array<itemConsumo>
    energiaEletricakwh:number;
    energiaCompensadakwh:number;
    valorEmReaisTotalSemGD:number;
    economiaGDEmReais:number;
}