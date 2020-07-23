import api from "./Api";
import axios from "axios"
export default class FeteApi {
    constructor() {
        this.path = api
        this.createFetePath = this.path+"/fete/add"
        this.getUserFetePath = (userid)=> this.path+"/fete/user/"+userid
        this.reserverSallepath = (feteid,salleid) => this.path+"/fete/"+feteid+"/reserver/salle/"+salleid
        this.reserverDecoPath = (feteid,salleid) => this.path+"/fete/"+feteid+"/reserver/deco/"+salleid
    }


    async getUserFete(userid,token){
        return await axios.get(this.getUserFetePath(userid),{
            headers : {
                Authorization : token
            }
        }).then(response => response.data).catch(err => err)
    }
}