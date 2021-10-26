const express = require("express");
const stopwatchController = require("../controller/stopwatch")

const router = express.Router();


//create
//create stopwatch
router.post('/createStopwatch', stopwatchController.createStopwatch)

//read
//read stopwatch by id
router.get('/getStopwatch/:id', stopwatchController.getStopwatch)
//read stopwatch by timestamp 
router.get('/getStopwatchTimestamp/:id', stopwatchController.getStopwatchTimestamp)
//read stopwatch by Status
router.get('/getStopwatch/:id', stopwatchController.getStopwatchStatus)
//read stopwatch by Name
router.get('/getStopwatchName/:id', stopwatchController.getStopwatchName)
//read stopwatch by ID 
router.get('/getRunningStopwatchID', stopwatchController.getRunningStopwatchID)
//read all stopwatch
router.get('/getAllStopwatch', stopwatchController.getAllStopwatch)

//update
//update stopwatch Timestamp by id
router.put('/updateStopwatchTimestamp/:id', stopwatchController.updateStopwatchTimestamp)
//update stopwatch LastTimestamp by id
router.put('/updateStopwatchLastTimestamp/:id', stopwatchController.updateStopwatchLastTimestamp)
//update stopwatch Name by id
router.put('/updateStopwatchName/:id', stopwatchController.updateStopwatchName)
//update stopwatch by Status id
router.put('/updateStopwatchStatus/:id', stopwatchController.updateStopwatchStatus)


//delete
//delete stopwatch by id
router.delete('/deleteStopwatchByID/:id', stopwatchController.deleteStopwatchByID)

//export module
module.exports = router