import { CREATE_USER, DELETE_USER, SELECT_USER, UPDATE_USER } from "../actions/user"

const initialState={
    users : [{
        id:1,name:'Test',email:'test@gmail.com',phone:'123123'
    }]
}

export default userReducer=(state=initialState, action)=>{
    switch(action.type){
        case SELECT_USER:
            return {
                users : action.payload
            }
        case CREATE_USER:
            const tempUser={...action.payload}
            const allUsers=state.users.push(tempUser)
            console.log(state.users)
            return {
                users : state.users
            }
        case UPDATE_USER:
            //const tempUser={...action.payload}
            return state;

        case DELETE_USER:
            const newList=state.users.filter(user=>user.id !== action.payload)
            console.log(newList)
            return {
                users:newList
            }
        default:
            return state
    }
}