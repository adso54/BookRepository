const express = require("express"),
      router  = express.Router({mergeParams: true});


router.get("/index", (req, res)=>{
    res.send("Working!");
})

module.exports = router; 
