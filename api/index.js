import "dotenv/config";
import express from "express";
import { setupSwagger } from "./config/swagger.js";
import teamRoutes from "./routes/team.routes.js";
import teamRoutesBonus from "./routes/team.routesV2.js";
import pokemonRoutes from "./routes/pokemon.routes.js";
import typeRoutes from "./routes/type.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { authenticate } from "./middlewares/auth.middleware.js";
import { bodySanitizer } from "./middlewares/body-sanitizer.middleware.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

setupSwagger(app)

app.use(bodySanitizer)

app.use("/auth/", authRoutes); 

app.use(authenticate)

app.use("/teams", teamRoutes); 
// Ici "teamsv2" afin de pouvoir visualiser les anciennes routes avant bonus (qui seraient supprimées en situation réelle bien entendu)
app.use("/teamsv2", teamRoutesBonus); 

app.use("/pokemons", pokemonRoutes); 
app.use("/types", typeRoutes); 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})