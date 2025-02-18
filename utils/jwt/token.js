import jwt from 'jsonwebtoken'
const { sign } = jwt
import config from '../../configs/config.js'

export const buildUserToken = (userdetail)=>{
   try{
    if(!userdetail) throw new Error("user details required for createToken");
    const token =  sign(userdetail,config.jwt_Secret,{expiresIn:'7d'});
    return token
   }catch(error){
    console.log(error);
   }
}