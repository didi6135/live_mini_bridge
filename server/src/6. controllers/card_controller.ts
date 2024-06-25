import express, { Request, Response, NextFunction } from 'express';



const router = express.Router()
// Get all card
router.post('/card/getAllCatd', async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        // res.status(201).json()
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        // res.status(201).json()
    } catch (error) {
        next(error)
    }
})