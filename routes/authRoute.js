<<<<<<< HEAD
import express from "express";
import { registerController, loginController, testController } from '../controllers/authController.js'
import { isAdmin, requireSignIN } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);


//LOGIN || POST
router.post('/login', loginController);

//test routes
router.get('/test', requireSignIN, isAdmin, testController)
export default router;
=======
import express from "express";
import { registerController, loginController, testController } from '../controllers/authController.js'
import { isAdmin, requireSignIN } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);


//LOGIN || POST
router.post('/login', loginController);

//test routes
router.get('/test', requireSignIN, isAdmin, testController)
export default router;
>>>>>>> origin/main
