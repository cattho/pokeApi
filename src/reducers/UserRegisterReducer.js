import { typesUser } from "../types/types";

export const userRegisterReducer= (state={}, action) =>{
    switch(action.type){
        case typesUser.register:
            return{
                email: action.payload.email,
                nombre: action.payload.nombre,
                password:action.payload.password
            }
        default:
            return state;
            }
    }
