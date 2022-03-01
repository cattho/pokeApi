import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { logWithGoogle } from "../firebase/firebaseConfig"
import { typesUser } from "../types/types"


export const singUpEmailPass= (email,nombre,password) =>{
    return(dispatch)=>{
        const auth= getAuth()
        createUserWithEmailAndPassword(auth,email,password)
        .then(async({user})=>{
            await updateProfile(auth.currentUser,{displayName:nombre})
            dispatch(syncRegister(user.email,user.displayName,user.password,user.uid))
            console.log(user);
        })
        .catch(e=>{
            console.log(e);
        })
    }
}

export const syncRegister = (email,nombre,password) =>{
    return{
        type:typesUser.register,
        payload:{
            email,
            nombre,
            password
        }
    }
}

// login de usuario
export const asyncGoogleLogin = () =>{
    return(dispatch) =>{
        const auth = getAuth()
        signInWithPopup(auth,logWithGoogle)
        .then(({user})=>{
            dispatch(synclogin(user.uid, user.displayName))
        })
    }
}

export const emailPassLogin=(email,password) =>{
    return(dispatch) =>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{dispatch(
            synclogin(user.uid,user.displayName)
            )
            console.log(`Tu usuario es ${user}`);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}

export const synclogin=(uid,displayname) =>{
    return{
        type:typesUser.login,
        payload:{
            id:uid,
            name:displayname
        }
    }
}


// desconectando
export const logout = () =>{
    return(dispatch) =>{
        const auth = getAuth()
        signOut(auth)
        .then(() =>{
            console.log('Te haz desconectado');
        }).catch(error=>{console.log(error);}) 
    }
}