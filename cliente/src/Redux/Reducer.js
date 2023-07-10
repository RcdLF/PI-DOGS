import {
  GET_ALL_DOGS,
  GET_NAME_DOG,
  GET_DETAIL,
  FILTRO_CREADO,
  GET_TEMPERAMENTS,
  GET_BY_TEMPERAMENTS,
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
        allDogs: action.payload,
      };
    case GET_NAME_DOG:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_DETAIL:
      console.log(action.payload);
      return {
        ...state,
        detail: action.payload.IdDog,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTRO_CREADO:
      const exist =
        action.payload === "Existing"
          ? state.allDogs.filter((el) => !el.createdByDB)
          : state.allDogs.filter((el) => el.createdByDB);
      return {
        ...state,
        allDogs: action.payload === "All" ? state.allDogs : exist,
      };
    case GET_BY_TEMPERAMENTS:
      if (!action.payload.dogs) {
        return {
          ...state,
          allDogs: action.payload,
        };
      }
      return {
        ...state,
        allDogs: action.payload.dogs,
      };
    case FILTRO_NOMBRE:
      let sortArr =
        action.payload === "Asc"
          ? state.allDogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: sortArr,
      };
      case FILTRO_PESO : 
      let arrPeso = action.payload === 'Asc' 
      ? state.allDogs.sort((a,b) => a.weight[0] - b.weight[0]): 
        state.allDogs
       return {
        ...state,
        allDogs : arrPeso
       }

    default:
      return state;
  }
}

export default rootReducer;
