import { getItemLocalStorage } from "./browserStorage"

export const isLogin=()=>{
    const token=getItemLocalStorage("userToken");
    if(token) return true
    else return false
}