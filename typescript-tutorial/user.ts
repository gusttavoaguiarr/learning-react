// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "Gustavo",
    email: "gustavo@gmail.com"
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "Gustavo",
    level: 10
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: "Gustavo",
    nickname: "gustavo",
    level: 9
}




