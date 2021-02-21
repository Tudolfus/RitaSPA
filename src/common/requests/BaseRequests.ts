import axios, { AxiosResponse } from "axios";

export const getRequest = async <T> (path: string): Promise<AxiosResponse<T>> => {
    return await axios.get(path);
}
