import Fastify from 'fastify'
import cors from "@fastify/cors"
import  userRoutes  from './routes/userRoutes.js'
import formBody from "@fastify/formbody"

const fastify = Fastify({
  logger: true,
})

//Para registrar algo con fastify usar (fastify.register), register equivale en express a (USE).

// Aca registro el cors con fastify y le mando opciones, siempre usando llaves {} si uso JavaScript, TypeScript siempre con llaves el objeto {}. 

fastify.register(cors, {origin:"*"})

fastify.register(formBody);

// Rutas

// Prefix para la ruta.

fastify.register(userRoutes,{prefix: "/usuarios" })

const start = async () => {
    try {
      await fastify.listen({ port: 4000,
      host: "0.0.0.0" })
      console.log("Escuchando por el puerto 4000");
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start();

//Para ejecutar debemos decirle a node.js que utilice el import y export con un "type" : module , en el package.json debajo de main.

//Crear script para que se ejecute cada que haya un cambio en el codigo script ("dev" : "nodemon src/index.js") tambien usar el start ("start": "node src/index.js").

// Pasado a Fastify Terminado :)