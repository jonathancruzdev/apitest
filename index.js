import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";


const PORT = 5000;
const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use( express.static('public') );
app.use( cors());
app.get('/', (req, res) => {
    res.send('<h1> API </h2>');
})

// Cuando tenemos una conexión
io.on('connection', (client ) => {
    console.log('Cliente conectado', client .id);
    // Si existe un error
    io.on('error', console.error);

    // Recibimos mensajes
    client.on('msg', (data) => {
        console.log('Mensaje del Cliente', data);

        let dato = crypto.randomUUID();
        io.emit('res', dato);
    })

    // Cerramos la conexion
    client.on('disconnect', () => {
        console.log('Cliente desconectado', client .id);
    })

})

server.listen( PORT, () =>{ console.info(`Servidor en el puerto ${PORT}`)} );