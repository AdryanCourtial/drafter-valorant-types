export var StateRoomGame;
(function (StateRoomGame) {
    StateRoomGame["WAITING"] = "waiting";
    StateRoomGame["RUNNING"] = "running";
    StateRoomGame["FINISHED"] = "finished";
})(StateRoomGame || (StateRoomGame = {}));
export const referenceOrderDraftAction = {
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
            type: 'pick',
            turn: 8
        },
        {
            team: 'attackers_side',
            type: 'ban',
            turn: 9
        },
        {
            team: 'defenders_side',
            type: 'ban',
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
};
