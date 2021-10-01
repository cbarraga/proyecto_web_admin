// user controller
const User = require('../models/UserModel')
const router = require('express').Router()

// NEW user
router.route('/new').post((req, res) => {
    const newUser = new User(req.body)
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error! " + err))
        console.log(req.body)
});

// GET ALL users
router.route('/').get((req, res) => {
    // using .find() without a paramter will match on all user instances
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('Error! ' + err))
});

// DELETE user
router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
});

// UPDATE user
router.route('/update/:id').put((req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(success => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router