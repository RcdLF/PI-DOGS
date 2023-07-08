import {
  GET_ALL_DOGS,
  GET_NAME_DOG,
  GET_DETAIL,
  FILTRO_CREADO,
  GET_TEMPERAMENTS,
  GET_BY_TEMPERAMENTS,
  FILTRO_TEMPERAMENTO,
  FILTRO_PESO,
  FILTRO_NOMBRE,
} from "./Actions";

const initialState = {
  allDogs: [],
  temperaments: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs:action.payload
    
      };
    case GET_NAME_DOG:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTRO_CREADO:
      const exist =
        action.payload === "Existing"
          ? state.allDogs.filter(el => !el.createdByDB)
          : state.allDogs.filter(el => el.createdByDB);
      return {
        ...state,
        allDogs: action.payload === "All" ? state.allDogs : exist,
      };
    case GET_BY_TEMPERAMENTS:
      console.log(action.payload.dogs);
     return {
      ...state,
      allDogs : action.payload.dogs
     }
    
    default:
      return state;
  }
}

export default rootReducer;
