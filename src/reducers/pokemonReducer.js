import { typesPokemon } from "../types/types";

export const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case typesPokemon.register:
            return {
                imagen: action.payload.imagen,
                nombre: action.payload.nombre,
                descripcion: action.payload.descripcion
            }
        case typesPokemon.list:
            return {
                pokemon: [...action.payload]
            }
        case typesPokemon.delete:
            return {
                pokemon: state.name.filter(estate => estate.id !== action.payload)
            }
        case typesPokemon.update:
            return {
                state
            }
        default:
            return state

      }
}