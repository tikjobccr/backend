const { Router } = require('express')
const multer = require('multer');

const uploadConfig = require('./config/upload');
const UserController = require('./controllers/UserController');

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/candidate', UserController.index);
routes.post('/uploadfile', upload.array('videos'), UserController.create);
routes.put('/candidate/:id', UserController.update);
routes.delete('/candidate/:id', UserController.delete);

module.exports = routes;