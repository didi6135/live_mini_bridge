import path from "path";
import fs from "fs";
import { PlayerType } from "../4. models/player_model";

const filePath = path.join(__dirname, "players.json");

export const addLoginData = (newPlayer: PlayerType) => {
  try {
    let parsedData: { players: PlayerType[] } = { players: [] };

    // Read the existing file if it exists
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      parsedData = JSON.parse(data);
    } 

    

    // Ensure the data has a players array
    if (!Array.isArray(parsedData.players)) {
      parsedData.players = [];
      
    }

    // Check if there are already 4 players
    if (parsedData.players.length >= 4) {
      return "Cannot add more players. The maximum number of players (4) has been reached.";
    }

    // Add the new player to the players array
    parsedData.players.push(newPlayer);

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(parsedData)); //,null,2,'utf-8'

    return newPlayer;
  } catch (error) {
    return "Error writing data to file:" + error;
  }
};

export const AddPlayer = (userName: string) => {
    const newPlayer: PlayerType = {
        
        name: userName,
        cards: [],
        score: 0,
        bids: 0,
        round_of_win: 0,
      };

    if (fs.existsSync(filePath)) {
        newPlayer.rule = 'player'
    } else {
        newPlayer.rule = 'admin'
        
    }

  // Update the new user
  const adding = addLoginData(newPlayer);

  return adding;
};

export const get_all_players = () => {
  // Read the existing file if it exists
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    const parsedData = JSON.parse(data);

    return parsedData.players.map((player) => {
      return player["name"];
    });
  }
};
