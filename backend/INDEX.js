import express from "express";
import db from "./config/database.js";
import cors from "cors";
import noteRoutes from "./routes/index.js";

const app = express();

try {
    await db.authenticate();
    console.log("Databases connected...");
}
catch (error) {
    console.log("Connection Error:", error);
}

 
app.use(cors()); // Enable CORS (origin) for all routes
app.use(express.json()); // Parse incoming JSON requests
app.use('/notes', noteRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));