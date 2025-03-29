Migración de SQL Server a MongoDB con Node.js

Este proyecto permite migrar datos desde una base de datos en SQL Server a MongoDB mediante una API creada con Node.js, Express, mssql y mongodb. El proceso se activa desde un frontend simple con un botón.

🚀 Tecnologías Usadas

Node.js (Backend)

Express.js (Framework para Node.js)

mssql (Conexión con SQL Server)

mongodb (Conexión con MongoDB)

cors (Permitir peticiones del frontend al backend)

dotenv (Manejo de variables de entorno)

📌 Instalación y Configuración

1️⃣ Clonar el Repositorio

    git clone <URL_DEL_REPO>
    cd <NOMBRE_DEL_REPO>

2️⃣ Instalar Dependencias

    npm install

3️⃣ Configurar Variables de Entorno

Crear un archivo .env en la raiz del proyecto con el siguiente contenido:

# Configuración de SQL Server
SQL_SERVER=localhost
SQL_USER=tu_usuario
SQL_PASSWORD=tu_contraseña
SQL_DATABASE=nombre_de_tu_base_sql

# Configuración de MongoDB
MONGO_URI=mongodb://localhost:27017
MONGO_DATABASE=nombre_de_tu_base_mongo

# Puerto del Servidor
PORT=3000

🔧 Uso del Proyecto

1️⃣ Ejecutar el Backend

    node index.js

Si deseas reinicio automático al hacer cambios, usa:

    npm install -g nodemon
    nodemon index.js

2️⃣ Ejecutar el Frontend

Solo abre el archivo index.html en el navegador y haz clic en el botón "Migrar Datos".

📜 Explicación del Código

Backend (index.js)

Carga las variables de entorno con dotenv.

Configura Express y habilita cors.

Define la conexión a SQL Server.

Define la conexión a MongoDB.

Crea un endpoint POST /migrar que:

Obtiene los datos de SQL Server.

Inserta los datos en MongoDB.

Inicia el servidor en el puerto 3000.

Frontend (index.html)

Contiene un botón que llama al endpoint http://localhost:3000/migrar para iniciar la migración.

🛠️ Posibles Errores y Soluciones

1️⃣ Error de conexión a SQL Server

Asegúrate de que el servidor de SQL Server está corriendo.

Si usas una instancia, cambia SQL_SERVER=localhost por SQL_SERVER=localhost\NOMBRE_DE_LA_INSTANCIA.

Si está en otro servidor, usa la IP en SQL_SERVER.

2️⃣ Error de conexión a MongoDB

Asegúrate de que MongoDB está corriendo (mongod).

Si usas MongoDB Atlas, reemplaza MONGO_URI por la URL de conexión en la nube.

3️⃣ Error trustServerCertificate

Si SQL Server no permite la conexión, edita sqlConfig y cambia trustServerCertificate: true.

📌 Mejoras Futuras

Crear una interfaz más elaborada con React o Angular.

Agregar logs para verificar el proceso de migración.

Optimizar la migración para tablas grandes usando paginación.

