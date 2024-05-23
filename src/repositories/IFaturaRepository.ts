import { FaturaEntity } from "../entities/FaturaEntity";

export interface IFaturaRepository{
    findByNumeroCliente(numeroCliente:string):Promise<FaturaEntity>;
    findByMesReferencia(dataReferencia:string):Promise<FaturaEntity>;
    findByVencimento(dataVencimento:string):Promise<FaturaEntity>;
    findByNotaFiscal(notaFiscal:string)
    save(fatura:FaturaEntity): Promise<void>;
}