import express, { Request, Response, NextFunction } from 'express';
import { AddPlayer, get_all_players } from '../5. logics/user_logic';



const router = express.Router()
// Register
router.post('/addNewPlayer', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.body as string
        if(name){
            const createPlayer = AddPlayer(name['userName'])
            res.status(201).json(createPlayer)

        } else {
            res.status(404)
        }

    } catch (error) {
        next(error)
    }
})


// Get all users
router.get('/getAllPlayers', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allPlayers = get_all_players()
        res.status(201).json(allPlayers)


    } catch (error) {
        next(error)
    }
})

export default router