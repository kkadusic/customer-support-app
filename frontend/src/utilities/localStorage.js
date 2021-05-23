import {decode} from "jsonwebtoken";

const sessionItem = 'user';

// return token from local storage
export const getToken = () => {
    const session = localStorage.getItem(sessionItem);
    return session ? JSON.parse(session).jwt : null;
}

export const prepareUserObject = (token) => {
    let userData = decode(token).user;
    userData["jwt"] = token;
    return userData;
}

// return user from local storage
export const getUser = () => {
    const session = localStorage.getItem(sessionItem);
    if (session) {
        delete session.jwt;
        return JSON.parse(session);
    } else {
        return null;
    }
}

// set token and user to local storage
export const setSession = (session) => {
    localStorage.setItem(sessionItem, JSON.stringify(session));
}

// remove token and user from local storage
export const removeSession = () => {
    localStorage.removeItem(sessionItem);
}

export const validateToken = () => {
    const token = getToken();
    if (token === null)
        return false;
    const exp = decode(token, {complete: true}).payload.exp;
    return Date.now() < exp * 1000;
}
