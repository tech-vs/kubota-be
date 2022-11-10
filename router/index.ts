import { Request, Response, Router } from 'express'
import * as authController from '../controller/auth.controller'
import * as healthController from '../controller/health.controller'
import * as palletController from '../controller/pallet.controller'
import * as jwt from '../middleware/jwt'
/*+++++++++++++++++++++++++++++++++++++++++++++
 Routes
 ++++++++++++++++++++++++++++++++++++++++++++++*/
const router = Router()
router.get('/', (req: Request, res: Response) => {
  res.json({ status: 200, message: 'OK' })
})
router.get('/health', healthController.index)

router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/profile', jwt.verify, authController.profile)
router.get('/user', authController.user)
router.delete('/user', authController.deleteUser)

router.get('/pallet', palletController.pallet)

export default router
