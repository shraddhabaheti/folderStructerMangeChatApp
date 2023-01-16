import { getItemLocalStorage } from "./browserStorage"

export const isLogin=()=>{
    const token=getItemLocalStorage("token");
    if(token) return true
    else return false
}