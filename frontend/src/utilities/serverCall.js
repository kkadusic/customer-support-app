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

// Knowledge management

export const getEmployees = async () => {
    return (await axios.get(hostUrl + '/knowledge-management/employees', config())).data;
};

export const deleteEmployee = async (employeeId) => {
    return (await axios.delete(hostUrl + '/knowledge-management/employees/' + employeeId, config())).data;
};

export const addEducation = async (education) => {
    return (await axios.post(hostUrl + '/knowledge-management/employees/education', {...education}, config())).data;
};

export const deleteEducation = async (educationId) => {
    return (await axios.delete(hostUrl + '/knowledge-management/employees/education/' + educationId, config())).data;
};

export const addCertificate = async (certificate) => {
    return (await axios.post(hostUrl + '/knowledge-management/employees/certificate', {...certificate}, config())).data;
};

export const deleteCertificate = async (certificateId) => {
    return (await axios.delete(hostUrl + '/knowledge-management/employees/certificate/' + certificateId, config())).data;
};

// Incident management

export const getIncidents = async () => {
    return (await axios.get(hostUrl + '/incident-management/incidents', config())).data;
};
