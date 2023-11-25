import { Router } from 'express';
import { router as championship } from './championship';

export const router = Router();

router.use('/championship', championship);