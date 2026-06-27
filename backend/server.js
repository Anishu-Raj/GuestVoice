import express from "express";
import cors from "cors";

import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/reviews", reviewRoutes);

app.listen(5000, () => {

    console.log("Server Running");

});