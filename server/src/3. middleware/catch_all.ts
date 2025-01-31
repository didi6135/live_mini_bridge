import {NextFunction, Response, Request} from 'express'
import { logger } from '../2. utils/logger'



export const catchAll = (err: any, req: Request, res: Response, next: NextFunction) => {
// log the error on the console
    console.log(err)

    // Log the error to an error log file
    logger(err.message)

    // Send back the error to the front
    res.status(err.status || 500).send(err.message)
}