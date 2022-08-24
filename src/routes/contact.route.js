const express = require('express');
const urlRoutes = express.Router();

const contactController = require('../controllers/contact.controller')

urlRoutes.post('/', contactController.createContact);
urlRoutes.get('/', contactController.listContact);
urlRoutes.get('/:id', contactController.findContact);
urlRoutes.put('/:id', contactController.updateContact);
urlRoutes.delete('/:id', contactController.deleteContact);

module.exports = urlRoutes;