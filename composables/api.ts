import axios from "axios"
import { stringifyQuery } from "vue-router";

const API_ROOT = typeof process != 'undefined' ? 'http://back' : '/api';

export async function api(path: string, body?: any) {
    path = API_ROOT + path;
    if (body) {
        path += (path.indexOf('?') == -1 ? '?' : '&') + stringifyQuery(body)
    }
    console.log('requesting ' + path);
    return (await axios.get(path)).data;
}