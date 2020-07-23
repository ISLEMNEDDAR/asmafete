import axios from 'axios'
import {UserApi} from "./UserApi";
import FeteApi from "./FeteApi";
//mport SangApi from "../src/api/SangApi";



export default axios.defaults.baseURL = 'http://34f2903722aa.ngrok.io/api';
//export const sangApi = new SangApi();
export const userApi = new UserApi();
export const feteApi = new FeteApi();