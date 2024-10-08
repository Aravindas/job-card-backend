import { Router } from 'express';
import { login, register, verifyToken } from '../controllers/AuthController'

const router = Router();

router.post('/login',login)
router.post('/register',register)
router.get('/verify-token',verifyToken)


export default router;