import express from 'express';
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(process.env.PORT_SERVE, () => {
    console.log('Servidor en ejecucion');
    
})

