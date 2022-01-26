const { Router } = require("express");
const { getAll, getOne } = require("./controller");

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);

module.exports = router;
