const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema( 
    {
        title: {
            type: String,
            required: true,
        }, 
        status: {
            type: String,
            required: true,
            enum: ["Pending", "In Progress", "Done"],
            default: "Pending",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },

    { timestamps: true},
)

module.exports = mongoose.model("Task", taskSchema);