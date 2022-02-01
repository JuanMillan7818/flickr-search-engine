# Aplicacion Fullstack - Buscador de imagenes
[![forthebadge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/es/)
[![forthebadge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.reactjs.org/)
[![forthebadge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://www.heroku.com)

## Description

Backend y Frontend que corresponde a una sistema de busqueda de imagenes haciendo uso e implentacion del servicion de [Flickr](https://www.flickr.com/services/feeds/docs/photos_public/).

Las tecnologias utilizadas corresponden a [Express](https://expressjs.com/es/) y [React - Ionic](https://ionicframework.com/docs/react/quickstart).

El sistema genera una llave automaticamente al ingresar en la pagina web, la llave es de tipo JWT Bearer token, el cual se utiliza en la parte de Frontend para hacer todas las peticion al Backend, con esto realizamos una autorizacion valida para la API.


## Despligue en Heroku
El servicio esta desplegado en Heroku, el cual es una plataforma como servicio de computación en la Nube que soporta distintos lenguajes de programación. 

Enlace de la [API](https://flickr-search-engine.herokuapp.com).

[Documentacion en swagger](https://flickr-search-engine.herokuapp.com/api-docs)


# Despligue local
## Proteccion de los Endpoints
Los endpoints esta protegidos bajo la cabacera 
> Authorization

> Se requiere el valor TOKEN_SECRET

El valor de esta propiedad se debe establecer en el archivo **.env** donde se almacenan todas las variables de entorno. Esta se utiliza generar un token valido bajo JWT Bearer token.
Ademas de otras variables de entorno necesarias, para saber cuales son necesarios por favor revise el **.env.example**.

## Base de datos
Si se desea correr la aplicacion localmente se debe asegurar que existe una base de datos llamada:

> record_flickr

Ademas puede configurar la informacion que se le proporciona a la base de datos **Postgres** como nombre de usuario, nombre de base de datos y contraseña.

### Ruta del archivo de configuracion para **Postgres**:
    .
    ├── ormconfig.ts                # Archivo de configuracion de BD


## Instalacion

```bash
$ npm install
```

## Ejecutar el proyecto

```bash
# Ejecutar como modo de desarrollo
$ npm run dev

# Modo de produccion
$ npm run start:prod
```

## Ejecutar el proyecto - Solo Frontend

Para esto se debe de asegurar de cambiar el metodo ReactDOM.hydrate() por ReactDOM.render().
```bash
# Ejecutar proyecto de React-Ionic
$ ionic serve

# Generar carpeta de produccion
$ ionic build
```