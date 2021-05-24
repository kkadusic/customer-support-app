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

// export const getCertificate = async (certificateId) => {
//     return (await axios.get(hostUrl + '/knowledge-management/employees/certificate/' + certificateId, config())).data;
// };

export const addEducation = async (education) => {
    return (await axios.post(hostUrl + '/knowledge-management/employees/education', {...education}, config())).data;
};

