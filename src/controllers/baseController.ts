import { Request, Response } from 'express';

export class baseController {
    async index(req: Request, res: Response): Promise<void> {
        res.json({ message: 'Index method called' });
    }

}
