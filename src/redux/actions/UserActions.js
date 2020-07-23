export const GET_USER_PENDING = "GET_USER_PENDING";
export const SIGN_UP_REJECT = "SIGN_UP_REJECT";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";





export const loadingAuth = ()=>({type : GET_USER_PENDING})
export const signupSuccess= (user,token)=>({type : SIGNUP_SUCCESS,user : user,token : token})
export const signupReject = ()=>({type : SIGN_UP_REJECT})


