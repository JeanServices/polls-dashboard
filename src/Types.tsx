export interface Guild {
    id: string | number | null
    name: string | null
    icon: string | null
    owner: boolean
    permissions: number | null
    features: Array<any>
    permissions_new: string | null
    joined: boolean
    memberCount: number | null
}

export interface Data {
    id: string | number | null
    username: string | null
    discriminator: number | null
    avatar: string | null
    sessionToken: string | null
    guilds: Array<Guild | any>
}