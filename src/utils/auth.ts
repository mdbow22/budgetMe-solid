import jwt_decode from 'jwt-decode';
import { useUser } from './UserContext';

export type UserType = {
    username: string;
    email: string;
    id: number;
    iat: number;
}

export type Decode = (token?: string) => UserType;

export const setToken = (token: string) => {
    localStorage.setItem('login_token',token);
}


export const getToken = () => {
    const token = localStorage.getItem('login_token');
    return token;
}

export const decode: Decode = (token: any) => {
    const userToken = token ?? getToken();
    if(!userToken) {
        return;
    }

    const user: UserType = jwt_decode(userToken);

    return user;
}

export const checkExpiration = (decoded: UserType) => {
    const expirationDate = (decoded.iat * 1000) + 86400000;
    const now = Date.now();
    if(expirationDate < now || decoded === undefined) {
        return false;
    }

    return true;
}

export const removeToken = () => {
    localStorage.removeItem('login_token');
}