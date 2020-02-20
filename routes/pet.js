const express = require('express');

const router = express.Router();

const PetController = require("../controllers/petController");

router.get('/',PetController.index);
router.get('/add/:nome',PetController.add);
router.get('/buscar/:nome',PetController.buscar)


module.exports = router;