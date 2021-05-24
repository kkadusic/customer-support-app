import axios from 'axios';
import {getToken} from "./localStorage";

const hostUrl = process.env.REACT_APP_API_URL;

export const getParams = (args) => {
    return {
        params: {
            ...args
        }
    };
};

export const config = () => {
    const token = getToken();
    if (token === null) {
        return null;
    }
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
}

export const getEmployees = async () => {
    return (await axios.get(hostUrl + '/knowledge-management/employees', config())).data;
};

export const getEmployee = async (employeeId) => {
    return (await axios.get(hostUrl + '/knowledge-management/employees', getParams({employeeId}))).data;
};

export const deleteEmployee = async (employeeId) => {
    return (await axios.delete(hostUrl + '/knowledge-management/employees', getParams({employeeId}))).data;
};
