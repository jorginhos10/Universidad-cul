# Sistema CRUD de Tareas

## Descripción del Proyecto

Este proyecto es un sistema CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de tareas. Permite a los usuarios registrar nuevas cuentas, iniciar sesión y gestionar sus tareas personales mediante una interfaz intuitiva. La aplicación está construida utilizando Angular para el frontend y NestJS para el backend, garantizando una experiencia de usuario fluida y una gestión eficiente de los datos.

## Características Principales

- **Registro de Usuario**: Permite a los usuarios crear una cuenta proporcionando información básica como nombre, correo electrónico y contraseña.
- **Inicio de Sesión**: Los usuarios pueden acceder a su cuenta utilizando sus credenciales para gestionar sus tareas.
- **Crear Tarea**: Los usuarios pueden añadir nuevas tareas especificando detalles como título, descripción y fecha de vencimiento.
- **Leer Tarea**: Los usuarios pueden visualizar todas sus tareas y ver detalles específicos de cada una.
- **Actualizar Tarea**: Los usuarios pueden modificar tareas existentes, actualizando información como estado, descripción y fecha de vencimiento.
- **Eliminar Tarea**: Los usuarios pueden eliminar tareas que ya no sean necesarias o que han sido completadas.

## Tecnologías Utilizadas

- **Angular**: Framework frontend para construir una interfaz de usuario dinámica y responsiva.
- **NestJS**: Framework backend para construir una API escalable y mantenible, utilizando TypeScript.
- **PostgreSQL**: Base de datos relacional para almacenar la información de tareas y usuarios.
- **JWT (JSON Web Tokens)**: Utilizado para la autenticación y autorización de usuarios, asegurando el acceso a funcionalidades protegidas.

## Requisitos Previos

- Tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en el equipo.
- Tener [PostgreSQL](https://www.postgresql.org/) instalado y en funcionamiento.
- Tener configurado un entorno de desarrollo para Angular y NestJS (visual studio code).

### Instalación de Node.js

1. **Windows / macOS / Linux**

   - Descarga el instalador desde [la página oficial de Node.js](https://nodejs.org/).
   - Ejecuta el instalador y sigue las instrucciones en pantalla para completar la instalación.

2. **Verificar la Instalación**

   - Abre una terminal o línea de comandos y ejecuta:
     ```bash
     node -v
     npm -v
     ```
   - Deberías ver la versión instalada de Node.js y npm.

### Instalación de Angular CLI

1. **Instalación Global**

   - Abre una terminal o línea de comandos y ejecuta:
     ```bash
     npm install -g @angular/cli
     ```

2. **Verificar la Instalación**

   - Ejecuta:
     ```bash
     ng version
     ```
   - Deberías ver la versión de Angular CLI instalada.

### Instalación de PostgreSQL

1. **Windows**

   - Descarga el instalador desde [la página oficial de PostgreSQL](https://www.postgresql.org/download/windows/).
   - Ejecuta el instalador y sigue las instrucciones en pantalla para completar la instalación.

2. **macOS**

   - Puedes instalar PostgreSQL usando Homebrew:
     ```bash
     brew install postgresql
     ```
   - Luego inicia el servicio:
     ```bash
     brew services start postgresql
     ```

3. **Linux**

   - En distribuciones basadas en Debian (Ubuntu, etc.):
     ```bash
     sudo apt update
     sudo apt install postgresql postgresql-contrib
     ```
   - En distribuciones basadas en Red Hat (Fedora, CentOS, etc.):
     ```bash
     sudo dnf install postgresql-server postgresql-contrib
     ```

4. **Verificar la Instalación**

   - Ejecuta:
     ```bash
     psql --version
     ```
   - Deberías ver la versión de PostgreSQL instalada.


## Cómo Ejecutar el Proyecto

1. **Configurar la Base de Datos**

   Antes de ejecutar el proyecto, debes crear una base de datos en PostgreSQL con los siguientes detalles:

   - **Dialect**: `postgres`
   - **Database**: `dbuser`
   - **Username**: `postgres`
   - **Password**: `password`
   - **Host**: `localhost`
   - **Port**: `5432`

2. **Clonar el Repositorio**

   Descarga las carpetas `frontend` y `backend` desde el repositorio de GitHub.

3. **Abrir el Proyecto en Visual Studio Code**

   - Abre dos ventanas independientes de Visual Studio Code.
   - En una ventana, abre la carpeta `frontend`.
   - En la otra ventana, abre la carpeta `backend`.

4. **Ejecutar el Frontend**

   - En la ventana de Visual Studio Code con la carpeta `frontend` abierta, abre una terminal.
   - Ejecuta el servidor local con el siguiente comando:
     ```bash
     ng serve -o
     ```
   - Esto iniciará el servidor de desarrollo de Angular y abrirá la aplicación en tu navegador predeterminado.

5. **Ejecutar el Backend**

   - En la ventana de Visual Studio Code con la carpeta `backend` abierta, abre una terminal.
   - Ejecuta el servidor local con el siguiente comando:
     ```bash
     npm run start:dev
     ```
   - Esto iniciará el servidor de desarrollo de NestJS.

6. **Uso del Proyecto**

   - Una vez que ambos servidores estén en funcionamiento, abre tu navegador y navega a `http://localhost:4200`.
   - Regístrate en la aplicación proporcionando los datos requeridos.
   - Inicia sesión con tus credenciales para acceder a las funcionalidades de gestión de tareas.

   **Vista Principal y Gestión de Tareas**

   - Después de iniciar sesión, te encontrarás en la vista principal de la aplicación. Allí verás un icono de "+" que te permite agregar una nueva tarea.
   - Para crear una tarea, haz clic en el icono de "+", y se abrirá un formulario donde podrás rellenar el título, la descripción y la fecha de vencimiento de la tarea.
   - Una vez creada, la tarea se mostrará en la vista principal como una tarjeta. Las tarjetas de tarea tienen las siguientes características:
     - **Estados**: Puedes manipular los estados de la tarea, que son: "En proceso", "Pendiente" y "Completado". El estado se puede cambiar dependiendo del estado actual de la tarea.
     - **Edición**: En la parte superior derecha de cada tarjeta, hay un ícono de tres puntos. Al hacer clic en él, se abrirá un menú con la opción de eliminar la tarea.
     - **Guardar Automático**: La tarea se guarda automáticamente al crearla y es legible inmediatamente en la vista principal.
     - **Editar**: La opción para editar la tarea está disponible justo encima del estado de la tarea.


** APLICATIVO CREADO POR JORGE ALBEIRO VALENCIA BOLIVAR C.C 1045727715**