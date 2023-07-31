import generalTypes, { GeneralState } from "./general.types";

const INITIAL_STATE: GeneralState = {
  lang: "EN",
  scrollTo: 0,
  cookiePolicy: true,

  positionVertical: false,
};

interface Action {
  type: string;
  payload: string;
}

const generalReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case generalTypes.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case generalTypes.SCROLL:
      return {
        ...state,
        scrollTo: action.payload,
      };
    case generalTypes.SET_COOKIE_POLICY:
      return {
        ...state,
        cookiePolicy: action.payload,
      };

    case generalTypes.POSITION_VERTICAL:
      return {
        ...state,
        positionVertical: action.payload,
      };

    default:
      return state;
  }
};

export default generalReducer;
