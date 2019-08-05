// REQUIREMENTS
const express    = require("express");
      
// APP CONFIGURATION
const app        = express();

// ROUTES CONFIGURATION
const bookRoutes = require("./routes/books");

app.use("/", bookRoutes);


// APP LISTENING CONFIG
const IP    = process.env.IP,
      PORT  = process.env.PORT || 3000;

app.listen(PORT, IP, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Application working!");
    }
})