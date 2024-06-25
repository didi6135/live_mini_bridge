import { CardType } from "./card_model";


export type UserRuleType = 'admin' | 'player' 

export type PlayerType = {
    rule?: UserRuleType;
    name: string;
    cards: CardType[];
    score: number;
    bids: number;
    round_of_win: number;
    
}