const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {
     type: String,
     required: true,
     unique: true
    },
    projectLogo: {
        type: String,
        required: true,
        unique:true
    },
    projectURL: {
        type: String,
        required: true,
        unique:true
    }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;