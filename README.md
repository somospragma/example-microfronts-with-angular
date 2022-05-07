# Microfrontends con an

Ver documentacion de:
- [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation).
- [@angular-architects/module-federation-tools](https://www.npmjs.com/package/@angular-architects/module-federation-tools)
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
- Shell: `ng s shell`


