import axios from "../../utils/axios";

export const getAll = async function () {
  return await axios.get(`/pokemons`);
};

export const remove = async function (id) {
  return await axios.delete(`/pokemons/${id}`);
};

export const getOne = async function (id) {
  return await axios.get(`/pokemons/${id}`);
};

export const update = async function (id, data) {
    return await axios.put(`/pokemons/${id}`, data);
  };