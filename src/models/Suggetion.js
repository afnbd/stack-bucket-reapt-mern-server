const {Schema, model} = require("mongoose");

const suggetionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 0,
    }
});

const suggetion = model('suggetion', suggetionSchema);
module.exports = suggetion;