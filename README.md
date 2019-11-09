# authsession-express-sequelize

Autenticación y manejo de sesiones para express con express-session, passport y sequelize.

Soporta:

- Registro de usuario
- Inicio de sesión
- Cierre de sesión
- Rutas protegidas (solo usuarios registrados y habilitados)
- Inhabilitar inicio de sesión para un usuario en particular
- Opción para recordar la sesión (alarga el tiempo de vida de la cookie de sesión)

No posee vistas fuera de la caja. Las vistas deben crearse a parte o utilizar algún software como Postman.

## Implementación

1. Instalar las dependencias:

```
$ yarn install
```

2. Crear la base de datos.

Ejemplo para la configuración por defecto (development):

```
# Crear la base de datos "dev"
mysql> CREATE DATABASE `dev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

# Crear el usuario "dev@localhost" con password "dev"
mysql> CREATE USER dev@localhost IDENTIFIED BY 'dev';

# Asignar permisos a la base de datos "dev" para el usuario "dev@localhost"
mysql> GRANT ALL PRIVILEGES ON dev.* TO dev@localhost;
mysql> FLUSH PRIVILEGES;
```

3. Definir las siguientes variables de entorno (opcional, por defecto usa estos mismos valores):

```
# Enviroment: development | test | production
NODE_ENV=development

# Server port number
PORT=3000

# Session encryption secret
SECRET=secret

# Number of rounds for Blowfish algorithm for hashing user password
BCRYPT_ROUNDS=10
```

4. Ejecutar la aplicación:

```
$ yarn start
```

Al ejecutar por primera vez se crearán automáticamente las tablas necesarias.

El archivo "./db/config.js". Contiene la configuración de sequelize (credenciales de la db, etc.)

En producción utiliza las siguientes variables de entorno:

```
# Database
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_HOSTNAME=
```
