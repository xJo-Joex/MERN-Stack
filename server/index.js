import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import {dirname, join} from "path"
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.json());
app.use(cors());

app.use(indexRoutes);
app.use(tasksRoutes);
app.use(express.static(join(__dirname,"../client/dist")))
app.listen(PORT, () => {
	console.log(`Escuchando en el puerto ${PORT}`);
});
