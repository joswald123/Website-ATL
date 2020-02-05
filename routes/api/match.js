const router = require('express').Router();
const matchController = require("../../controllers/match.controller")


router.route("/")
    .get(matchController.findAll)
    .post(matchController.create);

// api/match/:id
router.route("/:id")

    .get(matchController.findById)
    .put(matchController.update)
    .delete(matchController.remove);


module.exports = router;