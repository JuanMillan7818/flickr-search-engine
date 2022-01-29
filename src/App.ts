import express, { Application } from 'express';
import { createConnection } from 'typeorm';
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors';
import { FlickrController } from './routes/flicker/flickr.controller.';
import { RecordSearchController } from './routes/searchs/record-search.controller';
import { jwtBearer } from './middleware/auth';
import { RenderController } from './routes/render/render.controller';
import { options } from './swagger/swagger-options';
import { serve, setup } from 'swagger-ui-express';

export class App {
    private app: Application;
    private port: number;    
    private flickrController: FlickrController;
    private recordSearchController: RecordSearchController;    
    private renderController: RenderController;

    constructor(port: number) {        
        this.app = express();        
        this.port = port;  
        this.useMiddlewares();                               
        this.useControllers();                
    }
    
    private useMiddlewares() {        
        this.app.use(cors({
            methods: 'GET,POST',
            origin: [`http://localhost:${this.port}/`]}));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));             
        this.app.use('/api-docs', serve, setup(swaggerJSDoc(options)));      
    }    
    
    private async useControllers() {          
        // Conexion a base de datos
        await createConnection();
        
        // Controladores
        this.flickrController = new FlickrController();                                    
        this.recordSearchController = new RecordSearchController();   
        this.renderController = new RenderController();

        // Rutas
        this.app.use('/api/search', jwtBearer, this.flickrController.router);
        this.app.use('/searchs', jwtBearer, this.recordSearchController.router);
        this.app.use('/',this.renderController.router);
    }           

    public listen() {        
        this.app.listen(this.port, () => {
            console.log('Servidor en ejecucion\n');  
            console.log("Presiona CTRL-C para detenerlo\n");
        });
    }
}