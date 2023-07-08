import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_NAME_DOG = "GET_NAME_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_BY_TEMPERAMENTS = "GET_BY_TEMPERAMENTS"
export const GET_DETAIL = "GET_DETAIL";

export const FILTRO_CREADO = "FILTRO_CREADO";
export const FILTRO_TEMPERAMENTO = "FILTRO_TEMPERAMENTO";
export const FILTRO_PESO = "FILTRO_PESO";
export const FILTRO_NOMBRE = "FILTRO_NOMBRE";

export function getAllDogs() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: GET_ALL_DOGS,
      payload: json.data,
    });
  };
}

export function getByTemperament(temperament){
  return async function (dispatch){
    const json = await axios.get(`http://localhost:3001/dogs?temperament=${temperament}`);
    return dispatch({
      type: GET_BY_TEMPERAMENTS,
      payload : json.data
    })
  }
}


export function getDogByName(name) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
      type: GET_NAME_DOG,
      payload: json.data,
    });
  };
}

export function getIdDog(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/temperament");
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
}

// FILTROS :D //
export function filtroCreado(payload) {
  return {
    type: FILTRO_CREADO,
    payload,
  };
}

export function filtroTemp(payload) {
  return {
    type: FILTRO_TEMPERAMENTO,
    payload,
  };
}

export function filtroByWeight(payload) {
  return {
    type: FILTRO_PESO,
    payload,
  };
}

export function filterByName(payload) {
  return {
    type: FILTRO_NOMBRE,
    payload,
  };
}
