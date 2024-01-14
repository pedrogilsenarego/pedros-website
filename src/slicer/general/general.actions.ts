import generalTypes, { Contrast } from "./general.types";

export const updateLang = (lang: string) => ({
  type: generalTypes.UPDATE_LANG,
  payload: lang,
});

export const scrollTo = (signal: string) => ({
  type: generalTypes.SCROLL,
  payload: signal,
});

export const setCookiePolicy = (signal: boolean) => ({
  type: generalTypes.SET_COOKIE_POLICY,
  payload: signal,
});

export const setPositionVertical = (position: boolean) => ({
  type: generalTypes.POSITION_VERTICAL,
  payload: position,
});

export const setContrast = (color: Contrast) => ({
  type: generalTypes.SET_CONTRAST,
  payload: color,
});
