import express from "express";
import generalRoutes from "./routes/general.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("/books", generalRoutes);
app.use("/user", authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));