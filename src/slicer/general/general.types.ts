const generalTypes = {
  UPDATE_LANG: "UPDATE_LANG",
  SCROLL: "SCROLL",
  SET_COOKIE_POLICY: "SET_COOKIE_POLICY",

  POSITION_VERTICAL: "POSITION_VERTICAL",
};

export interface GeneralState {
  lang: string;
  scrollTo: number;

  cookiePolicy: boolean;

  positionVertical: boolean;
}

export default generalTypes;
