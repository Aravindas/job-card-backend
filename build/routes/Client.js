"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = require("../controllers/ClientController");
const router = (0, express_1.Router)();
router.post('/addClient', ClientController_1.addClient);
router.post('/getClient', ClientController_1.getClient);
router.post('/getAllClient', ClientController_1.getAllClient);
router.post('/editClient', ClientController_1.updateClient);
router.post('/removeClient', ClientController_1.removeClient);
exports.default = router;
