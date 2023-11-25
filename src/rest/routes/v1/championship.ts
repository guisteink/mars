import { Router } from 'express';
import { ChampionshipController as Controller } from '../../../controllers/championshipController';

export const router = Router();
const controller = new Controller();

router.route('/')
  .get(controller.index);

  router.route('/possibilities')
  .get(controller.possibilities);