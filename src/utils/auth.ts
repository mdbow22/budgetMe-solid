import jwt_decode from 'jwt-decode';

export type UserType = {
    username: string;
    email: string;
    id: number;
    iat: number;
}

export const setToken = (token: string) => {
    localStorage.setItem('login_token',token);
}


export const getToken = () => {
    const token = localStorage.getItem('login_token');
    return token;
}

export const decode = () => {
    const token = getToken();
    if(!token) {
        return;
    }

    const user: UserType = jwt_decode(token);

    return user;
}

export const checkExpiration = (decoded: UserType) => {
    const expirationDate = decoded.iat * 1000;
    const now = Date.now();
    if(expirationDate < now || decoded === undefined) {
        return false;
    }

    return true;
}