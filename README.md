Gestión de Tareas con Node.js y SQLite

Esta es una aplicación web simple para gestionar tareas. Permite agregar, listar y eliminar tareas utilizando un frontend básico en HTML, CSS y JavaScript, y un backend en Node.js con SQLite para la persistencia de datos.

Requisitos
Asegúrate de tener instalado lo siguiente antes de comenzar:

 - Node.js (versión 14 o superior)
 - Git
Instalación
Clona este repositorio en tu máquina local:

git clone https://github.com/tu-usuario/SQLite-con-Nodejs.git

cd carpetadeinstalación

Instala las dependencias del proyecto:
npm install

Configura la base de datos SQLite: El archivo server.js crea automáticamente un archivo database.db con la tabla necesaria al iniciar el servidor.

Ejecución
Backend
Ejecuta el servidor con Node.js:

node server.js
El servidor estará disponible en http://localhost:3000.

Frontend
Una vez que el servidor esté corriendo, abre tu navegador y visita: http://localhost:3000.

Desde esta interfaz, puedes agregar, listar y eliminar tareas.

Estructura del Proyecto

/project

├── index.html         # Archivo principal del frontend

├── styles.css         # Estilos para la interfaz de usuario

├── app.js             # Lógica del frontend

├── server.js          # Servidor Node.js y configuración de la base de datos

├── database.db        # Base de datos SQLite (generada automáticamente)

├── package.json       # Configuración del proyecto Node.js

Características
- Agregar tareas: Escribe una tarea en el campo de texto y haz clic en "Agregar Tarea".
- Listar tareas: Las tareas almacenadas se muestran en una lista dinámica.
- Eliminar tareas: Haz clic en "Eliminar" para borrar una tarea de la lista y de la base de datos.

Notas
Si experimentas problemas con los permisos o el archivo database.db, asegúrate de que el directorio tenga permisos de escritura.

