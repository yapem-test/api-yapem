import { Model } from 'sequelize';

export interface IBaseEntity extends Model {
    id?: number;
    createdAt: Date;
    updatedAt: Date;
}