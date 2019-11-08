# Notas y consideraciones durante la elaboración del proyecto

## Comandos

### Inicialización e instalación de módulos

```
$ yarn init

$ yarn add express express-session passport passport-local bcrypt dotenv mariadb sequelize sequelize-cli connect-session-sequelize

$ yarn add -D eslint nodemon
```

### Para utilizar sequelize

Para usar el cli de manera global se instaló:

    $ npm install -g sequelize sequelize-cli
    $ npm install -g mariadb // requiere el driver tambien como global para usar sequelize global

ahora los comandos de sequelize se pueden ejecutar así:

    $ sequelize db:seed:all

alternativamente se puede seguir usando el módulo local indicando la ruta completa:

    $ ./node_modules/.bin.sequelize db:seed:all

## Database

Creación de la db

    $ CREATE DATABASE `authsession_dev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

## ORM Sequelize

En primer lugar se creó el archivo ".sequelizerc" en el root para definir la estructura.

Luego se inicializó sequelize

    $ sequelize init

Nota: para corregir la advertencia "please use IANA standard timezone format ('Etc/GTM0')..." se agregó la siguiente configuración a "config.json"

```
# config.json

"dialectOptions": {
  "timezone": "Etc/GMT0"
}
```

Creación del primer modelo

    $ sequelize model:generate --name User --attributes email:string

Ejecutando su migración

    $ sequelize db:migrate --env development
