import api from "./Api"
import axios from "axios";
import {loadingAuth, signupReject} from "../redux/actions/UserActions";

export class UserApi{
    constructor() {
        this.path = api
        this.pathLogin = this.path+"/user/login"
        this.pathSignuP = this.path+"/user/signup"
        this.pathLogout = this.path+"/user/logout"
    }

    login(user){
        return axios.post(this.pathLogin,user)
            .then(response =>{
                return response.data
            })
            .catch(err =>{
                return err
            })
    }

    signup(user){
        return axios.post(this.pathSignuP,user)
            .then(response =>{
                return response.data
            })
            .catch(err=>{
                return err
            })
    }

}