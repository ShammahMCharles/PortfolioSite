//DNS CONNECTION FIX
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

//imports
const contactRoutes = require ("./routes/contactRoutes.js");
const errorHandler = require ("./middleware/errorHandler.js");

const app = express();
const PORT = process.env.PORT || 5000;




app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Portfolio API is running!",
        status: "OK"
    });
});

//API routes
app.use("/api/contacts", contactRoutes);
    
//Error handling middleware
app.use(errorHandler);

//Start server
app.listen(PORT, () => {
  console.log(`Server is listening @  http://localhost:${PORT}`);
});



    
    