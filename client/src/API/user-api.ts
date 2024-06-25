import axios from "axios"
import { MANAGE_URI } from "./manageUri"




export const Add_new_user =async (name: string) => {
    try {
        const player = {
            userName: name
        }
        console.log(player)
        const add_user_to_the_game = await axios.post(MANAGE_URI.add_new_player, player)
        return add_user_to_the_game.data
    } catch (error) {
        console.log(error)
    }
}

export const get_all_players = async() => {
    try {
        const all_players = await axios.get(MANAGE_URI.get_players)
        return all_players.data
    } catch (error) {
        console.log(error)
    }
} 