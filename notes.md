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
