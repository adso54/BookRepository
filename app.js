// REQUIREMENTS
const express    = require("express"),
      mongoose   = require("mongoose");

      
      require("dotenv").config();
// APP CONFIGURATION
const app        = express();
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});

// ROUTES CONFIGURATION
const bookRoutes  = require("./routes/books");
const indexRoutes = require("./routes/index")

// ROUTES 
app.use("/books", bookRoutes);
app.use(indexRoutes);


// APP LISTENING CONFIG
const IP    = process.env.IP,
      PORT  = process.env.PORT ;

app.listen(PORT, IP, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Application working!");
    }
})