import userCtrl from "../controllers/userController.js";

const userRoutes= (fastify,opts,done)=>{

    fastify.get("/", userCtrl.getData)
    fastify.get("/:id", userCtrl.getDataByid)

    fastify.post("/", userCtrl.saveData)
    fastify.put("/:id", userCtrl.actualizar)
    fastify.delete("/:id", userCtrl.eliminar)

        done()
        //Usar done para continuar.
}

// En fastify next vendria a ser (done).

// Para las rutas en ves de Route es (fastify).

export default userRoutes;

// Debemos al finalizar exportarlo arriba o abajo, export default. o arriba export const.