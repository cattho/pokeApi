import { typesUser } from "../types/types";


export const userReducer = (state={}, action) => {
    switch(action.type){
        case typesUser.login:
            return{
                id:action.payload.id,
                name:action.payload.name
            }

        case typesUser.logout:
            return{}

        default:
            return state
    }
}
