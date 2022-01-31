import { App } from './App';
import * as dotenv from 'dotenv';

const start = () => {
  dotenv.config();
  let port = parseInt(process.env.PORT_SERVE || '3000');
  let app = new App(port);  
  
  app.listen();
}

start();

