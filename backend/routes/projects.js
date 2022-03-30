const router = require("express").Router();
const {findAll, addNewProject, findProjectByID, deleteProjectByID, updateProjectByID} = require("../controllers/projects")

//find all
router.get('/findAll', findAll)
//add new project
router.post('/add', addNewProject)
//get a project by id
router.get('/find/:id', findProjectByID)
//delete a project by id
router.get('/delete/:id', deleteProjectByID)
//update a project by id
router.get('/update/:id', updateProjectByID)

module.exports = router;