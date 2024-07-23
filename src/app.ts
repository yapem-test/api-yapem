import express, { Express } from 'express';
import { homeRoute } from './routes/homeRoute';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const whitelist = ['http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin as string) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoute);
    }

    async connectionDatabase() {
        try {
            // await sql.connect(database.url);
            console.log('[server]: Connection database success');
        } catch (err) {
            console.error('[server]: Error connecting database', err);
        }
    }
}

export default new App().app;
