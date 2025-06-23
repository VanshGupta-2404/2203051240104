const express = require("express");
const connectDB = require("./config/db");
const logger = require("./middleware/logger");
const shorturlRoutes = require("./routes/shorturl");

const app = express();
connectDB();

app.use(express.json());
app.use(logger);
app.use("/", shorturlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
