import { ActionTypes } from "../constants";

const initialState = { list: [], selectedPokemon: null };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POKEMONS:
      return { ...state, list: payload };
    case ActionTypes.REMOVED_POKEMON:
      state.list = state.list.filter((item) => item.id !== payload);
      return { ...state, list: [...state.list] };
    case ActionTypes.SELECTED_POKEMON:
      return { ...state, selectedPokemon: payload };
    case ActionTypes.UPDATE_POKEMON:
      const newList = state.list.map((pokemon) => {
        if (pokemon.id === payload.id) return payload;
        return pokemon;
      });
      return { ...state, list: [...newList] };
    default:
      return state;
  }
};

export default reducer;
