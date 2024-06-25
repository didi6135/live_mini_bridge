import path from "path";
import fs from "fs";
import { shuffleCards } from "./cards_logic";
import { CARDS } from "./CARDS";
import { PlayerType } from "../4. models/player_model";

const filePath = path.join(__dirname, "players.json");
const data = fs.readFileSync(filePath, "utf-8");
let player_file = JSON.parse(data);

export const startGame = () => {
  player_file["maxRounds"] = Math.floor(52 / player_file.players.length);
  player_file["rounds"] = 1;
  fs.writeFileSync(filePath, JSON.stringify(player_file));
};

export const manageGame = () => {
    for (let round = 1; round < player_file.maxRounds; round++) {
        manageRound(round);
  }
};

export const manageRound = (round: number) => {
    const turn = round % player_file.players.length;
    distrabuteCards(round);

    bids(turn)



};

// Distrabute cards when start round
export const distrabuteCards = (round: number) => {
  const cards = shuffleCards(CARDS);
  player_file.players.forEach((player: PlayerType, index: number) => {
    let start = index * round;
    let end = start + round;
    return (player.cards = cards.slice(start, end));
  });
  fs.writeFileSync(filePath, JSON.stringify(player_file));
};

export const bids = (start_player) => {

    for(let i = 0; i < player_file.players.length; i++) {
        let playerIdx = (start_player + i) % player_file.players.length;
        player_file.players[playerIdx].turn = true 
    }
}


