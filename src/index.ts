export interface Room {
    id: string;
    uuid: string;
    public_link: string;
    map_selected: number;
    state: StateRoom;
    spectators: string[];
    attackers_side: Side;
    defenders_side: Side;
}

export type StateRoom = 'waiting' | 'running' | 'finished';
export type StateDraft = 'ban' | 'pick';


export interface Side {
    name: string;
    team_leader: number;
    agents: number[];
    bans: number[];
}

export interface DraftAction {
    team: 'attackers' | 'defenders';
    type: StateDraft;
    turn: number;
}

export interface DraftSession {
    curent_turn: number;
    draft_actions: DraftAction[];
}


export interface ReferenceOrderDraftAction {
    curent_turn: number;
    draft_actions: DraftAction[];
}

export const referenceOrderDraftAction: DraftSession = {
    curent_turn: 0,
    draft_actions: [
        {
            team: 'attackers',
            type: 'ban',
            turn: 1
        },
        {
            team: 'defenders',
            type: 'ban',
            turn: 2
        },
        {
            team: 'attackers',
            type: 'pick',
            turn: 3
        },
        {
            team: 'defenders',
            type: 'pick',
            turn: 4
        },
        {
            team: 'defenders',
            type: 'pick',
            turn: 5
        },
        {
            team: 'attackers',
            type: 'pick',
            turn: 6
        },
        {
            team: 'attackers',
            type: 'pick',
            turn: 7
        },
        {
            team: 'defenders',
            type: 'ban',
            turn: 8
        },
        {
            team: 'attackers',
            type: 'ban',
            turn: 9
        },
        {
            team: 'defenders',
            type: 'pick',
            turn: 10
        },
        {
            team: 'defenders',
            type: 'pick',
            turn: 11
        },
        {
            team: 'attackers',
            type: 'pick',
            turn: 12
        },
        {
            team: 'attackers',
            type: 'pick',
            turn: 13
        },
        {
            team: 'defenders',
            type: 'pick',
            turn: 14
        }
    ],
}