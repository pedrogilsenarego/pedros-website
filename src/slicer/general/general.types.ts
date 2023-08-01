const generalTypes = {
  UPDATE_LANG: "UPDATE_LANG",
  SCROLL: "SCROLL",
  SET_COOKIE_POLICY: "SET_COOKIE_POLICY",

  POSITION_VERTICAL: "POSITION_VERTICAL",
};

export type ListPos = "Home" | "Work";

export interface GeneralState {
  lang: string;
  scrollTo: ListPos;

  cookiePolicy: boolean;

  positionVertical: boolean;
}

export default generalTypes;
