import { Router } from 'express';
import { UserController } from '../../../controllers/user-controller';

export const router = Router();
const controller = new UserController();

router.route('/')
  .get(controller.index);

router.route('/:id')
  .get(controller.show);

router.route('/')
  .post(controller.create);

router.route('/:id')
  .put(controller.update);

  router.route('/')
  .delete(controller.delete);
