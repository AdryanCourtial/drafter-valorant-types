export interface Room {
    id: string;
    uuid: string;
    public_link: string;
    map_selected: string;
    state: StateRoom;
    creator_id: number;
    draft_session: DraftSession;
    attackers_side: Side;
    defenders_side: Side;
}
export interface Map {
    id: number;
    uuid: string;
    displayName: string;
    tacticalDescription: string;
    coordinates: string;
    displayIcon: string;
    listViewIcon: string;
    listViewIconTall: string;
    splash: string;
    stylizedBackgroundImage: string;
    premierBackgroundImage: string;
}
export declare enum StateRoomGame {
    WAITING = "waiting",
    RUNNING = "running",
    FINISHED = "finished"
}
export interface ButtonFrontState {
    title?: string;
    action?: () => void;
}
export type StateRoom = 'waiting' | 'running' | 'finished';
export type StateDraft = 'ban' | 'pick';
export type SideTeam = 'attackers_side' | 'defenders_side';
export interface Side {
    name: string;
    team_leader: number;
    isReady: boolean;
    agents: Array<Agent | null>;
    bans: Array<Agent | null>;
    winRate?: number;
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
    releaseDate: string;
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
export interface SocketError {
    message: string;
}
export declare const referenceOrderDraftAction: DraftSession;
export interface User {
    id: number;
    username: string;
    email: string;
    token?: string;
    createdAt?: string;
    drafts?: {
        uuid: string;
        createdAt: string;
    }[];
}
