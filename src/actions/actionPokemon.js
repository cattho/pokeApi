import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typesPokemon } from "../types/types"


export const deleteAsync = (nombre) =>{
    return async (dispatch) =>{
        const deleteCollection = collection(db, 'pokemon')
        const q= query(deleteCollection, where("nombre", '==', nombre))

        const querySnapShot= await getDocs(q)
        querySnapShot.forEach((docu)=>{
            deleteDoc(doc(db,'pokemon',docu.id))
            .then(res=>{
                dispatch(deleteSync(nombre))
            })
        })
    }
}

export const deleteSync = (nombre) =>{
    return{
        type:typesPokemon.delete,
        payload:nombre
    }
}

export const listaPokemon= () =>{
    return async (dispatch) =>{
        const obtenerDatos= await getDocs(collection(db, 'pokemon'))
        const pokemon= []
        obtenerDatos.forEach((pokemonUser)=>{
            pokemon.push({
                ...pokemonUser.data()
            })
        })
        console.log(pokemon,'estoy en el action');
        dispatch(listPoke(pokemon))
    }
}

export const listPoke = (pokemon) =>{
    return{
        type:typesPokemon.list,
        payload:pokemon
    }
}


export const registroPokeAsync=(imagen,nombre,descripcion) =>{
    return(dispatch) =>{
        const newPoke={
            imagen,nombre,descripcion
        }
        addDoc(collection(db,'pokemon'),newPoke)
        .then(res =>{
            dispatch(registroPokeSync(newPoke))
            console.log('Informacion enviada correctamente')
        })
        .catch(error=>{console.log(error);
        })
    }
}

export const registroPokeSync= (pokemon) =>{
    return{
        type:typesPokemon.register,
        payload:pokemon
    }
}