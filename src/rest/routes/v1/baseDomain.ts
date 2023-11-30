import { Router } from 'express';
import { baseController as Controller } from '../../../controllers/baseController';

export const router = Router();
const controller = new Controller();

router.route('/')
  .get(controller.index);
