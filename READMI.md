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

