# Microfrontends con angular

Ver documentacion de:
- [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation).
- [@angular-architects/module-federation-tools](https://www.npmjs.com/package/@angular-architects/module-federation-tools)

## Que son los Microfrontends

El término Micro Frontends apareció por primera vez en ThoughtWorks Technology Radar a finales de 2016. Extiende los conceptos de los micro servicios al mundo del frontend. La tendencia actual es crear una aplicación de navegador potente y rica en características, también conocida como “single page app”, que se asiente sobre una arquitectura de microservicio. Con el tiempo, la capa de frontend, a menudo desarrollada por un equipo independiente, crece y se vuelve más difícil de mantener. Eso es lo que llamamos una Interfaz Monolítica.

La idea detrás de Micro Frontends es pensar en un sitio web o aplicación web como una composición de características que son propiedad de equipos independientes. Cada equipo tiene un área de negocio definida o misión de la que se preocupa y se especializa. Un equipo es cross functional y desarrolla sus características end-to-end, desde la base de datos hasta la interfaz de usuario.

Sin embargo, esta idea no es nueva, en el pasado se llamaba Integración de Frontend para Sistemas Verticales o Sistemas autocontenidos. Pero Micro Frontends es claramente un término más amigable y menos voluminoso.

- [micro-frontends-es.org](https://micro-frontends-es.org/)

## Para crear un nuevo aplicativo

Usar el comando `ng g app nombre-app`, cuando nos pregunte si deseamos usar el routes indicar que si 

## Asignar puerto a la aplicacion

Posterior a crear la apliacion, necesitaremos asignar un puerto de trabajo a la misma, para esto usar el comando: 

`ng add @angular-architects/module-federation --project nombre-app --port xxxx`

## Comandos 

 - Crear modulo: `ng g m nombe-modulo --project nombre-app`
 - Crear componente: `ng g c nombe-componente --project nombre-app`

## Arrancar frontends

Primero se debe de iniciar con los frontend hijos y por ultimo el shell

- Login: `ng s login`
- Dashboard: `ng s dashboard`
- Shell: `ng s shell`

## Rutas en local

- Login: `http://localhost:3003/login`
- Dashboard: `http://localhost:3003/dashboard`


