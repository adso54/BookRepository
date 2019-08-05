const express = require("express"),
      router  = express.Router({mergeParams: true});


router.get("/", (req, res)=>{
    res.send("Working!");
})

module.exports = router; 
