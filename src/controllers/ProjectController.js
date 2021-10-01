const router = require('express').Router();
const Project = require('../models/ProjectModel');

// GET projects/
router.route('/').get((req, res) => {
    Project.find()
        .then(allProjects => res.json(allProjects))
        .catch(err => res.status(400).json('Error! ' + err))
});

// NEW project
router.route('/new').post((req, res) => {
    const newProject = new Project(req.body)
    newProject.save()
        .then(project => res.json(project))
        .catch(err => res.status(400).json("Error! " + err))
        console.log(req.body)
});

// DELETE project
router.route('/delete/:id').delete((req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! Project deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
});

// UPDATE project
router.route('/update/:id').put((req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(success => res.json('Success! Project updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router