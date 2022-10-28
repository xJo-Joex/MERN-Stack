import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js"
const app = express();


app.use(indexRoutes);
app.use(tasksRoutes)
app.listen(PORT,()=>{
  console.log(`Escuchando en el puerto ${PORT}`)
})