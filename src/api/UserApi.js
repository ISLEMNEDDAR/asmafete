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

    }

    signup(user){
        return axios.post(api+"/user/signup",user)
            .then(response =>{
                return response.data
            })
            .catch(err=>{
                return err
            })
    }

}