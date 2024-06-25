import express from "express";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import {socket} from "./socket";
import path from "path";
import { CARDS } from "./5. logics/CARDS";
import { shuffleCards } from "./5. logics/cards_logic";

import playerController from './6. controllers/user_controller'
import { addLoginData } from "./5. logics/user_logic";
import { distrabuteCards, manageRound, startGame } from "./5. logics/game_logics";



const app = express();
app.use(cors())
app.use(express.json());

const imageFolderPath = path.join(__dirname, '1.assets', 'cards')
app.use(express.static(imageFolderPath)); 

const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {
        origin: 'http://localhost:3000'
    }
});


app.use('/api', playerController)
// startGame()
// manageRound()
// distrabuteCards()

httpServer.listen(3001, () =>{
  console.log(`server listen in: http://localhost:${3001}`)
    socket({ io })}
);



