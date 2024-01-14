const generalTypes = {
  UPDATE_LANG: "UPDATE_LANG",
  SCROLL: "SCROLL",
  SET_COOKIE_POLICY: "SET_COOKIE_POLICY",

  POSITION_VERTICAL: "POSITION_VERTICAL",
  SET_CONTRAST: "SET_CONTRAST",
};

export type ListPos = "Home" | "Work";

export type Contrast = "grey" | "tealc" | "fuchsia";

export interface GeneralState {
  lang: string;
  scrollTo: ListPos;

  cookiePolicy: boolean;

  positionVertical: boolean;
  contrast: Contrast;
}

export default generalTypes;
