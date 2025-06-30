export interface Room {
    id: string;
    uuid: string;
    public_link: string;
    map_selected: number;
    state: StateRoom;
    creator_id: number;
    spectators: string[];
    draft_session: DraftSession;
    attackers_side: Side;
    defenders_side: Side;
}

export enum StateRoomGame {
    WAITING = "waiting",
    RUNNING = "running",
    FINISHED = "finished"
}

export interface ButtonFrontState {
    title: string;
    action: () => void;
}

export type StateRoom = 'waiting' | 'running' | 'finished';
export type StateDraft = 'ban' | 'pick';

export type SideTeam = 'attackers_side' | 'defenders_side';

export interface Side {
    name: string;
    team_leader: number;
    isReady: boolean
    agents: Array<Agent | null>;
    bans: Array<Agent | null>;
}

export interface DraftAction {
    team: SideTeam;
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

export interface Agent {
  id: number;
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  releaseDate: string; // ISO format
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  roleId: number;
  backgroundGradientColors: string;
  role: AgentRole;
  abilities: AgentAbility[];
}

export interface AgentRole {
  id: number;
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface AgentAbility {
  id: number;
  agentId: number;
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export const referenceOrderDraftAction: DraftSession = {
    curent_turn: 0,
    draft_actions: [
        {
            team: 'attackers_side',
            type: 'ban',
            turn: 1
        },
        {
            team: 'defenders_side',
            type: 'ban',
            turn: 2
        },
        {
            team: 'attackers_side',
            type: 'pick',
            turn: 3
        },
        {
            team: 'defenders_side',
            type: 'pick',
            turn: 4
        },
        {
            team: 'defenders_side',
            type: 'pick',
            turn: 5
        },
        {
            team: 'attackers_side',
            type: 'pick',
            turn: 6
        },
        {
            team: 'attackers_side',
            type: 'pick',
            turn: 7
        },
        {
            team: 'defenders_side',
            type: 'ban',
            turn: 8
        },
        {
            team: 'attackers_side',
            type: 'ban',
            turn: 9
        },
        {
            team: 'defenders_side',
            type: 'pick',
            turn: 10
        },
        {
            team: 'defenders_side',
            type: 'pick',
            turn: 11
        },
        {
            team: 'attackers_side',
            type: 'pick',
            turn: 12
        },
        {
            team: 'attackers_side',
            type: 'pick',
            turn: 13
        },
        {
            team: 'defenders_side',
            type: 'pick',
            turn: 14
        }
    ],
}

export interface User {
    id: number;
    username: string;
    email: string;
    token?: string;
    createdAt?: string;
  }