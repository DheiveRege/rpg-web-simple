import express, { Application } from "express";
import { AppDataSource } from "./config/DataSource";
import userRoutes from "./routes/UserRoutes"
import { errorHanler } from "./middlewares/ErrorHandler";


const PORT = 3000;
const app: Application = express();

app.use('/api', userRoutes)

app.use(errorHanler)

app.use(express.json())

AppDataSource.initialize()
    .then(() => {
        console.log('RPG turbinado incializando');
        app.listen(PORT, () => {
            console.log(`Servidor RODA EM http://localhost:${PORT}`);
        })
    }).catch(() => {
        console.log('Bd-RPG nao inicializou kkkk se fodeu');

    })