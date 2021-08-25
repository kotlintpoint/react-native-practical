import { CREATE_USER, DELETE_USER } from "../actions/user"

const initialState={
    users : [{
        id:1,name:'Test',email:'test@gmail.com',mobile:'123123'
    }]
}

export default userReducer=(state=initialState, action)=>{
    switch(action.type){
        case CREATE_USER:
            const tempUser={...action.payload, id:state.users.length+1}
            const allUsers=state.users.push(tempUser)
            console.log(state.users)
            return {
                users : state.users
            }
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