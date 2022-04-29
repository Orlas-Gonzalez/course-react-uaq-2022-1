import { ActionTypes } from "../constants";
import { getAll, remove, getOne, update } from "../services/pokemonService";

export const setPokemons = (pokemons) => {
  return {
    type: ActionTypes.SET_POKEMONS,
    payload: pokemons,
  };
};

export const setUpdatePokemon = (pokemon) => {
  return {
    type: ActionTypes.UPDATE_POKEMON,
    payload: pokemon,
  };
};

export const setRemovedPokemon = (id) => {
  return {
    type: ActionTypes.REMOVED_POKEMON,
    payload: id,
  };
};

export const selectedPokemon = (pokemon) => {
  return {
    type: ActionTypes.SELECTED_POKEMON,
    payload: pokemon,
  };
};

export const fetchPokemons = (filter) => {
  return async (dispatch) => {
    const { data } = await getAll(filter);
    dispatch(setPokemons(data));
  };
};

export const fetchPokemon = (id) => {
  return async (dispatch) => {
    const { data } = await getOne(id);
    dispatch(selectedPokemon(data));
  };
};

export const removePokemon = (id) => {
  return async (dispatch) => {
    await remove(id);
    dispatch(setRemovedPokemon(id));
  };
};

export const updatePokemon = (id, pokemon) => {
    return async(dispatch) => {
        const {data} = await update(id, pokemon);
        dispatch(setUpdatePokemon(data));        
    }
}