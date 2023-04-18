// @ts-ignore
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {useAuth} from "./authentication";

export function api(options?: AxiosRequestConfig): AxiosInstance {
    let auth = useAuth()
    // @ts-ignore
    let token = auth.getAuth()?.jwt;
    // @ts-ignore
    const { VITE_NODE_ENV, VITE_API_URL } = import.meta.env;

    const defaultOptions: AxiosRequestConfig = {
        // @ts-ignore
        baseURL: ["production", "homolog", "development"].includes(VITE_NODE_ENV) ? VITE_API_URL : '',
        headers: {
            "Access-Control-Allow-Origin": VITE_API_URL,
            "X-Requested-With": "XMLHttpRequest",
            "jwt" : token ?  token : "",
        },
    };

    return axios.create({ ...defaultOptions, ...options });
}