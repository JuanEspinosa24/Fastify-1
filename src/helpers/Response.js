export const response=(reply,statusCode,ok,data,message)=>{
    reply.code(statusCode).send({
ok,
data,
message,
});
};

// En fastify se usa request igual a express, response cambia a (reply).en ves de res = reply, tambien cambia en ves de .status a (.code) y en ves de .json (.send).
