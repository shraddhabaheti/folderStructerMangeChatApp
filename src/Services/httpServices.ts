import { AxiosResponse } from "axios";
import axiosInstance from "./axios";
export default {
    async get<T>(endpoint: string): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axiosInstance.get<T>(
            `${endpoint}`,
        );
        return response;
    },

    async post<T>(endpoint: string, data?: T): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axiosInstance.post<T>(
            `${endpoint}`,
            data
        );
        return response;
    },

    async put<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axiosInstance.put<T>(
            `${endpoint}`,
            data
        );
        return response;
    },

    async patch<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axiosInstance.patch<T>(
            `${endpoint}`,
            data,
        );
        return response;
    },

    async delete<T>(endpoint: string): Promise<AxiosResponse<T>> {
        const response: AxiosResponse<T> = await axiosInstance.delete<T>(
            `${endpoint}`,
        );
        return response;
    }

};
    
