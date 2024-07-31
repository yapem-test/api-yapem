import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
// import { Product } from '../modules/products/entities/Product';
// import { User } from '../modules/users/entities/User';

dotenv.config();

const dbName = process.env.DB_DATABASENAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = process.env.DB_PORT as string;

if (!dbName || !dbUser || !dbPassword || !dbHost || !dbPort) {
    throw new Error('Está faltando uma ou mais variaveis de ambiente para o banco de dados');
}

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: parseInt(dbPort, 10),
    dialect: 'postgres',
    logging: console.log,
    // models: [Product, User],

    define: {
        timestamps: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
});

export default sequelizeConnection;
