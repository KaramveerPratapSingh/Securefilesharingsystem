const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const router = require("./routes/contactRoutes");

const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); //inbuilt middleware 
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
