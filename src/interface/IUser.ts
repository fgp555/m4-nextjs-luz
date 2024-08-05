export interface IUserSession {
    login?: boolean,
    token: string,
    user: {
        email: string,
        name: string,
        id: number,
        role: string,
        orders: [],
        phone: string,
        address: string,
    }
}