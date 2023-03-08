require('dotenv').config();
global.__basedir = __dirname;
const { connectDB } = require('./src/config/db');
const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require('./src/routes/userRoute');
const emailRouter = require('./src/routes/emailRoute');
const filesRouter  =require('./src/routes/filesRoute');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
connectDB();

// app.use('/api/user', userRouter);
app.use('/api/email', emailRouter);
app.use('/api/files',filesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// const router = express.Router();
// const controller = require("./src/controller/file.controller");

// let routes = (app) => {
//   router.post("/upload", controller.upload);
//   router.get("/files", controller.getListFiles);
//   router.get("/files/:name", controller.download);
//   router.delete("/files/:name", controller.remove);

//   app.use(router);
// };

// module.exports = routes;
