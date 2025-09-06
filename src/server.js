const express = require("express");
const mongoose = require("mongoose");
const connectedDB = require("./config/dbConnect");

const dotenv = require("dotenv");
const useRouter = require("./routes/userRoutes");
const userRouter = require("./routes/userRoutes");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/users", userRouter);

const startServer = async () => {
  await connectedDB();
  app.listen(PORT, () =>
    console.log(`server runing on http://localhost:${PORT}`)
  );
};

startServer();
