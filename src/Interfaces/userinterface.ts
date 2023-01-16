export interface User {
    name?: string,
    email?: string,
    phone?: string | number | any,
    password?: string
}
export interface AccountCreationData extends User {

}
export interface Login {
    email?: string,
    password?: string
}
export interface IPassword {
    oldPassword?: string
    password?: string
    confirmPassword?: string
}