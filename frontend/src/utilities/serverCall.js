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

export const getEmployeesWithEmpRole = async () => {
    return (await axios.get(hostUrl + '/knowledge-management/employees/emp', config())).data;
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

export const addIncident = async (incident) => {
    return (await axios.post(hostUrl + '/incident-management/incidents', {...incident}, config())).data;
};

export const getMyIncidents = async (employeeId) => {
    const headers = {...config(), ...getParams({employeeId})};
    return (await axios.get(hostUrl + '/incident-management/my-received-incidents', headers)).data;
};

export const forwardIncident = async (incidentData) => {
    return (await axios.post(hostUrl + '/incident-management/forward-incident', {...incidentData}, config())).data;
};

export const getSolutions = async () => {
    return (await axios.get(hostUrl + '/incident-management/solutions/all', config())).data;
};

export const addSolution = async (solution) => {
    return (await axios.post(hostUrl + '/incident-management/solutions', {...solution}, config())).data;
};
