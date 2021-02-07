import Axios from 'axios';
export interface Response {
    exited_code: 1 | 0
    code: number
    data: any
}

export const apiPort: number = 7000;
export const apiURL: string = `http://localhost:${apiPort}`;
export const apiVersion: number = 1;

export const authURL: string = `${apiURL}/api/v${apiVersion}/auth/login`

export const clientURL: string = `http://localhost:3000`

export async function getUser(): Promise<Response | any> {
    let _r: any = await Axios({
        method: "GET",
        url: `${apiURL}/api/v${apiVersion}/auth/get/data`,
        withCredentials: true
    });

    return _r.data.data;
}