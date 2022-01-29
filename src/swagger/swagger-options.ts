import swaggerJSDoc from "swagger-jsdoc";

export const options: swaggerJSDoc.Options = {    
    swaggerDefinition: {
        openapi: '3.0.0',        
        info: {
            title: 'API-Rest con Express',
            version: '1.0.0',
            description: 'API para un sistema de busqueda de imagenes de Flickr',
            contact: {
                name: 'Juan Pablo Millan',
                email: 'juanmillan7818@gmail.com'
            }
        },                
    },
    apis: ['./src/**/*.ts']
}