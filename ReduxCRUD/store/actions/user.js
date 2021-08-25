export const CREATE_USER='CREATE_USER'

export const UPDATE_USER='UPDATE_USER'

export const DELETE_USER='DELETE_USER'

export const SELECT_USER='SELECT_USER'

export const createUser=(user)=>{
    return {
        type : CREATE_USER,
        payload : user
    }
}

export const deleteUser=(id)=>{
    return {
        type:DELETE_USER,
        payload:id
    }
}