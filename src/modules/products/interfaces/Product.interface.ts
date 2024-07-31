import { IBaseEntity } from "../../../base/entity/interfaces/IBaseEntity";
export interface IProduct extends IBaseEntity {
    name: string;
    price: number;
    description: string;
}
