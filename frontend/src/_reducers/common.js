import { createAction, handleActions } from 'redux-actions';
import {
  getSuggestions,
  getEstablishment,
  getProduct,
  search, 
  getAnnonce
} from '../api/search'

const SELECT_ITEM = 'SELECT_ITEM';

const PUBLIC_AD = 'PUBLIC_AD';

const CHANGE_USER = 'CHANGE_USER';
const FETCH_SUGGESTIONS_SUCCEEDED = 'FETCH_SUGGESTIONS_SUCCEEDED';
export const fetchSuggestionsSucceeded = createAction(
  FETCH_SUGGESTIONS_SUCCEEDED,
  result => ({ result }),
);
const FETCH_RESULT_SUCCEEDED = 'FETCH_RESULT_SUCCEEDED';
const FETCH_ESTABLISHMENT_SUCCEEDED = 'FETCH_ESTABLISHMENT_SUCCEEDED';
const FETCH_PRODUCT_SUCCEEDED = 'FETCH_PRODUCT_SUCCEEDED';
export const fetchEstablishmentSucceeded = createAction(
  FETCH_ESTABLISHMENT_SUCCEEDED,
  result => ({ result }),
);

export const fetchProductSucceeded = createAction(
  FETCH_PRODUCT_SUCCEEDED,
  result => ({ result }),
);
const FETCH_ANNONCE_SUCCEEDED = 'FETCH_ANNONCE_SUCCEEDED';
export const fetchAnnonceSucceeded = createAction(
  FETCH_ANNONCE_SUCCEEDED,
  result => ({ result }),
);


export const fetchResultSucceeded = createAction(
  FETCH_RESULT_SUCCEEDED,
  result => ({ result }),
);


export function fetchEstablishment(data) {
  return (dispatch) => {
    getEstablishment(data)
      .then((resp) => {
        dispatch(fetchEstablishmentSucceeded(resp.data));
      })
  };
}

export function fetchProduct(data) {
  return (dispatch) => {
    getProduct(data)
      .then((resp) => {
        dispatch(fetchProductSucceeded(resp.data));
      })
  };
}


export function fetchAnnonce(data) {
  return (dispatch) => {
    getAnnonce(data)
      .then((resp) => {
        dispatch(fetchAnnonceSucceeded(resp.data));
      })
  };
}

export function fetchSuggestions() {
  return (dispatch) => {
    getSuggestions()
      .then((resp) => {
        dispatch(fetchSuggestionsSucceeded(resp.data));
      })
  };
}

export function fetchResult(id) {
  return (dispatch) => {
    search(id)
      .then((resp) => {
        dispatch(fetchResultSucceeded(resp.data));
      })
  };
}

const ADD_ITEM = 'ADD_ITEM'; 
export const selectItem = createAction(
  SELECT_ITEM,
  item => ({ item }),
);




export const publicAnnonce = createAction(
  PUBLIC_AD,
);

export const addItem = createAction(
  ADD_ITEM,
  item => ({ item }),
);

export const changeUser = createAction(
  CHANGE_USER,
  user => ({ user }),
);

const initialState = {
  test: 'test',
  user: '',
  selectedItem:{},
  panel:[],
  suggestions:[],
  establishment:[],
  product:[],
  nbreAnnoce:0,
  annonce: [],
  result: [],
  data: {
    '1':[
    {
    id : 1,
    Latitude:35.833,
    Longitude:10.6387,
    name:"movenpick sousse",
    image:"/src/assets/img/M??venpick.jpg",
    description:"L'h??tel M??venpick Resort et Marine Spa 5* Sousse comprend 588 chambres, 22 suites avec balcon, 14 suites Executive avec terrasse et une suite pr??sidentielle, toutes ??quip??es pour satisfaire ?? nos h??tes les plus exigeants."
  },
  {
    id : 2,
    Latitude:35.933,
    Longitude:10.630997,
    name:"The Pearl Resort & Spa",
    image:"/src/assets/img/TheSpa.jpg",
    description:"Situ?? ?? Sousse, ?? 100 m??tres de la plage de Boujaafar, le Pearl Resort & Spa poss??de un restaurant, un parking priv?? gratuit, une piscine ext??rieure ouverte en saison et une sall..."
  }
],
'2':[
  {
  id : 3,
  Latitude:35.233595,
  Longitude:11.033690,
  name:"Iberostar Selection Royal El Mansour",
  image:"/src/assets/img/Iberostar.jpeg",
  description:"Install?? ?? Mahdia, pr??s des plages de la mer M??diterran??e, l'h??tel Iberostar Selection Royal El Mansour propose une piscine ext??rieure, un centre de thalassoth??rapie ainsi que des chambres et suites 5 ??toiles."
},
{
  id : 4,
  Latitude:35.533595,
  Longitude:11.033690,
  name:"El Mouradi Mahdia",
  image:"/src/assets/img/El.jpeg",
  description:"Situ?? sur une plage de la c??te m??diterran??enne, l'??tablissement El Mouradi Mahdia propose un h??bergement 5 ??toiles ?? 5 km de Mahdia et ?? 40 km de Monastir. Il dispose de deux piscines ext??rieures et d'une piscine int??rieure, et propose une grande vari??t?? d'activit??s."
}
]
  },
}
const reducer = handleActions({
  [selectItem]: (state, action) => ({
    ...state,
    selectedItem: action.payload.item,

  }),
  [addItem]:(state, action) => ({
    ...state,
    panel: [...state.panel , ...action.payload.item],
  }),
  [fetchSuggestionsSucceeded]: (state, action) => ({
    ...state,
    suggestions: action.payload.result
  }),
  [fetchEstablishmentSucceeded]: (state, action) => ({
    ...state,
    establishment: action.payload.result
  }),
  [fetchProductSucceeded]: (state, action) => ({
    ...state,
    product: action.payload.result
  }),
  [fetchAnnonceSucceeded]: (state, action) => ({
    ...state,
    annonce: action.payload.result
  }),
  [fetchResultSucceeded]: (state, action) => ({
    ...state,
    result: action.payload.result
  }),
  [changeUser]: (state, action) => ({
    ...state,
    user: action.payload.user
  }),
  [publicAnnonce]: (state) => ({
    ...state,
    nbreAnnoce: state.nbreAnnoce + 1
  }),
}, initialState);


export default reducer;
