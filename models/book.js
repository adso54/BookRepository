const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        require: true,
        maxlength: 200
    },
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
    description: {
        type: String,
        trim: true
    }
})


module.exports = mongoose.model("Book", bookSchema);
      