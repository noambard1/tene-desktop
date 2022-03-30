let Project = require("../models/project.model");

//find all
exports.findAll = (req, res) => {
    Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error:" + err));
}

//add new project
exports.addNewProject = (req, res) => {
    const projectName = req.body.projectName;
    const projectLogo = req.body.projectLogo;
    const projectURL = req.body.projectURL;
    
    const newProject = new Project({projectName, projectLogo, projectURL});

    newProject.save()
    .then(() => res.json("Project added!"))
    .catch(err => res.status(400).json("Error:"+ err));
}

//get a project by id
exports.findProjectByID = (req,res) =>{
    Project.findById(req.params.id)
     .then(projects => res.json(projects))
     .catch(err => res.status(400).json("Error:" + err));
}

//delete a project by id
exports.deleteProjectByID = (req,res) =>{
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("project deleted."))
    .catch(err => res.status(400).json("Error:" + err));
}

//update a project by id
exports.updateProjectByID = (req,res) =>{
    Project.findById(req.params.id)
    .then(project => {
         project.projectName = req.body.projectName;
         project.projectLogo = req.body.projectLogo;
         project.projectURL = req.body.projectURL;

         project.save()
         .then(() => res.json("project updated!"))
         .catch(err => res.status(400).json("Error: "+err));
    })
    .catch(err => res.status(400).json("Error: "+err));
}