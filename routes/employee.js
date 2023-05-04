const express = require('express')
const router = express.Router()
const Employee = require('../models/employee_model')

router.get('/', async (req, res) => {
    try {
        const emp = await Employee.find()
        res.json(emp)
    } catch (err) {
        console.log(err);
    }
})
router.get('/:id', async (req, res) => {
    try {
        const empid = await Employee.findById(req.params.id)
        res.json(empid)
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    const empp = new Employee({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        salary: req.body.salary,
        dateOfJoining: req.body.dateOfJoining
    })

    try {
        const a1 = await empp.save()
        res.json(a1)
    } catch (err) {
        console.log(err);
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const emp = await Employee.findById(req.params.id)
        emp.firstName = req.body.firstName
        emp.lastName = req.body.lastName
        emp.salary = req.body.salary
        emp.email = req.body.email
        emp.dateOfJoining = req.body.dateOfJoining
        const a2 = await emp.save()
        res.json(a2)
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const emp = await Employee.findById(req.params.id)
        const a2 = await emp.deleteOne()
        res.json(a2)
    } catch (err) {
        console.log(err);
    }
})
module.exports = router