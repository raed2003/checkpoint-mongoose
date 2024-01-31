import axios from 'axios'
import { GETUSERS } from './Actiontype'
export const getusers=()=>async(dispatch)=>{
    try {
        await axios.get('/user/get').then(res =>dispatch({type:GETUSERS,payload:res.data}));
    } catch (error) {
        console.log (error)
    }
}
export const addusers=(data)=>async(dispatch)=>{
    try {
        await axios.post("/user/add",data).then(res =>dispatch(getusers()))
    } catch (error) {
        console.log (error)
    }
}