import { RecordSearch } from "./src/server/db/entities/record-search.entity";

let config: object = {};
if(process.env.NODE_ENV === 'production') {
    config = {
        url: process.env.DATABASE_URL,
        type: 'postgres',
        ssl: {
            rejectUnauthorized: false,
        },          
        entities: [RecordSearch],
        synchronize: true,           
        autoLoadEntities: true
    }
}else {
    config = {
        "type": "postgres",
        "host": process.env.POSTGRES_HOST,
        "port": process.env.POSTGRES_PORT,
        "username": process.env.POSTGRES_USER,
        "password": process.env.POSTGRES_PASSWORD,
        "database": process.env.POSTGRES_DB,
        "entities": [RecordSearch],
        "synchronize": true,           
        "autoLoadEntities": true,      
    }
}

export default config;