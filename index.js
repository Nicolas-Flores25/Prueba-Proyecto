require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Configuración de SQL Server
const sqlConfig = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    server: process.env.SQL_SERVER,
    options: {
        encrypt: false,  // Cambia a true si usas Azure
        trustServerCertificate: true // Necesario para conexiones locales
    }
};

// Ruta para migrar datos de SQL Server a MongoDB
app.post('/migrar', async (req, res) => {
    try {
        // Conectar a SQL Server
        await sql.connect(sqlConfig);
        const result = await sql.query('SELECT * FROM Usuarios');

        // Conectar a MongoDB
        const mongoClient = new MongoClient(process.env.MONGO_URI);
        await mongoClient.connect();
        const db = mongoClient.db(process.env.MONGO_DATABASE);
        const collection = db.collection('usuarios');

        // Insertar datos en MongoDB
        await collection.insertMany(result.recordset);

        res.json({ message: 'Migración completada' });

        // Cerrar conexiones
        await sql.close();
        await mongoClient.close();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});