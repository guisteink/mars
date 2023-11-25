import { Request, Response } from 'express';

export class ChampionshipController {
    async index(req: Request, res: Response): Promise<void> {
        res.json({ message: 'Index method called' });
    }
    
    async possibilities(req: Request, res: Response): Promise<void> {
        res.json({ message: 'Possibilities method called' });
    }
}