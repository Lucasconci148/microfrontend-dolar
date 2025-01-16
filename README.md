# Microfrontend Native Federation

Este es un proyecto que tiene un host que consume un microfrontend el cual consulta la cotizacion del dolar paralelo. Ambas aplicaciones estan construidas con Angular 19 y al no utilizar webpack, utilizamos native federation para el microfronted.

## Requisitos

- Node.js >= 18.x

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/microfrontend-dolar.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd microfrontend-dolar
   ```

## Uso del host

1. Navega al directorio del Host:

   ```bash
   cd shell
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run start
```

El Host estará disponible en `http://localhost:4200`. Pero no mostrara la informacion del Microfrontend

## Uso del Microfrontend

1. Volver a la carpeta principal:

   ```bash
   cd ..
   ```

2. Navega al directorio del Host:

   ```bash
   cd mfeDollar
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Para iniciar el MFE de desarrollo, ejecuta:

```bash
npm run start
```

El proyecto estará disponible en `http://localhost:4201`.
En este puerto podras ver solamente el microfronted, una vez que este corriendo correctamente, deberas volver al host en `http://localhost:4200` para poder ver la ejecucion de ambos
