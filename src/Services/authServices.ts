import { Auth } from "../Interfaces/interface";
import { AccountCreationData, Login } from '../Interfaces/userinterface'
import httpServices from "./httpServices";
export const accountCreationServices = (payload: AccountCreationData) => {
    return httpServices.post('/users/register', payload)
}
export const loginServices = (payload: Login) => {
    return httpServices.post('/users/login', payload)
}
