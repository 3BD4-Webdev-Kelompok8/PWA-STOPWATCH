const express = require("express");
const historyController = require("../controller/history")

const router = express.Router();


//Read
//Read history by id
router.get('/getHistory/:id', historyController.getHistory)
//Read all history
router.get('/getAllHistory/', historyController.getAllHistory)

//Delete
//Delete history by id
router.delete('/deleteHistoryByID/:id', historyController.deleteHistoryByID)
//Delete all history
router.delete('/deleteAllHistory/', historyController.deleteAllHistory)

//export module
module.exports = router