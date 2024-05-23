import { FaturaEntity } from "../entities/FaturaEntity";
import { IFaturaRepository } from "../repositories/IFaturaRepository";
import { CreateFaturaRequestDTO } from "./CreateFatureDTO";

export class CreateFaturaFaturaCase{
    constructor(
       private faturaRepository: IFaturaRepository 
    ){}
    async execute(data: CreateFaturaRequestDTO){
        const faturaIsExists = this.faturaRepository.findByNotaFiscal(data.notafiscal);

        if(faturaIsExists){
            throw new Error('Já existe fatura cadastrada com essa nota fiscal.');
        }

        const fatura = new FaturaEntity(data);

        await this.faturaRepository.save(fatura);
    };
}