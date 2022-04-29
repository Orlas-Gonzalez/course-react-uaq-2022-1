import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import pokemonReducer from "./pokemonsReducer"

const reducers = combineReducers({
  account: accountReducer,
  pokemons: pokemonReducer,
});

export default reducers;
