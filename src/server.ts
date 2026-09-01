import express, { Application } from "express";
import { AppDataSource } from "./config/DataSource";
import UserRoutes from "./routes/User.Routes";
import { errorHanler } from "./middlewares/ErrorHandler";
import CharacterRoutes from "./routes/Character.Routes";
import AuthRoutes from "./routes/Auth.Routes"



const PORT = 3000;
const app: Application = express();

app.use(express.json())

app.use('/api', UserRoutes)
app.use('/api', CharacterRoutes)
app.use('/api', CharacterRoutes)
app.use('/api', AuthRoutes)

app.use(errorHanler)

AppDataSource.initialize()
    .then(() => {
        console.log('RPG turbinado incializando');
        app.listen(PORT, () => {
            console.log(`Servidor RODA EM http://localhost:${PORT}`);
        })
    }).catch((error) => {
        console.log('Bd-RPG nao inicializou kkkk se fodeu', error);

    })

