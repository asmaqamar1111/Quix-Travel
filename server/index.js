import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import bodyParser from "body-parser";
import connnectDB from "./database/db.js";
import authRoutes from "./router/authRoute.js";
import categoryRoutes from "./router/catagoryRoutes.js";
import productRoutes from "./router/productRoutes.js";
import checkFormRoutes from "./router/checkFormRoutes.js";
import cors from "cors";

// configure env
dotenv.config();

//rest object
const app = express();

//body parser
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//database config
connnectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/checkForm", checkFormRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome to baroque </h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`.bgCyan.black);
});
