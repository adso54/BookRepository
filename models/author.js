const mongoose = require("mongoose");


const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 200
    }
})


module.exports = mongoose.model("Author", authorSchema);