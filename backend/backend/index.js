const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectionofDb = require("./config/connect.js");
const path = require("path");

const app = express();



//////connection to DB/////////////////
connectionofDb();

///////////////port number///////////////////
const PORT = process.env.PORT || 8001;

/////////////////middlewares////////////////
app.use(express.json());
app.use(cors());

/////////////////routes/////////////////////
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/user', require('./routes/userRoutes.js'))
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/owner', require('./routes/ownerRoutes'))



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});