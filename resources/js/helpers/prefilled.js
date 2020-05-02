const PREFILLED_DATA = window.__PREFILLED_DATA || {};

export const getPrefilled = key => PREFILLED_DATA[key];

window.__PREFILLED_DATA = undefined;
