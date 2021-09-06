export const CREATE_USER='CREATE_USER'

export const UPDATE_USER='UPDATE_USER'

export const DELETE_USER='DELETE_USER'

export const SELECT_USER='SELECT_USER'

export const createUser=(user)=>{
    
    // api calling asynchronous 
    // get data from api
    // dispatch(object) => reducer 

    return async dispatch => {
        // async call
        const response = await fetch('https://rn-app-89452-default-rtdb.firebaseio.com/users.json',
                {
                    method:"POST",
                    headers : {
                        'Content-Type':'application/json'
                    },
                    body : JSON.stringify(user)
                })
        
        const respJson=await response.json()
        console.log(respJson)
        dispatch(
            { type : CREATE_USER, payload : {id : respJson.name, ...user }}
        )
    }

}

export const fetchUsers=()=>{
    
    // api calling asynchronous 
    // get data from api
    // dispatch(object) => reducer 

    return async dispatch => {
        // async call
        const response = await fetch('https://rn-app-89452-default-rtdb.firebaseio.com/users.json')
        
        const respJson=await response.json()
        //console.log(respJson)
        const loadUsers=[]

        for(key in respJson){
            // key, respJson[key]
            loadUsers.push({
                id : key,
                ...respJson[key]
            })
        }

        dispatch(
            { type : SELECT_USER, payload : loadUsers}
        )
    }

}

export const deleteUser=(id)=>{
    return async dispatch => {
        // async call
        const response = await fetch(`https://rn-app-89452-default-rtdb.firebaseio.com/users/${id}.json`,
                {
                    method:"DELETE"
                })
        
        const respJson=await response.json()
        console.log(respJson)
        dispatch(
            { type : DELETE_USER, payload : id }
        )
    }
}

export const updateUser=(user)=>{
    
    // api calling asynchronous 
    // get data from api
    // dispatch(object) => reducer 

    return async dispatch => {
        // async call
        const response = await fetch(`https://rn-app-89452-default-rtdb.firebaseio.com/users/${user.id}.json`,
                {
                    method:"PATCH",
                    headers : {
                        'Content-Type':'application/json'
                    },
                    body : JSON.stringify(user)
                })
        
        const respJson=await response.json()
        console.log(respJson)
        dispatch(
            { type : UPDATE_USER, payload : user }
        )
    }

}