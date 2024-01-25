const express = require("express")
const userController = require("../Controller/User.Controller")
const router = express.Router()

router.get("/", userController.getAll)
router.get("/:id", userController.getById)
router.post("/", userController.post)
router.delete("/:id", userController.delete)

module.exports = router