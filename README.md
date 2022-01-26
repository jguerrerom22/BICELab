# Configuración del API

Esta API realiza la integración con los servicios de Indecon.
Se puede tomar como referencia [este enlace](<[Link](https://www.indecon.site/)>)

A continuación se establecen los pasos para la configuración y ejecución del proyecto:

### Instalación de dependencias

Ejecutar el comando para la instalación de las dependencias utilizadas

```bash
npm install
```

### Ejecución del proyecto

Ejecutar el proyecto desde la terminal con el siguiente comando, ubicado en la raíz del proyecto

```bash
npm start
```

o

```bash
node app
```

##### Si la respuesta en consola es un _Server running on port xxx_ puedes empezar a realizar peticiones

# Endpoints a utilizar

Se puede realizar peticiones a los siguientes endpoints:

Obtener una lista de los indicadores:

- GET http://localhost:5000/indicadores/

Obtener la información de un indicador

- GET http://localhost:5000/indicadores/{KEY_INDICADOR}

Obtener la información de un indicador para una fecha específica:

- GET http://localhost:5000/indicadores/{KEY_INDICADOR}?date={DD-MM-YYYY}

# Ejecutar test

Para realizar la ejecución de los test se debe correr el siguiente comando ubicado en la raíz del proyecto:

```bash
npm test
```

Allí se podrán observar si estas fueron satisfactorias o no.
