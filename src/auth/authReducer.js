import { types } from '../types/types';

// const state = {
//     name : 'Nathaly',
//     logged: true
// }

// const loginAction = {
//         type: types.login,
//         payload:{
//             name: 'Nathaly',
//                 email: 'natyliz_1792@hotmail.com'
//         }
// }


export const authReducer = ( state = {} , action) => {
    switch (action.type) {
        case types.login:
        return {
            ...action.payload,
            logged: true
        }
        case types.logout:
        return {
            logged: false
        }
    
        default:
        return state; // siempre debe de retornar algo 
    }

}