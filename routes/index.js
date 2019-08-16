const express = require("express"),
      router  = express.Router({mergeParams: true});

router.get("/", (req, res) => {
    res.redirect("/books/index")
})

module.exports = router;