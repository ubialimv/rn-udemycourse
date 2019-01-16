import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState= {
  places: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri: "http://www.turismo.pr.gov.br/arquivos/Image/Fotos_Foz/CatarataseCaminhosYup.jpg"
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };

    default:
      return state;
  }

};

export default reducer;