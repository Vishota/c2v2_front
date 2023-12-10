import axios from "axios"

const API_ROOT = typeof process != 'undefined' ? 'http://back' : '/api';

export async function api(path: string, body?: any) {
    path = API_ROOT + path;
    return (await axios.post(path, body)).data;
}