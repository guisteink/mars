import { Router } from 'express';
import { router as championship } from './baseDomain';

export const router = Router();

router.use('/base', championship);
