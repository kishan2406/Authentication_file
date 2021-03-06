
const mongoose = require("mongoose");

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
    title: {type: String, required: true},
    price: {type: String, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
},{
    versionkey: false,
    timestamps: true,
},
);