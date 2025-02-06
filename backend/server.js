import dotenv from "dotenv";
import express from "express";
import cors from "cors"; //access for front end
import sequelize from "./config/database.js";
import User from "./models/user.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    return res.sendStatus(204); // ✅ Respond to preflight requests
  }
  next();
});

app.use(express.json());

app.use("/api/users", authRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("succesful sync with supabase");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err, "unable to connect");
  });

export default app;
