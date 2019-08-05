// REQUIREMENTS
const express    = require("express");
      
// APP CONFIGURATION
const app        = express();

// ROUTES CONFIGURATION
const bookRoutes = require("./routes/books");

app.use("/", bookRoutes);



app.listen(3000, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Listen on port 3000");
    }
})