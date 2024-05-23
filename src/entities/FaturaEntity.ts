import { itemConsumo } from "./ItemConsumo";
import  { uuid } from 'uuidv4';
export class FaturaEntity{
    public readonly id: string;
    public notafiscal:string;
    public numeroCliente:string;
    public mesReferencia:string;
    public energiaeletrica:string;
    public tarifaConsumo:Array<itemConsumo>
    public energiaEletricakwh:number;
    public energiaCompensadakwh:number;
    public valorEmReaisTotalSemGD:number;
    public economiaGDEmReais:number;

    //ommitir o id na crição de uma noiva fatura
    constructor(props: Omit<FaturaEntity, 'id'>, id?: string){
        Object.assign(this, props);

        //criar o Id dinamico
        if(!id){
            this.id = uuid();
        }
    }
}


