import axios from 'axios'
import {UserApi} from "./UserApi";
//mport SangApi from "../src/api/SangApi";



export default axios.defaults.baseURL = 'http://ed6b462efef1.ngrok.io/api';
//export const sangApi = new SangApi();
export const userApi = new UserApi();