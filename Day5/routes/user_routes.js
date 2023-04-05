const express = require("express");
const controller = require("../controllers/user_controller");
const router = express.Router();

router.get("/", controller.Get);

router.get("/:id", controller.GetById);

router.post("/", controller.Create);

router.put("/:id", controller.Update);

router.delete("/:id", controller.Delete);

module.exports = router;
