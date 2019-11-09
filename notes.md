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

```
# Crear la base de datos "dev"
mysql> CREATE DATABASE `dev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

# Crear el usuario "dev@localhost" con password "dev"
mysql> CREATE USER dev@localhost IDENTIFIED BY 'dev';

# Asignar permisos a la base de datos "dev" para el usuario "dev@localhost"
mysql> GRANT ALL PRIVILEGES ON dev.* TO dev@localhost;
mysql> FLUSH PRIVILEGES;
```

## ORM Sequelize

En primer lugar se creó el archivo ".sequelizerc" en el root para definir la estructura.

- Inicialización de sequelize

```
sequelize init
```

Nota: para corregir la advertencia "please use IANA standard timezone format ('Etc/GTM0')..." se agregó la siguiente configuración a "config.json"

```
# config.json

"dialectOptions": {
  "timezone": "Etc/GMT0"
}
```

- Creación del primer modelo

```
sequelize model:generate --name User --attributes email:string
```

- Ejecutando su migración

```
sequelize db:migrate --env development
```

- Se editó el modelo de usuario

- Se agrega un procedimiento para comprobar la conexión a la db en el index de los modelos

- Generando una semilla para poblar la db con datos de prueba

```
sequelize seed:generate --name demo-user
```

Luego de generada la semilla se lleno con datos de prueba.

- Poblando la db con los datos de prueba

```
sequelize db:seed:all
```

- Borrando las semillas de la db

```
sequelize db:seed:undo:all
```

- Borrando la tabla completa para volverla a crear completamente limpia. Esto no se aplicó porque en este punto la migración no está actualizada, en su lugar se agregó la opción "force: true" al método sync del modelo de usuario

```
sequelize db:migrate:undo:all
sequelize db:migrate --env development
```
