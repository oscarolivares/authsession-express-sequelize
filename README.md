# authsession-express-sequelize

**Autenticación y manejo de sesiones para express con express-session, passport y sequelize.**

Soporta:

- Registro de usuario
- Inicio de sesión
- Cierre de sesión
- Rutas protegidas (solo usuarios registrados y habilitados)
- Inhabilitar inicio de sesión para un usuario en particular
- Opción para recordar la sesión (alarga el tiempo de vida de la cookie de sesión)

_No posee vistas fuera de la caja. Las vistas deben crearse a parte o utilizar algún software como Postman._

## Implementación

1. Instalar las dependencias:

```
$ yarn install
```

2. Crear la base de datos.

Creación de ejemplo en el entorno por defecto (development):

```
# Crear la base de datos "dev"
mysql> CREATE DATABASE `dev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

# Crear el usuario "dev@localhost" con password "dev"
mysql> CREATE USER dev@localhost IDENTIFIED BY 'dev';

# Asignar permisos a la base de datos "dev" para el usuario "dev@localhost"
mysql> GRANT ALL PRIVILEGES ON dev.* TO dev@localhost;
mysql> FLUSH PRIVILEGES;
```

3. Ejecutar la aplicación:

```
$ yarn start
```

_Al ejecutar por primera vez se crearán automáticamente las tablas necesarias._

## Configuración

- Variables globales (por defecto usa los valores indicados a continuación):

```
# Definir el entorno, posibles valores: development | test | production
NODE_ENV=development

# Puerto de escucha
PORT=3000

# Secreto para encriptar las sesiones
SECRET=secret

# Número de rondas que usará el algoritmo Blowfish para crear el hash de la contraseña
BCRYPT_ROUNDS=10
```

Las siguientes opciones de configuración se pueden definir por medio de variables de entorno o directamente en los archivos de configuración dentro de la carpeta "config" (por defecto usa los valores indicados)

- Configuraciones relativas a la autenticación y sesiones

```
# Duración máxima de la cookie de sessión. Aplica cuando remember=true en el request de inicio de sesión, si remember=false la sesión expirará al cerrar el navegador
COOKIE_MAX_DAYS=30

# Nivel de seguridad de contraseña permitido, posibles valores: strong | regular | weak
PASSWORD_RESTRICTION=strong
```

- Configuraciones relativas a la db en modo de producción (NODE_ENV=production)

```
# Database
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_HOSTNAME=
```

_Para otras configuraciones de la db se edita manualmente el archivo "db.config.js" de la carpeta "config"_
